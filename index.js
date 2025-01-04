import express from "express";
import cors from "cors";

import productRouter from "./api/routes/productRoute.js";

const app = express();
app.use(cors())

const port = 3000;

app.use(express.json())

app.use('/api/products', productRouter);

app.get('/', (req, res) => {
    res.json('API is running');
})

app.listen(port, () => {
    console.log('Server is running on port', port);
})