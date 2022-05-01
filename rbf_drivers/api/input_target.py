
from typing import Any, Optional, TYPE_CHECKING
from bpy.types import ID, Object, PropertyGroup
from bpy.props import EnumProperty, StringProperty, PointerProperty
from .mixins import Symmetrical
from ..app.events import dataclass, dispatch_event, Event
from ..app.utils import owner_resolve
from ..lib.transform_utils import ROTATION_MODE_ITEMS, TRANSFORM_TYPE_ITEMS, TRANSFORM_SPACE_ITEMS
if TYPE_CHECKING:
    from bpy.types import Context
    from .input import RBFDriverInput


INPUT_TARGET_ID_TYPE_ITEMS = [
    ('OBJECT'     , "Object"  , "", 'OBJECT_DATA',                0),
    ('MESH'       , "Mesh"    , "", 'MESH_DATA',                  1),
    ('CURVE'      , "Curve"   , "", 'CURVE_DATA',                 2),
    ('SURFACE'    , "Surface" , "", 'SURFACE_DATA',               3),
    ('META'       , "Metaball", "", 'META_DATA',                  4),
    ('FONT'       , "Font"    , "", 'FONT_DATA',                  5),
    ('HAIR'       , "Hair"    , "", 'HAIR_DATA',                  6),
    ('POINTCLOUD' , "Point"   , "", 'POINTCLOUD_DATA',            7),
    ('VOLUME'     , "Volume"  , "", 'VOLUME_DATA',                8),
    ('GPENCIL'    , "GPencil" , "", 'OUTLINER_DATA_GREASEPENCIL', 9),
    ('ARMATURE'   , "Armature", "", 'ARMATURE_DATA',              10),
    ('LATTICE'    , "Lattice" , "", 'LATTICE_DATA',               11),
    ('EMPTY'      , "Empty"   , "", 'EMPTY_DATA',                 12),
    ('LIGHT'      , "Light"   , "", 'LIGHT_DATA',                 13),
    ('LIGHT_PROBE', "Light"   , "", 'OUTLINER_DATA_LIGHTPROBE',   14),
    ('CAMERA'     , "Camera"  , "", 'CAMERA_DATA',                15),
    ('SPEAKER'    , "Speaker" , "", 'OUTLINER_DATA_SPEAKER',      16),
    ('KEY'        , "Key"     , "", 'SHAPEKEY_DATA',              17),
]

INPUT_TARGET_ID_TYPE_INDEX = [
    item[1] for item in INPUT_TARGET_ID_TYPE_ITEMS
    ]

INPUT_TARGET_ID_TYPE_TABLE = {
    item[0]: item[4] for item in INPUT_TARGET_ID_TYPE_ITEMS
    }


@dataclass(frozen=True)
class InputTargetPropertyUpdateEvent(Event):
    target: 'RBFDriverInputTarget'
    value: Any


@dataclass(frozen=True)
class InputTargetBoneTargetUpdateEvent(InputTargetPropertyUpdateEvent):
    value: str


@dataclass(frozen=True)
class InputTargetDataPathUpdateEvent(InputTargetPropertyUpdateEvent):
    value: str


@dataclass(frozen=True)
class InputTargetIDTypeUpdateEvent(InputTargetPropertyUpdateEvent):
    value: str


@dataclass(frozen=True)
class InputTargetObjectUpdateEvent(InputTargetPropertyUpdateEvent):
    value: Optional[Object]


@dataclass(frozen=True)
class InputTargetRotationModeUpdateEvent(InputTargetPropertyUpdateEvent):
    value: str


@dataclass(frozen=True)
class InputTargetTransformSpaceUpdateEvent(InputTargetPropertyUpdateEvent):
    value: str


@dataclass(frozen=True)
class InputTargetTransformTypeUpdateEvent(InputTargetPropertyUpdateEvent):
    value: str


def input_target_bone_target_did_update(target: 'RBFDriverInputTarget', _: 'Context') -> None:
    dispatch_event(InputTargetBoneTargetUpdateEvent(target, target.bone_target))


def input_target_data_path(target: 'RBFDriverInputTarget') -> str:
    return target.get("data_path", "")


def input_target_data_path_set(target: 'RBFDriverInputTarget', value: str) -> None:
    input: 'RBFDriverInput' = owner_resolve(target, ".variables")
    if input.type != 'NONE':
        raise RuntimeError((f'{target}.data_path is not writable '
                            f'for {input} because {input} type is {input.type}'))
    target["data_path"] = value
    dispatch_event(InputTargetDataPathUpdateEvent(target, value))


def input_target_id_type(target: 'RBFDriverInputTarget') -> int:
    return target.get("id_type", 0)


def input_target_id_type_set(target: 'RBFDriverInputTarget', value: int) -> None:
    input: 'RBFDriverInput' = owner_resolve(target, ".variables")
    if input.type != 'NONE':
        raise RuntimeError((f'{target}.id_type is not writable '
                            f'for {input} because {input} type is {input.type}'))
    target["id_type"] = value
    dispatch_event(InputTargetIDTypeUpdateEvent(target, target.id_type))


def input_target_object_did_update(target: 'RBFDriverInputTarget', _: 'Context') -> None:
    dispatch_event(InputTargetObjectUpdateEvent(target, target.object))


def input_target_rotation_mode_did_update(target: 'RBFDriverInputTarget', _: 'Context') -> None:
    dispatch_event(InputTargetObjectUpdateEvent(target, target.object))


def input_target_transform_space_did_update(target: 'RBFDriverInputTarget', _: 'Context') -> None:
    dispatch_event(InputTargetTransformSpaceUpdateEvent(target, target.transform_space))


def input_target_transform_type(target: 'RBFDriverInputTarget') -> int:
    return target.get("transform_type", 0)


def input_target_transform_type_set(target: 'RBFDriverInputTarget', value: int) -> None:
    input: 'RBFDriverInput' = owner_resolve(target, ".variables")
    if input.type in {'LOCATION', 'ROTATION', 'SCALE'}:
        raise RuntimeError((f'{target}.transform_type is not writable '
                            f'for {input} because {input} type is {input.type}'))
    target["transform_type"] = value
    dispatch_event(InputTargetTransformTypeUpdateEvent(target, target.transform_type))


class RBFDriverInputTarget(Symmetrical, PropertyGroup):

    bone_target: StringProperty(
        name="Bone",
        description="The pose bone to target",
        options=set(),
        update=input_target_bone_target_did_update
        )

    data_path: StringProperty(
        name="Path",
        description="The path to the target property",
        get=input_target_data_path,
        set=input_target_data_path_set,
        options=set(),
        )

    id_type: EnumProperty(
        name="Type",
        description="The type of ID to target",
        items=INPUT_TARGET_ID_TYPE_ITEMS,
        get=input_target_id_type,
        set=input_target_id_type_set,
        options=set(),
        )

    @property
    def id(self) -> Optional[ID]:
        """The target's ID data-block"""
        object = self.object
        if object is None or self.id_type == 'OBJECT': return object
        if object.type == self.id_type: return object.data

    object: PointerProperty(
        name="Object",
        description="The target object",
        type=Object,
        poll=lambda self, object: self.id_type in (object.type, 'OBJECT'),
        options=set(),
        update=input_target_object_did_update
        )

    rotation_mode: EnumProperty(
        name="Rotation",
        description="The rotation mode for the input target data",
        items=ROTATION_MODE_ITEMS,
        default=ROTATION_MODE_ITEMS[0][0],
        options=set(),
        update=input_target_rotation_mode_did_update
        )

    transform_space: EnumProperty(
        name="Space",
        description="The space for transform channels",
        items=TRANSFORM_SPACE_ITEMS,
        default=TRANSFORM_SPACE_ITEMS[0][0],
        options=set(),
        update=input_target_transform_space_did_update,
        )

    transform_type: EnumProperty(
        name="Type",
        description="The transform channel to target",
        items=TRANSFORM_TYPE_ITEMS,
        get=input_target_transform_type,
        set=input_target_transform_type_set,
        options=set(),
        )
