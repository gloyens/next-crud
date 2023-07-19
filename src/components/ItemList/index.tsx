import { kv } from "@vercel/kv";
import Item from "../Item";
import { ItemListWrapper } from "./styles";

export default async function ItemList() {
  // Bring data to frontend
  const array = await kv.scan(0);
  const names = array[1];
  const data = await Promise.all(
    names.map(async (name) => {
      const itemData = await kv.hgetall(name);
      return itemData! as { [key: string]: string };
    })
  );

  return (
    <ItemListWrapper>
      {data.map((itemData, index) => {
        return (
          <Item
            key={index}
            name={itemData.name}
            status={itemData.status}
            votes={itemData.votes}
            url={itemData.url}
          />
        );
      })}
    </ItemListWrapper>
  );
}
