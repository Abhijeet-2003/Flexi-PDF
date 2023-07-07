import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
const app = express();
dotenv.config();

import compressRoutes from "./routes/compressRoutes.js"
import convertRoutes from "./routes/convertRoutes.js"
// import downloadRoutes from "./routes/downloadRoutes.js"
const PORT = process.env.PORT || 8000;


app.use(express.json());
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
        allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
    })
);

app.listen(PORT, () => {
    console.log(`server is running on port no ${PORT}`)
});

app.use('/api/compress', compressRoutes);
app.use('/api/convert', convertRoutes);
// app.use('/api/download', downloadRoutes);