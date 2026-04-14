const mongoURI = process.env.MONGO_URI;
const mongoose = require("mongoose");

if (!mongoURI) {
  console.error("❌ MONGO_URI not found in environment variables");
  process.exit(1);
}

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("✅ Connected to MongoDB");
    startServer();
  })
  .catch(err => {
    console.error("❌ DB Connection Error:", err.message);
    process.exit(1);
  });