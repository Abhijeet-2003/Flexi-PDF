import PDFServicesSdk from "@adobe/pdfservices-node-sdk";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const extremeCompress = async (req, res) => {
  try {
    // Initial setup, create credentials instance.
    const credentials =  PDFServicesSdk.Credentials
         .servicePrincipalCredentialsBuilder()
         .withClientId(process.env.CLIENT_ID)
         .withClientSecret(process.env.CLIENT_SECRET)
         .build();

    // Create an ExecutionContext using credentials and create a new operation instance.
    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);
    const compressPDFOperation = PDFServicesSdk.CompressPDF.Operation.createNew();

    // Set operation input from a source file.
    const input = PDFServicesSdk.FileRef.createFromLocalFile(
      join(__dirname, `/tmp/${req.file.originalname}`),
      PDFServicesSdk.CompressPDF.SupportedSourceFormat.pdf
    );
    compressPDFOperation.setInput(input);

    // Provide any custom configuration options for the operation.
    const options = new PDFServicesSdk.CompressPDF.options.CompressPDFOptions.Builder()
      .withCompressionLevel(PDFServicesSdk.CompressPDF.options.CompressionLevel.HIGH)
      .build();
    compressPDFOperation.setOptions(options);

    // Execute the operation and save the result to the specified location.
    const result = await compressPDFOperation.execute(executionContext);
    await result.saveAsFile(join(__dirname, `/tmp/compressed-${req.file.originalname}`));
    // const msg = 'compressed';
    res.status(200).send('compressed');
    // res.send(result);
  } catch (err) {
    console.log('Exception encountered while executing operation:', err);

    const originalPDFPath = join(__dirname, `tmp`);

  if( fs.existsSync(originalPDFPath) ){
    fs.rm(originalPDFPath, {recursive: true}, (error) => {
      if (error) {
        console.error('Error deleting tmp folder', error);
        res.status(500).send('Error deleting tmp folder');
      } else {
        console.log('tmp folder deleted successfully');
        res.status(200).send('tmp folder deleted successfully');
        // res.status(200).send('Original file deleted');
      }
    });
  }

    res.status(err.statusCode).send('Error occurred during PDF compression.');
  }
};

export const mediumCompress = async (req, res) => {
  try {
    // Initial setup, create credentials instance.
    const credentials =  PDFServicesSdk.Credentials
         .servicePrincipalCredentialsBuilder()
         .withClientId(process.env.CLIENT_ID)
         .withClientSecret(process.env.CLIENT_SECRET)
         .build();

    // Create an ExecutionContext using credentials and create a new operation instance.
    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);
    const compressPDFOperation = PDFServicesSdk.CompressPDF.Operation.createNew();

    // Set operation input from a source file.
    const input = PDFServicesSdk.FileRef.createFromLocalFile(
      join(__dirname, `/tmp/${req.file.originalname}`),
      PDFServicesSdk.CompressPDF.SupportedSourceFormat.pdf
    );
    compressPDFOperation.setInput(input);

    // Provide any custom configuration options for the operation.
    const options = new PDFServicesSdk.CompressPDF.options.CompressPDFOptions.Builder()
      .withCompressionLevel(PDFServicesSdk.CompressPDF.options.CompressionLevel.MEDIUM)
      .build();
    compressPDFOperation.setOptions(options);

    // Execute the operation and save the result to the specified location.
    const result = await compressPDFOperation.execute(executionContext);
    await result.saveAsFile(join(__dirname, `/tmp/compressed-${req.file.originalname}`));
    res.status(200).send('compressed');

    // res.send(result);
  } catch (err) {
    console.log('Exception encountered while executing operation:', err);

    const originalPDFPath = join(__dirname, `tmp`);

  if( fs.existsSync(originalPDFPath) ){
    fs.rm(originalPDFPath, {recursive: true}, (error) => {
      if (error) {
        console.error('Error deleting tmp folder', error);
        res.status(500).send('Error deleting tmp folder');
      } else {
        console.log('tmp folder deleted successfully');
        res.status(200).send('tmp folder deleted successfully');
        // res.status(200).send('Original file deleted');
      }
    });
  }

    res.status(err.statusCode).send('Error occurred during PDF compression.');
  }
};

export const lowCompress = async (req, res) => {
  try {
    // Initial setup, create credentials instance.
    const credentials =  PDFServicesSdk.Credentials
         .servicePrincipalCredentialsBuilder()
         .withClientId(process.env.CLIENT_ID)
         .withClientSecret(process.env.CLIENT_SECRET)
         .build();

    // Create an ExecutionContext using credentials and create a new operation instance.
    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);
    const compressPDFOperation = PDFServicesSdk.CompressPDF.Operation.createNew();

    // Set operation input from a source file.
    const input = PDFServicesSdk.FileRef.createFromLocalFile(
      join(__dirname, `/tmp/${req.file.originalname}`),
      PDFServicesSdk.CompressPDF.SupportedSourceFormat.pdf
    );
    compressPDFOperation.setInput(input);

    // Provide any custom configuration options for the operation.
    const options = new PDFServicesSdk.CompressPDF.options.CompressPDFOptions.Builder()
      .withCompressionLevel(PDFServicesSdk.CompressPDF.options.CompressionLevel.LOW)
      .build();
    compressPDFOperation.setOptions(options);

    // Execute the operation and save the result to the specified location.
    const result = await compressPDFOperation.execute(executionContext);
    await result.saveAsFile(join(__dirname, `/tmp/compressed-${req.file.originalname}`));
    res.status(200).send('compressed');

    // res.send(result);
  } catch (err) {
    console.log('Exception encountered while executing operation:', err);

    const originalPDFPath = join(__dirname, `tmp`);

  if( fs.existsSync(originalPDFPath) ){
    fs.rm(originalPDFPath, {recursive: true}, (error) => {
      if (error) {
        console.error('Error deleting tmp folder', error);
        res.status(500).send('Error deleting tmp folder');
      } else {
        console.log('tmp folder deleted successfully');
        res.status(200).send('tmp folder deleted successfully');
        // res.status(200).send('Original file deleted');
      }
    });
  }

    res.status(err.statusCode).send('Error occurred during PDF compression.');
  }
};

export const downloadController = async (req, res) => {
  const compressedPDFPath = join(__dirname, `tmp/compressed-${req.params.name}`);
  // const originalPDFPath = join(__dirname, `PDFs/${req.params.name}`);

  // Set the appropriate headers for the response
  await res.setHeader('Content-Type', 'application/pdf');
  await res.setHeader('Content-Disposition', 'attachment; filename="compressed.pdf"');

  // Send the file as the response
  await fs.createReadStream(compressedPDFPath).pipe(res);
}

export const deleteFiles = async (req, res) => {
  // const compressedPDFPath = join(__dirname, `tmp/compressed-${req.params.name}`);
  const originalPDFPath = join(__dirname, `tmp`);

  if( fs.existsSync(originalPDFPath) ){
    fs.rm(originalPDFPath, {recursive: true}, (error) => {
      if (error) {
        console.error('Error deleting tmp folder', error);
        res.status(500).send('Error deleting tmp folder');
      } else {
        console.log('tmp folder deleted successfully');
        res.status(200).send('tmp folder deleted successfully');
        // res.status(200).send('Original file deleted');
      }
    });
  }
}
