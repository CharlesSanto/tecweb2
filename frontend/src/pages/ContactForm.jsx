import { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import './ContactForm.css';

export default function ContactForm({ contacts, onAdd, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);
  
  const contactToEdit = isEditMode ? contacts.find(c => String(c.id) === String(id)) : null;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [saving, setSaving] = useState(false);
  const [loadedContactId, setLoadedContactId] = useState(null);

  if (isEditMode && contactToEdit && loadedContactId !== contactToEdit.id) {
    setLoadedContactId(contactToEdit.id);
    setName(contactToEdit.name);
    setEmail(contactToEdit.email || ''); 
    
    const rawPhone = contactToEdit.phone || '';
    const formattedPhone = rawPhone.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
    setPhone(formattedPhone);
  }

  const handlePhoneChange = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, ''); 
    value = value.replace(/(\d{2})(\d)/, '($1) $2'); 
    value = value.replace(/(\d{4,5})(\d{4})/, '$1-$2'); 
    value = value.replace(/(-\d{4})\d+?$/, '$1'); 
    setPhone(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone) return alert('Por favor, preencha todos os campos.');
    
    setSaving(true);
    
    const phoneRaw = phone.replace(/\D/g, '');

    try {
      if (isEditMode) {
        await onUpdate(id, { name, email, phone: phoneRaw });
      } else {
        await onAdd({ name, email, phone: phoneRaw });
      }
      navigate('/contacts');
    } catch {
      setSaving(false);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">{isEditMode ? 'Editar' : 'Adicionar'}</h2>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <input 
          className="form-input"
          type="text" 
          placeholder="Nome" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          disabled={saving}
          autoComplete="off"
        />
        
        <input 
          className="form-input"
          type="email" 
          placeholder="E-mail" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          disabled={saving}
          autoComplete="off"
        />

        <input 
          className="form-input"
          type="text" 
          placeholder="Telefone" 
          value={phone} 
          onChange={handlePhoneChange} 
          disabled={saving}
          autoComplete="off"
        />

        <button type="submit" className="btn-save" disabled={saving}>
          {saving ? 'Salvando...' : 'Salvar'}
        </button>
      </form>
      
      <Link to={isEditMode ? '/contacts' : '/'} className="link-back">
        Voltar
      </Link>
    </div>
  );
}