export class ContactService {
    constructor(url) {
        this.url = url;
    }

    async getContacts() {
        try {
            const response = await fetch(`${this.url}/contacts`);

            if (!response.ok) {
                return {
                    success: false,
                    message: `Error fetching contacts: ${response.statusText}`
                };
            }

            return {
                success: true,
                data: await response.json()
            };
        } catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }

    async createContact(contact) {
        try {
            const response = await fetch(`${this.url}/contacts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contact)
            });

            if (!response.ok) {
                return {
                    success: false,
                    message: `Error creating contact: ${response.statusText}`
                };
            }

            return {
                success: true,
                data: await response.json()
            };
        } catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }

    async updateContact(contact) {
        try {
            const response = await fetch(`${this.url}/contacts/${contact.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contact)
            });

            if (!response.ok) {
                return {
                    success: false,
                    message: `Error updating contact: ${response.statusText}`
                };
            }

            return {
                success: true,
                data: await response.json()
            };
        } catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }

    async deleteContact(id) {
        try {
            const response = await fetch(`${this.url}/contacts/${id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                return {
                    success: false,
                    message: `Error deleting contact: ${response.statusText}`
                };
            }

            return {
                success: true,
                message: 'Contact deleted successfully'
            };
        } catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
}