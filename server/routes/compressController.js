import PDFServicesSdk from "@adobe/pdfservices-node-sdk";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const extremeCompress = async (req, res) => {
  try {
    // Initial setup, create credentials instance.
    const credentials =
      PDFServicesSdk.Credentials.serviceAccountCredentialsBuilder()
        .fromFile(join(__dirname, 'pdfservices-api-credentials.json'))
        .build();

    // Create an ExecutionContext using credentials and create a new operation instance.
    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);
    const compressPDFOperation = PDFServicesSdk.CompressPDF.Operation.createNew();

    // Set operation input from a source file.
    const input = PDFServicesSdk.FileRef.createFromLocalFile(
      join(__dirname, `/PDFs/${req.file.originalname}`),
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
    await result.saveAsFile(join(__dirname, `/compressedPDFs/compressed-${req.file.originalname}`));
    // const msg = 'compressed';
    res.status(200).send('compressed');
    // res.send(result);
  } catch (err) {
    console.log('Exception encountered while executing operation:', err);
    res.status(500).send('Error occurred during PDF compression.');
  }
};

export const mediumCompress = async (req, res) => {
  try {
    // Initial setup, create credentials instance.
    const credentials =
      PDFServicesSdk.Credentials.serviceAccountCredentialsBuilder()
        .fromFile(join(__dirname, 'pdfservices-api-credentials.json'))
        .build();

    // Create an ExecutionContext using credentials and create a new operation instance.
    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);
    const compressPDFOperation = PDFServicesSdk.CompressPDF.Operation.createNew();

    // Set operation input from a source file.
    const input = PDFServicesSdk.FileRef.createFromLocalFile(
      join(__dirname, `/PDFs/${req.file.originalname}`),
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
    await result.saveAsFile(join(__dirname, `/compressedPDFs/compressed-${req.file.originalname}`));
    res.status(200).send('compressed');

    // res.send(result);
  } catch (err) {
    console.log('Exception encountered while executing operation:', err);
    res.status(500).send('Error occurred during PDF compression.');
  }
};

export const lowCompress = async (req, res) => {
  try {
    // Initial setup, create credentials instance.
    const credentials =
      PDFServicesSdk.Credentials.serviceAccountCredentialsBuilder()
        .fromFile(join(__dirname, 'pdfservices-api-credentials.json'))
        .build();

    // Create an ExecutionContext using credentials and create a new operation instance.
    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);
    const compressPDFOperation = PDFServicesSdk.CompressPDF.Operation.createNew();

    // Set operation input from a source file.
    const input = PDFServicesSdk.FileRef.createFromLocalFile(
      join(__dirname, `/PDFs/${req.file.originalname}`),
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
    await result.saveAsFile(join(__dirname, `/compressedPDFs/compressed-${req.file.originalname}`));
    res.status(200).send('compressed');

    // res.send(result);
  } catch (err) {
    console.log('Exception encountered while executing operation:', err);
    res.status(500).send('Error occurred during PDF compression.');
  }
};