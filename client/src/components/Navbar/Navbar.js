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
                <Link to="/compress">Compress</Link>
                <div className="dropdown">
                    <div className="dropbtn">Convert To 
                        <img src={drop} alt="" className='drop'/>
                        <img src={dropColor} alt="" className='color-drop'/>
                    </div>
                    <div className="dropdown-content">
                        <Link to="/ConvertToDoc">Word</Link>
                        <Link to="/ConvertToPPT">Powerpoint</Link>
                        <Link to="/ConvertToExcel">Excel</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;