require('dotenv').config();
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Configuración de OpenAI
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// Cargar respuestas predefinidas
const responsesPath = path.join(__dirname, 'responses.json');
let responses = {};
try {
    responses = JSON.parse(fs.readFileSync(responsesPath, 'utf8'));
} catch (err) {
    console.error('No se pudo cargar responses.json:', err);
}

app.use(cors());
app.use(express.json());

// Ruta para manejar las peticiones del chatbot
app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;

        // Revisar si hay respuesta predefinida
        if (responses[message]) {
            return res.json({ response: responses[message] });
        }
        
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: message
            }],
            temperature: 0.7
        });

        res.json({ response: completion.choices[0].message.content });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error al procesar la solicitud' });
    }
});

app.get('/', (req, res) => {
    res.send('¡El servidor del chatbot está funcionando!');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
}); 