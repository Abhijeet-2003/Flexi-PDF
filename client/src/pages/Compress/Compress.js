import PDFUpload from "../../components/Compress/PdfUpload";
import Navbar from "../../components/Navbar/Navbar";
import './Compress.css'

const Compress = () => {
    return (
        <div className="Compress-Page">
            <Navbar/>

            <PDFUpload/>
        </div>
    );
}
 
export default Compress;