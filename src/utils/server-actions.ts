"use server";

import { DEL, VOTE } from "@/app/api/route";
import { revalidatePath } from "next/cache";

export async function deleteItem(name:string) {
  DEL(name);
  revalidatePath("");
}

export async function upvoteItem(name:string, votes:number) {
  VOTE(name, votes + 1);
  revalidatePath("");
}