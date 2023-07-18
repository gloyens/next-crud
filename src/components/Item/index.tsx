"use client";

import { ItemWrapper } from "./styles";
import { deleteItem } from "@/utils/server-actions";
import { upvoteItem } from "@/utils/server-actions";

interface Props {
  name: string;
  status: string;
  votes: string;
  url: string;
}

export default async function Item({ name, status, votes, url }: Props) {
  return (
    <ItemWrapper>
      <h2>{name}</h2>
      <p>Status: {status}</p>
      <p>Votes: {votes}</p>
      <p>URL: {url}</p>
      <button
        onClick={async () => {
          upvoteItem(name, Number(votes));
        }}
      >
        Upvote
      </button>
      <button
        onClick={async () => {
          deleteItem(name);
        }}
      >
        Delete
      </button>
    </ItemWrapper>
  );
}
