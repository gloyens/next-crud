import { styled } from "@phntms/css-components";

import css from "./styles.module.css";

export const ItemWrapper = styled("li", {
  css: css.ItemWrapper,
});

export const InfoContainer = styled("div", {
  css: css.InfoContainer,
});

export const ContentRow = styled("div", {
  css: css.ContentRow,
});

export const Upvote = styled("span", {
  css: css.Upvote,
});

export const InProgressIcon = styled("span", {
  css: css.InProgressIcon,
});

export const DoneIcon = styled("span", {
  css: css.DoneIcon,
});

export const DeleteButton = styled("a", {
  css: css.DeleteButton,
});

export const ConfirmDelete = styled("div", {
  css: css.ConfirmDelete,
  variants: {
    visible: {
      true: css.ConfirmDelete_visible,
    },
  },
});