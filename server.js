import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert import.meta.url to __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serving static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
