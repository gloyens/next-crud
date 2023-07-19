"use client";

import {
  ItemWrapper,
  InfoContainer,
  InProgressIcon,
  DoneIcon,
  ContentRow,
  Upvote,
} from "./styles";
import { upvoteItem } from "@/utils/server-actions";
import { FaCircleCheck, FaClock, FaHeart } from "react-icons/fa6";
import DeleteButton from "@/components/DeleteButton";
import { usePathname } from 'next/navigation';

interface Props {
  name: string;
  status: string;
  votes: string;
  url: string;
}

export default function Item({ name, status, votes, url }: Props) {
  const path = usePathname();

  return (
    <ItemWrapper>
      <InfoContainer>
        <ContentRow>
          <h2>{name}</h2>
          {status === "In Progress" && (
            <InProgressIcon title="In progress">
              <FaClock />
            </InProgressIcon>
          )}
          {status === "Done" && (
            <DoneIcon title="Done">
              <FaCircleCheck />
            </DoneIcon>
          )}
          {path === "/admin" && <DeleteButton itemName={name} />}
        </ContentRow>
        <ContentRow>
          <Upvote
            onClick={async () => {
              upvoteItem(name, Number(votes));
            }}
          >
            <FaHeart />
          </Upvote>
          <h3>{votes}</h3>
        </ContentRow>
      </InfoContainer>
      <InfoContainer>
        {status === "Done" ? (
          <a href={url} target="_blank">
            {url}
          </a>
        ) : (
          <p></p>
        )}
      </InfoContainer>
    </ItemWrapper>
  );
}
