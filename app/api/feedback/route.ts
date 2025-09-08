import prisma from "@/lib/prisma";
import syncCurrentUser from "@/lib/sync-user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const dbUser = await syncCurrentUser();
    if (!dbUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await request.json();
    const { title, description, category } = body;
    const post = await prisma.post.create({
      data: {
        title,
        description,
        category,
        authorId: dbUser.id,
      },
    });
    return NextResponse.json(post);
  } catch (error) {
    console.error("error creating Post", error);
    return NextResponse.json(
      {
        error: "internal server error",
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
        vote: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(posts);
  } catch (error) {
    console.error("error fetching Posts", error);
    return NextResponse.json(
      {
        error: "internal server error",
      },
      { status: 500 },
    );
  }
}
