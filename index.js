const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

// API Endpoints
app.get('/api', (req, res) => {
    res.json({ message: "Welcome to Ishtiaq Ahmad's API Server!", status: "success" });
});

app.get('/api/health', (req, res) => {
    res.json({ status: "UP", timestamp: new Date() });
});

app.get('/api/info', (req, res) => {
    res.json({ app: "Node App & Static Site", version: "1.0.0", environment: "production" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
