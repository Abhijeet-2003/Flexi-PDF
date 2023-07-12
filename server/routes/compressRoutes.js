import {Router} from 'express';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/tmp');
    },
    filename: (req, file, cb) => {
        console.log("File uploaded");
        console.log(file);
        cb(null, `${file.originalname}`);
    }
});

const upload = multer({storage: storage})

const router = Router();

import {extremeCompress, mediumCompress, lowCompress, deleteFiles, downloadController} from "./compressController.js";

router.post('/extreme', upload.single("uploadedPDF"), extremeCompress);
router.post('/medium', upload.single("uploadedPDF"), mediumCompress);
router.post('/low', upload.single("uploadedPDF"), lowCompress);
router.get('/download/:name', downloadController);
router.delete('/delete/:name', deleteFiles)

export default router;