import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {dbName:"beta-house"});
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

export { connect };