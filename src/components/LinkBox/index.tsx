import Image from "next/image";
import { LinkBoxWrapper } from "./styles";

interface Props {
  url: string;
}

export default function LinkBox({ url }: Props) {
  return (
    <LinkBoxWrapper>
      <Image src={url} alt="Placeholder image" fill/>
    </LinkBoxWrapper>
  );
}
