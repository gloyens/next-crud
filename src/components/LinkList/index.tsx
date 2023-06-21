import LinkBox from "../LinkBox";
import ActionButton from "../ActionButton";
import { LinkListWrapper } from "./styles";

export default function LinkList() {
  return (
    <LinkListWrapper>
      <LinkBox url="/placeholder.jpg" />
      <LinkBox url="/placeholder.jpg" />
      <LinkBox url="/placeholder.jpg" />
      <LinkBox url="/placeholder.jpg" />
      <LinkBox url="/placeholder.jpg" />
      <LinkBox url="/placeholder.jpg" />
      <ActionButton text="Go" />
    </LinkListWrapper>
  );
}
