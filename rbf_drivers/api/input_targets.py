
from typing import Any, Dict, Iterator, List, Optional, Sequence, Union
from bpy.types import PropertyGroup
from bpy.props import CollectionProperty, IntProperty
from .input_target import RBFDriverInputTarget

class RBFDriverInputTargets(PropertyGroup):

    collection__internal__: CollectionProperty(
        type=RBFDriverInputTarget,
        options={'HIDDEN'}
        )

    length__internal__: IntProperty(
        get=lambda self: self.get("length__internal__", 0),
        options=set()
        )

    def __contains__(self, target: Any) -> bool:
        return any([item == target for item in self])

    def __len__(self) -> int:
        return self.length__internal__

    def __iter__(self) -> Iterator[RBFDriverInputTarget]:
        for index in range(len(self)):
            yield self.collection__internal__[index]

    def __getitem__(self, key: Union[int, slice]) -> Union[RBFDriverInputTarget, List[RBFDriverInputTarget]]:
        return self.collection__internal__[key]

    def __init__(self, targets: Sequence[Dict[str, Any]]) -> None:
        collection = self.collection__internal__
        collection.clear()
        self["length__internal__"] = len(targets)
        for props in targets:
            collection.add().__init__(**props)

    def search(self, identifier: str) -> Optional[RBFDriverInputTarget]:
        return next((target for target in self.collection__internal__ if target.identifier == identifier), None)
