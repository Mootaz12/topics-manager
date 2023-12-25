"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const EditTopic = (params) => {
  const [topic, setTopic] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/topics?id=${params.id}`
        );
        if (response.status === 200) {
          setTopic(response.data);
        } else {
          throw new Error("Failed to fetch topic");
        }
      } catch (error) {
        console.error("Error fetching topic:", error);
      }
    };

    fetchData();
  }, [topicId]);

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <form className="space-y-4">
        <input
          type="text"
          defaultValue={topic ? topic.title : ""} // Set default value if topic exists
          className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          defaultValue={topic ? topic.description : ""} // Set default value if topic exists
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
