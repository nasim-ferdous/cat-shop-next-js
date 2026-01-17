import { NextResponse } from "next/server";
import cats from "../../data/cat";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (id) {
    const cat = cats.find((c) => c._id === id);
    return NextResponse.json(cat || {});
  }

  return NextResponse.json(cats);
}
