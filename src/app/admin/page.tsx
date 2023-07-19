import EditItem from "@/components/EditItem";
import ItemList from "@/components/ItemList";

import { cookies } from 'next/headers'
import { PageWrapper } from "../styles";

export default function Admin() {
  if (cookies().get("passwordCookie")?.value === process.env.ADMIN_PASSWORD) {
    return (
      <PageWrapper>
        <h1>Admin Panel</h1>
        <EditItem />
        <ItemList />
      </PageWrapper>
    );
  } else {
    return (
      <PageWrapper>
        <h1>Access denied</h1>
      </PageWrapper>
    )
  }
}
