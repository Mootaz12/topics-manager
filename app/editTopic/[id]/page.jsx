"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
const EditTopic = ({ topicId }) => {
  const [topic, setTopic] = useState(null);
  useEffect(() => {
    const fetchData = async function () {
      const topic = axios.get(
        `https://localhost:3000/api/topics?id=${topicId}`
      );
      setTopic((prev) => topic);
    };
    fetchData();
  }, [topicId]);
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <form className="space-y-4">
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Update Topic
        </button>
      </form>
    </div>
  );
};

export default EditTopic;
