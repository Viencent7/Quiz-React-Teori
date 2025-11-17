import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const memes = await prisma.meme.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(memes);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, imageUrl, description } = body;
    if (!title || !imageUrl) return NextResponse.json({ error: "title and imageUrl required" }, { status: 400 });

    const meme = await prisma.meme.create({
      data: { title, imageUrl, description },
    });
    return NextResponse.json(meme, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "invalid" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, title, imageUrl, description } = body;
    if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });

    const updated = await prisma.meme.update({
      where: { id: Number(id) },
      data: { title, imageUrl, description },
    });
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: "update failed" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { id } = body;
    if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });

    await prisma.meme.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "delete failed" }, { status: 500 });
  }
}
