import Nav from "./components/Nav";
import Conteudo from "./components/Conteudo";
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';


function App() {
  return (
    <div>
        <h1><Nav /></h1>
        <Conteudo />
    </div>
)
}

function Layout() {
  return (
    <div>
      <Outlet /> {'/sobre'}
    </div>
  );
}

export default App;