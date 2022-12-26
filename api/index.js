import express from 'express'
import FeatureProducts from './features.js'
const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api/features", (req, res) => {
    res.json({FeatureProducts});
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});