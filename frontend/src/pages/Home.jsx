import { Link } from 'react-router-dom';
import './Home.css'; 

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Agenda de Contatos</h1>
      <p className="home-subtitle">O que você deseja fazer?</p>
      
      <div className="home-actions">
        <Link to="/add" className="btn-modern">
          Adicionar Novo Contato
        </Link>
        <Link to="/contacts" className="btn-modern">
          Ver Meus Contatos
        </Link>
      </div>
    </div>
  );
}