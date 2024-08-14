document.addEventListener('DOMContentLoaded', () => {
    // Form Validation
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (event) => {
            let valid = true;
            const inputs = form.querySelectorAll('input, textarea');

            inputs.forEach(input => {
                if (input.required && !input.value.trim()) {
                    valid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '';
                }
            });

            if (!valid) {
                event.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    });

    // Chat Functionality
    const chatButton = document.getElementById('chat-button');
    const chatBox = document.getElementById('chat-box');
    const sendChatButton = document.getElementById('send-chat');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');

    if (chatButton && chatBox) {
        chatButton.addEventListener('click', () => {
            if (chatBox.style.display === 'none' || chatBox.style.display === '') {
                chatBox.style.display = 'block';
            } else {
                chatBox.style.display = 'none';
            }
        });

        sendChatButton.addEventListener('click', () => {
            const message = chatInput.value.trim();
            if (message) {
                const messageElement = document.createElement('div');
                messageElement.textContent = `You: ${message}`;
                chatMessages.appendChild(messageElement);
                chatInput.value = '';
                chatMessages.scrollTop = chatMessages.scrollHeight;
                // Simulate a reply
                setTimeout(() => {
                    const replyElement = document.createElement('div');
                    replyElement.textContent = `Support: Thank you for your message. We will get back to you soon.`;
                    chatMessages.appendChild(replyElement);
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 1000);
            }
        });
    }
});
