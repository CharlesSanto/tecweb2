import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Agenda de Contatos</h1>
      <p>O que você deseja fazer?</p>
      
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <Link to="/add">
          <button>Adicionar Novo Contato</button>
        </Link>
        <Link to="/contacts">
          <button>Ver Meus Contatos</button>
        </Link>
      </div>
    </div>
  );
}