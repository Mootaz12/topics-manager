"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn.jsx";
import { HiPencilAlt } from "react-icons/hi";
import axios from "axios";

const TopicList = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/topics");
        if (response.status === 200) {
          setTopics(response.data.topics);
        } else {
          throw new Error("Failed to fetch topics");
        }
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };
    fetchTopics();
  }, []);
  const handleDelete = (deletedId) => {
    setTopics(topics.filter((topic) => topic._id !== deletedId));
  };
  return (
    <div>
      {topics.map((topic) => (
        <div
          key={topic._id}
          className="border rounded-lg p-4 mb-4 flex items-center justify-between"
        >
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">{topic.title}</h2>
            <div className="text-gray-600">{topic.description}</div>
          </div>
          <div className="flex items-center space-x-4">
            <RemoveBtn topicId={topic._id} handleDelete={handleDelete} />
            <Link href={`/editTopic/${topic._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopicList;
