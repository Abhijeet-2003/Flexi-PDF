import express from 'express'
import cors from 'cors'
const app = express();

import compressRoutes from "./routes/compressRoutes.js"
// import downloadRoutes from "./routes/downloadRoutes.js"

app.use(express.json());
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
        allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
    })
);

app.listen(8000, () => {
    console.log("server started on 8000")
});

app.use('/api/compress', compressRoutes);
// app.use('/api/download', downloadRoutes);