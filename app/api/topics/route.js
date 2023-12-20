import connection from "@/libs/db";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";
export async function POST(req) {
  const { title, description } = await req.json();
  await connection();
  await Topic.create({ title, description });
  return NextResponse.json(
    { message: "topic created successfully" },
    { statusCode: 201 }
  );
}
export async function GET(req, res) {
  await connection();
  const id = new URL(req.url).searchParams.get("id");

  if (id) {
    const topic = await Topic.findById(id);
    return NextResponse.json({ topic }, { statusCode: 200 });
  } else {
    const topics = await Topic.find();
    return NextResponse.json({ topics: topics }, { statusCode: 200 });
  }
}
export async function DELETE(req) {
  await connection();
  const id = new URL(req.url).searchParams.get("id");
  await Topic.findByIdAndDelete(id);
  //   await Topic.save();
  return NextResponse.json(
    { message: "topic got deleted" },
    { statusCode: 200 }
  );
}

export async function PUT(req, res) {
  await connection();
  const id = new URL(req.url).searchParams.get("id");
  const { newTitle: title, newDescription: description } = await req.json();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "topic got updated" });
}
