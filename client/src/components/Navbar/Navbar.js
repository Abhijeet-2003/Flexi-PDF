import './Navbar.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import logo from "../../assets/Navbar/logo.png"
import drop from "../../assets/Navbar/drop.svg"
import dropColor from "../../assets/Navbar/drop-color.svg"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="App-name">
                <Link to="/"><img src={logo} alt="" className="logo" />Flexi~<span className='pdf'>PDF</span></Link>
            </div>
            <div className="links">
                <div className="dropdown">
                    <div className="dropbtn">Convert 
                        <img src={drop} alt="" className='drop'/>
                        <img src={dropColor} alt="" className='color-drop'/>
                    </div>
                    <div className="dropdown-content">
                        <div className="row">
                            <Link to="/ConvertPdfToDoc">PDF To DOCX</Link>
                            <Link to="/ConvertPdfToPPT">PDF To PPTX</Link>
                        </div>
                        <div className='row'>
                            <Link to="/ConvertPdfToExcel">PDF To XLSX</Link>
                            <Link to="/ConvertPdfToZip">PDF To JPG</Link>
                        </div>
                    </div>
                </div>
                <Link to="/compress">Compress</Link>
            </div>
        </div>
    );
}
 
export default Navbar;