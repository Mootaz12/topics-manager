"use client";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const EditTopic = ({ params }) => {
  const [topic, setTopic] = useState(null);
  const [dataForm, setDataForm] = useState({ title: "", description: "" });
  const titleRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/topics?id=${params.id}`
        );
        if (response.status === 200) {
          setTopic(response.data.topic);
          setDataForm(response.data.topic);
        } else {
          throw new Error("Failed to fetch topic");
        }
      } catch (error) {
        console.error("Error fetching topic:", error);
      }
    };

    fetchData();
  }, [params.id]);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = async () => {
    try {
      await axios.put(`http://localhost:3000/api/topics?id=${params.id}`, {
        newTitle: dataForm.title,
        newDescription: dataForm.description,
      });
      router.replace("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <form className="space-y-4">
        <input
          onChange={handleChange}
          ref={titleRef}
          type="text"
          name="title"
          value={dataForm.title}
          className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
        />
        <input
          onChange={handleChange}
          type="text"
          name="description"
          value={dataForm.description}
          className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleClick}
          type="button"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Update Topic
        </button>
      </form>
    </div>
  );
};

export default EditTopic;
