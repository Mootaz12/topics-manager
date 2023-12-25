import connection from "@/libs/db.js";
import Topic from "@/models/topic.js";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { title, description } = await req.json();
    await connection();
    await Topic.create({ title, description });
    return NextResponse.json(
      { message: "topic created successfully" },
      { statusCode: 201 }
    );
  } catch (error) {
    console.error("Error creating topic:", error);
    return NextResponse.error("Failed to create topic", { statusCode: 500 });
  }
}

export async function GET(req, res) {
  try {
    await connection();
    const id = new URL(req.url).searchParams.get("id");

    if (id) {
      const topic = await Topic.findById(id);
      return NextResponse.json({ topic }, { statusCode: 200 });
    } else {
      const topics = await Topic.find();
      return NextResponse.json({ topics: topics }, { statusCode: 200 });
    }
  } catch (error) {
    console.error("Error fetching topics:", error);
    return NextResponse.error("Failed to fetch topics", { statusCode: 500 });
  }
}

export async function DELETE(req) {
  try {
    await connection();
    const id = new URL(req.url).searchParams.get("id");
    await Topic.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "topic got deleted" },
      { statusCode: 200 }
    );
  } catch (error) {
    console.error("Error deleting topic:", error);
    return NextResponse.error("Failed to delete topic", { statusCode: 500 });
  }
}

export async function PUT(req, res) {
  try {
    await connection();
    const id = new URL(req.url).searchParams.get("id");
    const { newTitle: title, newDescription: description } = await req.json();
    await Topic.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: "topic got updated" });
  } catch (error) {
    console.error("Error updating topic:", error);
    return NextResponse.error("Failed to update topic", { statusCode: 500 });
  }
}
