// Define a file interface with a process method
interface FileOperations {
    process(): void;
}

// Define a PDF file processor
class PdfFile implements FileOperations {
    process(): void {
        console.log('Processing PDF file');
    }
}

// Define a Word file processor
class WordFile implements FileOperations {
    process(): void {
        console.log('Processing Word file');
    }
}

// Define an Excel file processor
class ExcelFile implements FileOperations {
    process(): void {
        console.log('Processing Excel file');
    }
}

interface FileProcessorFactoryModel {
    createFileProcessor(fileName: string): FileOperations;
}

// Define a file processing factory that creates the appropriate file processor
class FileProcessorFactory implements FileProcessorFactoryModel {
    createFileProcessor(fileType: string): FileOperations {
        const processor = {
            'pdf': new PdfFile(),
            'word': new WordFile(),
            'excel': new ExcelFile(),
        }
        return processor[fileType] ?? console.log('Unsupported file type');
    }
}

// Usage example
const factory = new FileProcessorFactory();

// Create a PDF file processor and process the file
const pdfFileProcessor = factory.createFileProcessor('pdf');
pdfFileProcessor.process(); // Output: Processing PDF file

// Create a Word file processor and process the file
const wordFileProcessor = factory.createFileProcessor('word');
wordFileProcessor.process(); // Output: Processing Word file

// // Create an Excel file processor and process the file
const excelFileProcessor = factory.createFileProcessor('excel');
excelFileProcessor.process(); // Output: Processing Excel file

// // Try to create an unsupported file processor and handle the error
try {
    const unsupportedFileProcessor = factory.createFileProcessor('unsupported');
} catch (e) {
    console.error(e); // Output: Error: Unsupported file type
}
