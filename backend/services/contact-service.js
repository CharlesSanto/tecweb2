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
                    message: `Error creating contact: ${response.statusText}`,
                    status: response.status
                };
            }

            return {
                success: true,
                data: await response.json(),
                status: response.status
            };
        } catch (error) {
            return {
                success: false,
                message: error.message,
                status: response.status
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
                    message: `Error updating contact: ${response.statusText}`,
                    status: response.status
                };
            }

            return {
                success: true,
                data: await response.json(),
                    status: response.status
            };
        } catch (error) {
            return {
                success: false,
                message: error.message,
                status: response.status
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
                    message: `Error deleting contact: ${response.statusText}`,
                    status: response.status
                };
            }

            return {
                success: true,
                message: 'Contact deleted successfully',
                status: response.status
            };
        } catch (error) {
            return {
                success: false,
                message: error.message,
                status: response.status
            };
        }
    }
}