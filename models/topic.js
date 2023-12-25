import mongoose from "mongoose";

let Topic;

try {
  Topic = mongoose.model("Topic");
} catch {
  const topicSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

  Topic = mongoose.model("Topic", topicSchema);
}

export default Topic;
