import { Link } from 'react-router-dom';
import './ListContacts.css';

export default function ListContacts({ contacts, onDelete }) {
  
  const formatPhone = (rawNumber) => {
    if (!rawNumber) return '';
    const cleaned = rawNumber.replace(/\D/g, '');
    return cleaned.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
  };

  return (
    <div className="list-container">
      <h2 className="list-title">Meus Contatos</h2>
      
      {contacts.length === 0 ? (
        <p className="empty-message">Nenhum contato salvo.</p>
      ) : (
        <ul className="contact-list">
          {contacts.map((contact) => (
            <li key={contact.id} className="contact-item">
              
              <div className="contact-info">
                <span className="contact-name">{contact.name}</span>
                <div className="contact-details">
                  <span>{contact.email}</span>
                  <span>•</span>
                  <span>{formatPhone(contact.phone)}</span>
                </div>
              </div>
              
              <div className="contact-actions">
                <Link to={`/edit/${contact.id}`}>
                  <button className="btn-action">Editar</button>
                </Link>

                <button 
                  onClick={() => onDelete(contact.id)}
                  className="btn-action delete"
                >
                  Excluir
                </button>
              </div>

            </li>
          ))}
        </ul>
      )}
      
      <Link to="/" className="link-back">Voltar</Link>
    </div>
  );
}