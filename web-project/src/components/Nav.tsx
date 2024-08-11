import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Sobre from './paginas/Sobre';



function Nav () {
    
    return (
        <Router>
        <ul id="nav">
            <li className="nav"><a className="link" href="/">Home</a></li>
            <li className="nav"><Link className="link" to="/sobre">Sobre</Link></li>
            <li className="nav"><a href="#" className="link">Contato</a></li>
            <li className="nav"><a href="#" className="link conhecimento">Conhecimento</a></li>
        </ul>

        <Routes>
            <Route path="/sobre" element={<Sobre />} />

        </Routes>
        </Router>
    );

}


export default Nav;