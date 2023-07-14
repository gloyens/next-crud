import { kv } from "@vercel/kv";
import { ItemWrapper } from "./styles";

interface Props {
  title: string;
}

async function getData() {
  try {
    const data = await kv.hgetall('user:me');
    console.log(data);
    return data;
  } catch (error) {
    throw new Error('Failed to fetch data')
  }
}

export default async function Item({ title }: Props) {
  const data = await getData();

  return (
    <ItemWrapper>
      <h2>{title}</h2>
      <p>ID: {data.id}</p>
      <p>Email: {data.email}</p>
    </ItemWrapper>
  );
}
