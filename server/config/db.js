const mongoose = require("mongoose");
const colors = require("colors");
const { query } = require("express");
const connectDB = async () => {
    // strict query
  mongoose.set("strictQuery", true);
  
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to Mongodb Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`MONGO Connect Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
