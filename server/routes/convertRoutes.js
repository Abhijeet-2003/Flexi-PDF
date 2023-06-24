import {Router} from 'express';
import { convertToDOCX, convertToPPTX, convertToXLSX, downloadController, deleteFiles } from './convertController.js';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + '/PDFs');
    },
    filename: (req, file, cb) => {
        console.log("File uploaded");
        console.log(file);
        cb(null, `${file.originalname}`);
    }
});

const upload = multer({storage: storage})

const router = Router();

router.post( '/docx', upload.single("uploadedPDF"), convertToDOCX );
router.post( '/pptx', upload.single("uploadedPDF"), convertToPPTX );
router.post( '/xlsx', upload.single("uploadedPDF"), convertToXLSX );
router.get('/download/:name/:type', downloadController);
router.delete('/delete/:name/:type', deleteFiles);

export default router;