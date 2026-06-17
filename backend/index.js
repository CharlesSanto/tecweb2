import express from "express";
import cors from "cors";
import { ContactService } from "./services/contact-service.js";

const app = express();

app.use(cors());
app.use(express.json());

const contactService = new ContactService("http://localhost:3001");

app.get("/api/contacts", async (req, res) => {
    try {
        const contacts = await contactService.getContacts();
        res.status(contacts.status || 200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.post("/api/contacts", async (req, res) => {
    try {
        const contact = await contactService.createContact(req.body);
        res.status(contact.status || 201).json(contact);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.put("/api/contacts/:id", async (req, res) => {
    try {
        const contact = await contactService.updateContact(req.params.id, req.body);
        res.status(contact.status || 200).json(contact);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.delete("/api/contacts/:id", async (req, res) => {
    try {
        await contactService.deleteContact(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(8080, () => {
    console.log("Express running on port 8080");
});