import PDFServicesSdk from "@adobe/pdfservices-node-sdk";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const convertToDOCX = async (req, res) => {
    try {
    // Initial setup, create credentials instance.
    const credentials =  PDFServicesSdk.Credentials
         .servicePrincipalCredentialsBuilder()
         .withClientId(process.env.CLIENT_ID)
         .withClientSecret(process.env.CLIENT_SECRET)
         .build();

    //Create an ExecutionContext using credentials and create a new operation instance.
    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
        exportPDF = PDFServicesSdk.ExportPDF,
        exportPdfOperation = exportPDF.Operation.createNew(exportPDF.SupportedTargetFormats.DOCX);

    // Set operation input from a source file
    const input = PDFServicesSdk.FileRef.createFromLocalFile(
        `/tmp/${req.file.originalname}`);
    exportPdfOperation.setInput(input);
    
    const name = req.file.originalname;
    const newName = name.split(".")[0];
    // Execute the operation and Save the result to the specified location.
    const result = await exportPdfOperation.execute(executionContext);
    await result.saveAsFile(`/tmp/${newName}`)
    
    res.status(200).send('converted');
    } catch (err) {
    console.log('Exception encountered while executing operation:', err);

    const folderPath = `/tmp`;


  fs.readdir(folderPath, (error, files) => {
    if (error) {
      console.error('Error reading folder:', error);
      res.status(500).send('Error deleting files in tmp folder');
      return;
    }
  
    files.forEach((file) => {
      const filePath = join(folderPath, file);
      fs.unlink(filePath, (error) => {
        if (error) {
          console.error('Error deleting file:', error);
        } else {
          console.log(`Deleted file: ${filePath}`);
        }
      });
    });
  });

    res.status(err.statusCode).send('Error occurred during PDF conversion to DOCX.');
    }
};


export const convertToPPTX = async (req, res) => {
    try {
    // Initial setup, create credentials instance.
    const credentials =  PDFServicesSdk.Credentials
         .servicePrincipalCredentialsBuilder()
         .withClientId(process.env.CLIENT_ID)
         .withClientSecret(process.env.CLIENT_SECRET)
         .build();

    //Create an ExecutionContext using credentials and create a new operation instance.
    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
        exportPDF = PDFServicesSdk.ExportPDF,
        exportPdfOperation = exportPDF.Operation.createNew(exportPDF.SupportedTargetFormats.PPTX);

    // Set operation input from a source file
    const input = PDFServicesSdk.FileRef.createFromLocalFile(
        `/tmp/${req.file.originalname}`);
    exportPdfOperation.setInput(input);
    
    const name = req.file.originalname;
    const newName = name.split(".")[0];
    // Execute the operation and Save the result to the specified location.
    const result = await exportPdfOperation.execute(executionContext);
    await result.saveAsFile(`/tmp/${newName}`)
    
    res.status(200).send('converted');
    } catch (err) {
    console.log('Exception encountered while executing operation:', err);

    const folderPath = `/tmp`;


  fs.readdir(folderPath, (error, files) => {
    if (error) {
      console.error('Error reading folder:', error);
      res.status(500).send('Error deleting files in tmp folder');
      return;
    }
  
    files.forEach((file) => {
      const filePath = join(folderPath, file);
      fs.unlink(filePath, (error) => {
        if (error) {
          console.error('Error deleting file:', error);
        } else {
          console.log(`Deleted file: ${filePath}`);
        }
      });
    });
  });

    res.status(err.statusCode).send('Error occurred during PDF conversion to PPTX.');
    }
};
export const convertToXLSX = async (req, res) => {
    try {
    // Initial setup, create credentials instance.
    const credentials =  PDFServicesSdk.Credentials
         .servicePrincipalCredentialsBuilder()
         .withClientId(process.env.CLIENT_ID)
         .withClientSecret(process.env.CLIENT_SECRET)
         .build();

    //Create an ExecutionContext using credentials and create a new operation instance.
    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
        exportPDF = PDFServicesSdk.ExportPDF,
        exportPdfOperation = exportPDF.Operation.createNew(exportPDF.SupportedTargetFormats.XLSX);

    // Set operation input from a source file
    const input = PDFServicesSdk.FileRef.createFromLocalFile(
        `/tmp/${req.file.originalname}`);
    exportPdfOperation.setInput(input);
    
    const name = req.file.originalname;
    const newName = name.split(".")[0];
    // Execute the operation and Save the result to the specified location.
    const result = await exportPdfOperation.execute(executionContext);
    await result.saveAsFile(`/tmp/${newName}`)
    
    res.status(200).send('converted');
    } catch (err) {
    console.log('Exception encountered while executing operation:', err);

    const folderPath = `/tmp`;


  fs.readdir(folderPath, (error, files) => {
    if (error) {
      console.error('Error reading folder:', error);
      res.status(500).send('Error deleting files in tmp folder');
      return;
    }
  
    files.forEach((file) => {
      const filePath = join(folderPath, file);
      fs.unlink(filePath, (error) => {
        if (error) {
          console.error('Error deleting file:', error);
        } else {
          console.log(`Deleted file: ${filePath}`);
        }
      });
    });
  });

    res.status(err.statusCode).send('Error occurred during PDF conversion to XLSX.');
    }
};

export const convertToZip = async (req, res) => {
    try {
    // Initial setup, create credentials instance.
    const credentials =  PDFServicesSdk.Credentials
         .servicePrincipalCredentialsBuilder()
         .withClientId(process.env.CLIENT_ID)
         .withClientSecret(process.env.CLIENT_SECRET)
         .build();

    //Create an ExecutionContext using credentials and create a new operation instance.
    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
        exportPDFToImages = PDFServicesSdk.ExportPDFToImages,
        exportPDFToImagesOperation = exportPDFToImages.Operation.createNew(exportPDFToImages.SupportedTargetFormats.JPEG);

    // Set the output type to create zip of images.
    exportPDFToImagesOperation.setOutputType(exportPDFToImages.OutputType.ZIP_OF_PAGE_IMAGES);

    // Set operation input from a source file
    const input = PDFServicesSdk.FileRef.createFromLocalFile(
        `/tmp/${req.file.originalname}`);
    exportPDFToImagesOperation.setInput(input);

    const name = req.file.originalname;
    const newName = name.split(".")[0];
    // Execute the operation and Save the result to the specified location.
    await exportPDFToImagesOperation.execute(executionContext)
        .then(result => result[0].saveAsFile(`/tmp/${newName}`))
        .catch( err => {
            console.log('Exception encountered while executing operation', err);
        });

    // await result.saveAsFile(join(__dirname, `/convertedPDFs/`,newName))
        
    res.status(200).send('converted');
    } catch (err) {
    console.log('Exception encountered while executing operation', err);
    
    const folderPath = `/tmp`;


  fs.readdir(folderPath, (error, files) => {
    if (error) {
      console.error('Error reading folder:', error);
      res.status(500).send('Error deleting files in tmp folder');
      return;
    }
  
    files.forEach((file) => {
      const filePath = join(folderPath, file);
      fs.unlink(filePath, (error) => {
        if (error) {
          console.error('Error deleting file:', error);
        } else {
          console.log(`Deleted file: ${filePath}`);
        }
      });
    });
  });

    res.status(err.statusCode).send('Error occurred during PDF conversion to JPG.');
    }
};

export const downloadController = async (req, res) => {
    const name = req.params.name;
    const ext = req.params.type;
    const newName = name.split(".")[0] + ext;
    const convertedPDFPath = `/tmp/${newName}`;

    // Set the appropriate headers for the response
    if( ext === '.docx' ){
        await res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    }
    if( ext === '.pptx' ){
        await res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.presentationml.presentation')
    }
    if( ext === '.xlsx' ){
        await res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    }
    // await res.setHeader('Content-Disposition', 'attachment; filename="compressed.pdf"');

    // Send the file as the response
    await fs.createReadStream(convertedPDFPath).pipe(res);
};

export const deleteFiles = async (req, res) => {
  const folderPath = `/tmp`;


  fs.readdir(folderPath, (error, files) => {
    if (error) {
      console.error('Error reading folder:', error);
      res.status(500).send('Error deleting files in tmp folder');
      return;
    }
  
    files.forEach((file) => {
      const filePath = join(folderPath, file);
      fs.unlink(filePath, (error) => {
        if (error) {
          console.error('Error deleting file:', error);
        } else {
          console.log(`Deleted file: ${filePath}`);
        }
      });
    });
  });

  res.status(200).send('All files in tmp folder deleted successfully');
};