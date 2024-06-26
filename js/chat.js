let userData = window.localStorage.getItem('chat-tipo-login');

let chatbotTOKEN = 'AAFd2VzD_MqtyHQ5rX4RMaagrrZrBlvGQjI';
let hostURL = 'https://cronchatnovo.cronapp.io/get-chat?token=';

let chatbotURL = `${hostURL}${chatbotTOKEN}&extraparam=${userData}`;

let scriptHTML = document.createElement("script");
scriptHTML.src = chatbotURL;
scriptHTML.type = 'text/javascript'
document.body.appendChild(scriptHTML);