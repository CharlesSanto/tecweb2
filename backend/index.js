import express from "express";
import { ContactService } from "./services/ContactService.js";

const app = express();
app.use(express.json());

const contactService = new ContactService(
    "http://localhost:3001"
);

app.get("/api/contacts", async (req, res) => {
    const contacts = await contactService.getContacts();
    res.json(contacts);
});

app.post("/api/contacts", async (req, res) => {
    const contact = await contactService.createContact(req.body);
    res.status(201).json(contact);
});

app.put("/api/contacts/:id", async (req, res) => {
    const contact = await contactService.updateContact(req.body);
    res.json(contact);
});

app.delete("/api/contacts/:id", async (req, res) => {
    await contactService.deleteContact(req.params.id);
    res.status(204).send();
});

app.listen(8080, () => {
    console.log("Express running on port 8080");
});