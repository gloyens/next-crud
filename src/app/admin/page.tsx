import EditItem from "@/components/EditItem";
import ItemList from "@/components/ItemList";

import { cookies } from 'next/headers'
import { PageWrapper } from "../styles";

export default function Admin() {
  if (cookies().get("passwordCookie")?.value === "password") {
    return (
      <PageWrapper>
        <h1>Icon Votes (Admin)</h1>
        <EditItem />
        <ItemList />
      </PageWrapper>
    );
  } else {
    return (
      <PageWrapper>
        <h1>Access denied</h1>
        <p>bitch</p>
      </PageWrapper>
    )
  }
}
