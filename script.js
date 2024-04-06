const render = () => {
    const messageUser1 = document.querySelector('#message-form--user-1');
    const messageUser2 = document.querySelector('#message-form--user-2');
    const chatBox = document.querySelector('#chat__chat-box');

    messageUser1.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = e.target.message.value;
        if (text === '') return;
        const message = document.createElement('p');
        message.classList.add('chat-box__message');
        message.classList.add('chat-box__message--user-1');
        message.innerHTML = text;
        chatBox.appendChild(message);
        messageUser1.reset();
    });

    messageUser2.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = e.target.message.value;
        if (text === '') return;
        const message = document.createElement('p');
        message.classList.add('chat-box__message');
        message.classList.add('chat-box__message--user-2');
        message.innerHTML = text;
        chatBox.appendChild(message);
        messageUser2.reset();
    });
}

document.addEventListener('DOMContentLoaded', render);