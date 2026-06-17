const API_URL = 'http://localhost:8080/api/contacts';

export const contactService = {
  getAll: async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch data.');
    const json = await response.json();
    return json.data || json;
  },

  save: async (newContact) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newContact),
    });
    if (!response.ok) throw new Error('Failed to save data.');
    const json = await response.json();
    return json.data || json;
  },

  update: async (id, updatedContact) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedContact),
    });
    if (!response.ok) throw new Error('Failed to update data.');
    const json = await response.json();
    return json.data || json;
  },

  delete: async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete data.');
    return true;
  }
};