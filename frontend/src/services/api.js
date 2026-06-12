
const STORAGE_KEY = '@contact_book';

const initialData = [
  { id: 1, name: 'Charles Silva', email: 'charles@email.com', phone: '11999999999' },
  { id: 2, name: 'Ana Souza', email: 'ana@email.com', phone: '21988888888' },
  { id: 3, name: 'João Ferreira', email: 'joao@email.com', phone: '31977777777' }
];

export const contactService = {
  getAll: async () => {
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!data || data.length === 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
      data = initialData;
    }
    return data;
  },

  save: async (newContact) => {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const contactWithId = { ...newContact, id: Date.now() }; 
    data.push(contactWithId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return contactWithId;
  },

  update: async (id, updatedContact) => {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const index = data.findIndex(c => String(c.id) === String(id));
    if (index !== -1) {
      data[index] = { ...data[index], ...updatedContact };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return data[index];
    }
    throw new Error('Contact not found');
  },

  delete: async (id) => {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const filteredData = data.filter(c => String(c.id) !== String(id));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredData));
    return true;
  }
};

/*
const API_URL = 'http://localhost:3000/contacts';

export const contactService = {
  getAll: async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch data.');
    return await response.json();
  },

  save: async (newContact) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newContact),
    });
    if (!response.ok) throw new Error('Failed to save data.');
    return await response.json();
  },

  update: async (id, updatedContact) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedContact),
    });
    if (!response.ok) throw new Error('Failed to update data.');
    return await response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete data.');
    return true;
  }
};
*/