import Navbar from "../../components/Navbar/Navbar";
import ToDoc from "../../components/ToDoc/ToDoc";
import './Doc.css'

const Doc = () => {
    return (
        <div className="Doc-home">
            <Navbar/>

            <ToDoc/>
        </div>
    );
}
 
export default Doc;