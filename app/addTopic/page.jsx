"use client";
import axios from "axios";
import React, { useState } from "react";

const Page = () => {
  const [topicData, setTopicData] = useState({ title: "", description: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/topics", {
        title: topicData.title,
        description: topicData.description,
      });
      setTopicData({ title: "", description: "" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Topic Title"
          className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
          value={topicData.title}
          onChange={(e) =>
            setTopicData({ ...topicData, title: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Topic Description"
          className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
          value={topicData.description}
          onChange={(e) =>
            setTopicData({ ...topicData, description: e.target.value })
          }
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add Topic
        </button>
      </form>
    </div>
  );
};

export default Page;
