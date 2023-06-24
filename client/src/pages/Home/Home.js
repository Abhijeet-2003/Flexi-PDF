import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../../components/Navbar/Navbar";
import './Home.css'

const Home = () => {
    return (
        <div className="Homepage">
            <Navbar/>

            <div className="collection">
                <Link to="/compress" >
                    <div className="card">
                        <div className="title">
                            Compress PDF
                        </div>

                        <div className="desc">
                            Reduce file size while optimizing for maximal PDF quality.
                        </div>
                    </div>
                </Link>
                <Link to="/ConvertPdfToDoc" >
                    <div className="card">

                        <div className="title">
                            PDF To DOCX
                        </div>
                        <div className="desc">
                            Easily convert your PDF files into easy to edit DOCX documents.
                        </div>
                    </div>
                </Link>
                <Link to="/ConvertPdfToPPT" >
                    <div className="card">

                        <div className="title">
                            PDF To PPTX
                        </div>
                        <div className="desc">
                            Turn your files into easy to edit PPTX slideshows.
                        </div>

                    </div>
                </Link>
                <Link to="/ConvertPdfToExcel" >
                    <div className="card">

                        <div className="title">
                            PDF To XLSX
                        </div>
                        <div className="desc">
                            Pull data straight from PDFs into Excel spreadsheets.
                        </div>

                    </div>
                </Link>
                <Link to="/ConvertPdfToZip" >
                    <div className="card">

                        <div className="title">
                            PDF To PNG
                        </div>
                        <div className="desc">
                            Convert each PDF page into a PNG.
                        </div>

                    </div>
                </Link>
            </div>

        </div>
    );
}
 
export default Home;