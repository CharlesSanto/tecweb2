import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ListContacts from './pages/ListContacts';
import ContactForm from './pages/ContactForm';
import { contactService } from './services/api';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await contactService.getAll();
        setContacts(data);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
      } 
    };
    loadData();
  }, []);

  const handleSaveContact = async (newContact) => {
    try {
      const savedContact = await contactService.save(newContact);
      setContacts((current) => [...current, savedContact]);
    } catch  {
      alert("Erro ao salvar o contato.");
    }
  };

  const handleUpdateContact = async (id, updatedData) => {
    try {
      const dataFromServer = await contactService.update(id, updatedData);
      setContacts((current) => 
        current.map(c => String(c.id) === String(id) ? dataFromServer : c)
      );
    } catch {
      alert("Erro ao atualizar o contato.");
    }
  };

  const handleDeleteContact = async (id) => {
    try {
      await contactService.delete(id);
      setContacts((current) => current.filter(contact => String(contact.id) !== String(id)));
    } catch {
      alert("Erro ao excluir o contato.");
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<ContactForm onAdd={handleSaveContact} contacts={contacts} />} />
        <Route path="/edit/:id" element={<ContactForm onUpdate={handleUpdateContact} contacts={contacts} />} />
        <Route path="/contacts" element={<ListContacts contacts={contacts} onDelete={handleDeleteContact} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;