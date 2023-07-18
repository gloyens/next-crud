import EditItem from "@/components/EditItem";
import ItemList from "@/components/ItemList";

import { PageWrapper } from "./styles";

export default function Home() {
  return (
    <PageWrapper>
      <h1>Hello World</h1>
      <EditItem />
      <ItemList />
    </PageWrapper>
  );
}
