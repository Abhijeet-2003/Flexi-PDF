import "../Compress/PdfUpload.css"
import "../Compress/PdfUpload.scss"
import React, { useState, useRef } from 'react';
import adobe from "../../assets/Compress/adobe.png"
import axios from 'axios'

const ToXL = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [isCompressed, setIsCompressed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const ref1 = useRef();
    const ref2 = useRef();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        // console.log(file);
        ref1.current.style.display = 'block';
    };

    const handleXL = async () => {
        if(selectedFile){
            var formData = new FormData();
            // console.log(selectedFile);
            formData.append('uploadedPDF', selectedFile);
            // console.log(formData);
            setIsCompressed(false);
            setIsLoading(true);
            console.log('xlsx');
            try{
            await axios.post("http://localhost:8000/api/convert/xlsx", formData, {
                headers: {
                'Content-Type': 'multipart/form-data',
                },
                withCredentials: true
            }).then((response) => {
                if(response.data === 'converted'){
                setIsCompressed(true);
                setIsLoading(false);
                }
            }).catch((error) => {
                console.error(error);
            });
            } catch(err) {
            console.log(err);
            }
        }
    };

    const handleDownload = async () => {
        axios({
          url: `http://localhost:8000/api/convert/download/${selectedFile.name}/.xlsx`,
          method: 'GET',
          responseType: 'blob', // Specify the response type as blob
        })
          .then((response) => {
            // Create a download link for the PDF file
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            const name = selectedFile.name;
            const newName = name.split(".")[0];
            const convertedPDFPath = newName + '.xlsx';
            console.log(response);
            link.setAttribute('download', convertedPDFPath);
            document.body.appendChild(link);
            link.click();
            link.remove();
            setIsCompressed(false);
    
            axios.delete(`http://localhost:8000/api/convert/delete/${selectedFile.name}/.xlsx`)
            .then((response) => {
              console.log('Files deleted successfully');
            })
            .catch((error) => {
              console.error('Error deleting files:', error);
            });
    
          })
          .catch((error) => {
            console.error('Error downloading XLSX:', error);
          });
    };

    return (
        <div className="Upload">
        <div className="upload-left">
            <img src={adobe} alt="" className="adobe" ref={ref1} />
            <input
            type="file"
            name="pdf"
            accept=".pdf"
            onChange={handleFileChange}
            className="pdf-input"
            />
        </div>

        <div className="upload-right">
            <div className="comp-buttons">
            <div className="compress">
                {!isLoading && !isCompressed && (
                <button onClick={handleXL}>Convert To XLSX</button>
                )}
            </div>
            </div>
            {isLoading && <div className="loading">Converting... </div>}

            {isCompressed && (
            <button className="comp-download" ref={ref2} onClick={handleDownload}>
                Download
            </button>
            )}
        </div>
        </div>
    );
};

export default ToXL;
