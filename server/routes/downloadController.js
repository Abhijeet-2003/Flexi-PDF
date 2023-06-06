import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export const downloadController = async (req, res) => {
    const compressedPDFPath = join(__dirname, `compressedPDFs/compressed-${req.params.name}`);
    const originalPDFPath = join(__dirname, `PDFs/${req.params.name}`);

  // Set the appropriate headers for the response
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="compressed.pdf"');

  // Send the file as the response
  fs.createReadStream(compressedPDFPath).pipe(res);

  
  // Delete the original PDF file
  fs.unlink(originalPDFPath, (error) => {
    if (error) {
      console.error('Error deleting original PDF file:', error);
    } else {
      console.log('Original PDF file deleted successfully');
    }
  });

  fs.unlink(compressedPDFPath, (error) => {
    if (error) {
      console.error('Error deleting compressed PDF file:', error);
    } else {
      console.log('Compressed PDF file deleted successfully');
    }
  });

}