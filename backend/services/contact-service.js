export class ContactService {
    constructor(url) {
        this.url = url;
    }

    async getContacts(){
        const response = await fetch(`${this.url}/contacts`)

        if(!response.ok){
            throw new Error(`Error fetching contacts: ${response.statusText}`)
        }

        return await response.json()
    }
    
    async createContact(contact){
        const response = await fetch(`${this.url}/contacts`, {
            method: 'POST',
            body: JSON.stringify(contact)
        })

        if(!response.ok){
            throw new Error(`Error creating contactL ${response.statusText}`)
        }

        return await response.json()
    }

    async updateContact(contact){
        const response = await fetch(`${this.url}/contacts/${contact.id}`, {
            method: 'PUT',
            body: JSON.stringify(contact)
        })

        if(!response.ok){
            throw new Error(`Error updating contact: ${response.statusText}`)
        }

        return await response.json()
    }

    async deleteContact(id){
        const response = await fetch(`${this.url}/contacts/${id}`, {
            method: 'DELETE'
        })

        if(!response.ok){
            throw new Error(`Error deleting contact: ${response.statusText}`)
        }

        return await response.json()
    }
}