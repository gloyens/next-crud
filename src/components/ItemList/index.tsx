import Item from "../Item";
import { ItemListWrapper } from "./styles";

export default function ItemList() {
  return (
    <ItemListWrapper>
      <Item title="Title 1" />
      <Item title="Title 2" />
      <Item title="Title 3" />
      <Item title="Title 4" />
      <Item title="Title 5" />
      <Item title="Title 6" />
    </ItemListWrapper>
  );
}
