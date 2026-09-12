import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static assets from the React production build directory
app.use(express.static(path.join(__dirname, 'dist')));

// API Endpoint for Contact Form Submission
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all fields.' });
  }

  console.log(`New Message from ${name} (${email}): ${message}`);
  
  // Here you can integrate Nodemailer, SendGrid, or save to a local JSON log file.
  // For now, we will return a success mock response.
  return res.status(200).json({ 
    message: 'Thank you for your message! I will get back to you shortly.' 
  });
});

// Wildcard route to handle client-side routing (React Router fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
