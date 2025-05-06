import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Server is running");
});
app.listen(PORT, () => {
  console.log(`🌐 Server is running on URL http://127.0.0.1:${PORT}`);
});
