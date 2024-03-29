
from typing import (
    Any,
    Generic,
    Iterable,
    Iterator,
    List,
    Optional,
    Tuple,
    Union
    )
from uuid import uuid4
from .interfaces import ICollection, TPropertyGroup
from bpy.types import PropertyGroup
from bpy.props import StringProperty

class Collection(Generic[TPropertyGroup]):

    @property
    def internal__(self) -> ICollection[TPropertyGroup]:
        raise NotImplementedError(f'{self.__class__.__name__}.internal__')

    def __len__(self) -> int:
        return len(self.internal__)

    def __iter__(self) -> Iterator[TPropertyGroup]:
        return iter(self.internal__)

    def __getitem__(self, key: Union[int, str, slice]) -> Union[TPropertyGroup, List[TPropertyGroup]]:
        if not isinstance(key, (int, str, slice)):
            raise TypeError((f'{self.__class__.__name__}[key]: '
                             f'Expected key to be int, str or slice, not {key.__class__.__name__}'))
        return self.internal__[key]

    def __contains__(self, key: Union[str, Any]) -> bool:
        return self.find(key) != -1 if isinstance(key, str) else any(member == key for member in self)

    def find(self, key: str) -> int:
        '''Returns the index of a key in a collection or -1 when not found.'''
        if not isinstance(key, str):
            raise TypeError((f'{self.__class__.__name__}.find(name) '
                             f'Expected name to be str, not {key.__class__.__name__}'))
        return next((index for index, member in enumerate(self) if member.name == key), -1)

    def get(self, name: str, default: Optional[object]=None) -> Any:
        '''Returns the value of the item assigned to key or default when not found.'''
        if not isinstance(name, str):
            raise TypeError((f'{self.__class__.__name__}.get(name, default) '
                             f'Expected name to be str, not {name.__class__.__name__}'))
        return next((member for member in self if member.name == name), default)

    def index(self, item: TPropertyGroup) -> int:
        '''Return the index of an item in a collection, raising a ValueError when not found.'''
        index = next((index for index, member in enumerate(self) if member == item), -1)
        if index == -1:
            raise ValueError((f'{self.__class__.__name__}.index(item): '
                              f'item is not a member of this collection'))
        return index

    def keys(self) -> Iterable[str]:
        '''Return the names of collection members.'''
        return self.internal__.keys()

    def items(self) -> Iterable[Tuple[str, TPropertyGroup]]:
        '''Return name value pairs of collection members'''
        return self.internal__.items()


class Reorderable(Collection[TPropertyGroup]):

    def move(self, from_index: int, to_index: int) -> None:

        if not isinstance(from_index, int):
            raise TypeError((f'{self.__class__.__name__}.move(from_index, to_index): '
                             f'Expected from_index to be int, not {from_index.__class__.__name__}'))

        if not isinstance(to_index, int):
            raise TypeError((f'{self.__class__.__name__}.move(from_index, to_index): '
                             f'Expected to_index to be int, not {to_index.__class__.__name__}'))

        if 0 > from_index >= len(self):
            raise IndexError((f'{self.__class__.__name__}.move(from_index, to_index): '
                              f'from_index {from_index} out of range 0-{len(self)-1}'))

        if 0 > to_index >= len(self):
            raise IndexError((f'{self.__class__.__name__}.move(from_index, to_index): '
                              f'to_index {to_index} out of range 0-{len(self)-1}'))

        self.internal__.move(from_index, to_index)


class Searchable(Generic[TPropertyGroup]):

    def search(self, identifier: str) -> Optional[TPropertyGroup]:

        if not isinstance(identifier, str):
            raise TypeError((f'{self.__class__.__name__}.search(identifier): '
                             f'Expected identifer to be str, not {identifier.__class__.__name__}'))

        return next((item for item in self if item.identifier == identifier), None)


def identifier(pgroup: 'Identifiable') -> str:
    value = PropertyGroup.get(pgroup, "identifier")
    if not value:
        value = uuid4().hex
        PropertyGroup.__setitem__(pgroup, "identifier", value)
    return value


class Identifiable:

    identifier: StringProperty(
        name="Identifier",
        description="Unique data identifier",
        get=identifier,
        options={'HIDDEN'}
        )


class Symmetrical(Identifiable):

    symmetry_identifier: StringProperty(
        name="Symmetry Identifier",
        get=lambda self: self.get("symmetry_identifier", ""),
        options=set(),
        )

    @property
    def has_symmetry_target(self) -> bool:
        return bool(self.symmetry_identifier)
