"use server";

import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function GET() {
  // const data = await kv.randomkey();
  const data = await kv.scan(0);
  return NextResponse.json(data[1]);
}

export async function DEL(name:string) {
  await kv.del(name);
}

export async function VOTE(key:string, value:number) {
  await kv.hset(key, {votes: value});
}
