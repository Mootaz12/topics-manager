import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import axios from "axios";

const RemoveBtn = ({ topicId, handleDelete }) => {
  const deleteTopic = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/topics?id=${topicId}`);
      handleDelete(topicId);
    } catch (error) {
      console.error("Error deleting topic:", error);
    }
  };

  return (
    <button onClick={deleteTopic} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveBtn;
