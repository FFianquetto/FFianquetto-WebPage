// Configuración del chatbot
const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY_HERE'; // ¡ADVERTENCIA! No subas esto a GitHub. Considera usar variables de entorno o un backend seguro.

// Elementos del DOM
const chatContainer = document.createElement('div');
chatContainer.className = 'chat-container';
const chatMessages = document.createElement('div');
chatMessages.className = 'chat-messages';
const chatInput = document.createElement('input');
chatInput.className = 'chat-input';
const sendButton = document.createElement('button');
sendButton.className = 'send-button';
sendButton.textContent = 'Enviar';

// Estilos del chatbot
const styles = `
.chat-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 350px;
    height: 500px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    z-index: 1000;
}

.chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
}

.chat-input-container {
    display: flex;
    padding: 10px;
    border-top: 1px solid #eee;
}

.chat-input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-right: 10px;
}

.send-button {
    padding: 10px 20px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.message {
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    max-width: 80%;
}

.user-message {
    background: #007bff;
    color: white;
    margin-left: auto;
}

.bot-message {
    background: #f1f1f1;
    color: black;
}

@media (max-width: 768px) {
    .chat-container {
        width: 100%;
        height: 100%;
        bottom: 0;
        right: 0;
        border-radius: 0;
    }
}
`;

// Agregar estilos al documento
const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// Función para enviar mensaje a OpenAI
async function sendToOpenAI(message) {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{
                    role: "user",
                    content: message
                }],
                temperature: 0.7
            })
        });

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error('Error:', error);
        return 'Lo siento, hubo un error al procesar tu mensaje.';
    }
}

// Función para agregar mensaje al chat
function addMessage(message, isUser = false) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Función para manejar el envío de mensajes
async function handleSend() {
    const message = chatInput.value.trim();
    if (message) {
        addMessage(message, true);
        chatInput.value = '';
        
        const response = await sendToOpenAI(message);
        addMessage(response);
    }
}

// Event listeners
sendButton.addEventListener('click', handleSend);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSend();
    }
});

// Agregar elementos al DOM
const chatInputContainer = document.createElement('div');
chatInputContainer.className = 'chat-input-container';
chatInputContainer.appendChild(chatInput);
chatInputContainer.appendChild(sendButton);

chatContainer.appendChild(chatMessages);
chatContainer.appendChild(chatInputContainer);
document.body.appendChild(chatContainer);

// Mensaje inicial
addMessage('¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?'); 