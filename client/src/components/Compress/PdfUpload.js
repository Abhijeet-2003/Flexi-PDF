import React, { useState, useRef } from "react";
import "./PdfUpload.css";
import "./PdfUpload.scss";
import adobe from "../../assets/Compress/adobe.png";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastMessage } from "../../utils/toastMessage";

function PDFUpload() {
  const ref1 = useRef();
  const ref2 = useRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const [isCompressed, setIsCompressed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { showToastMessage, showToastMessage2 } = toastMessage();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    // console.log(file);
    ref1.current.style.display = "block";
  };

  const handleExtreme = async () => {
    if (selectedFile) {
      var formData = new FormData();
      // console.log(selectedFile);
      formData.append("uploadedPDF", selectedFile);
      // console.log(formData);
      setIsCompressed(false);
      setIsLoading(true);
      console.log("extreme");
      try {
        await axios
          .post("http://localhost:8000/api/compress/extreme", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
          })
          .then((response) => {
            
            if (response.data === "compressed" && response.status === 200) {
              setIsCompressed(true);
            } 
            setIsLoading(false);
          })
          .catch((error) => {
            setIsCompressed(false);
            setIsLoading(false);
            showToastMessage();
            console.error(error);
          });
      } catch (err) {
        console.log(err);
      }
    }
    else{
      showToastMessage2();
    }
  };
  const handleMedium = async () => {
    if (selectedFile) {
      var formData = new FormData();
      // console.log(selectedFile);
      formData.append("uploadedPDF", selectedFile);
      // console.log(formData);
      setIsCompressed(false);
      setIsLoading(true);
      console.log("medium");
      try {
        await axios
          .post("http://localhost:8000/api/compress/medium", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
          })
          .then((response) => {

            if (response.data === "compressed" && response.status === 200) {
              setIsCompressed(true);
            } 
            setIsLoading(false);
          })
          .catch((error) => {
            setIsCompressed(false);
            setIsLoading(false);
            showToastMessage();
            console.error(error);
          });
      } catch (err) {
        console.log(err);
      }
    }
    else{
      showToastMessage2();
    }
  };
  const handleLow = async () => {
    if (selectedFile) {
      var formData = new FormData();
      // console.log(selectedFile);
      formData.append("uploadedPDF", selectedFile);
      // console.log(formData);
      setIsCompressed(false);
      setIsLoading(true);
      console.log("low");
      try {
        await axios
          .post("http://localhost:8000/api/compress/low", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
          })
          .then((response) => {

            if (response.data === "compressed" && response.status === 200) {
              setIsCompressed(true);
            } 
            setIsLoading(false);
          })
          .catch((error) => {
            setIsCompressed(false);
            setIsLoading(false);
            showToastMessage();
            console.error(error);
          });
      } catch (err) {
        console.log(err);
      }
    }
    else{
      showToastMessage2();
    }
  };

  const handleDownload = async () => {
    axios({
      url: `http://localhost:8000/api/compress/download/${selectedFile.name}`,
      method: "GET",
      responseType: "blob", // Specify the response type as blob
    })
      .then((response) => {
        // Create a download link for the PDF file
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `compressed-${selectedFile.name}`);
        document.body.appendChild(link);
        link.click();
        link.remove();
        setIsCompressed(false);

        handleDelete();
      })
      .catch((error) => {
        console.error("Error downloading PDF:", error);
      });
  };

  const handleDelete = async () => {
    axios
        .delete(
          `http://localhost:8000/api/compress/delete/${selectedFile.name}`
        )
        .then((response) => {
          console.log("Files deleted successfully");
        })
        .catch((error) => {
          console.error("Error deleting files:", error);
        });
  }

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
              <button onClick={handleExtreme}>Extreme Compression</button>
            )}
          </div>
          <div className="compress">
            {!isLoading && !isCompressed && (
              <button onClick={handleMedium}>Medium Compression</button>
            )}
          </div>
          <div className="compress">
            {!isLoading && !isCompressed && (
              <button onClick={handleLow}>Less Compression</button>
            )}
          </div>
        </div>
        {isLoading && (
          <div className="loading">
            <div>Converting...</div>
          </div>
        )}

        {isCompressed && (
          <button className="comp-download" ref={ref2} onClick={handleDownload}>
            Download
          </button>
        )}
      </div>
      <ToastContainer/>
    </div>
  );
}

export default PDFUpload;
