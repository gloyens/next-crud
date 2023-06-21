import { ActionButtonWrapper } from "./styles";

interface Props {
  text: string;
}

export default function ActionButton({ text }: Props) {
  return (
    <ActionButtonWrapper>
      {text}
    </ActionButtonWrapper>
  );
}
