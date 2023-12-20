import mongoose from "mongoose";
const connection = async function () {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/topicsdb");
  } catch (err) {
    console.error(err);
  }
};
export default connection;
