"use client";

import {
  DeleteButton,
  ConfirmDelete,
  ItemWrapper,
  InfoContainer,
  InProgressIcon,
  DoneIcon,
  ContentRow,
  Upvote,
} from "./styles";
import { deleteItem, upvoteItem } from "@/utils/server-actions";
import { useState } from "react";
import { FaCircleCheck, FaClock, FaHeart, FaTrash } from "react-icons/fa6";

interface Props {
  name: string;
  status: string;
  votes: string;
  url: string;
}

export default function Item({ name, status, votes, url }: Props) {
  const [popupVisible, setPopupVisible] = useState(false);

  const handlePopup = () => {
    setPopupVisible(!popupVisible);
  };

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
        {!popupVisible && (
          <DeleteButton onClick={handlePopup} title="Delete">
            <FaTrash />
          </DeleteButton>
        )}
        <ConfirmDelete visible={popupVisible}>
          <p>Are you sure?</p>
          <button
            onClick={() => {
              deleteItem(name);
              setPopupVisible(false);
            }}
          >
            Yes
          </button>
          <button onClick={handlePopup}>No</button>
        </ConfirmDelete>
      </InfoContainer>
    </ItemWrapper>
  );
}
