import express from "express";
import multer from "multer"
import { generateResume } from "./handlers/generateResume";

const app = express();
const upload = multer({storage: multer.memoryStorage()});
const port = 3000;

app.use(express.json());

app.post('/generate', upload.single("file"), generateResume);

app.listen(port, () => {
    console.log("Server is running on port 3000");
})