import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 py-4">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-white text-lg font-semibold hover:underline"
        >
          TOPICS
        </Link>
        <Link
          href="/addTopic"
          className="text-white text-lg font-semibold hover:underline"
        >
          Add Topic
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
