function changeMessage() {
    const messages = [
        "Ga perlu pikirin hal hal yang ga harus dipikirin",
        "INGETTT, kalo susah biasanya ntar diakhir bakalan dapet sesuatu yang indahhhh banget",
        "Jangan lupa makan, ntar gabisa puasa loh klo udh kena maag",
        "Main ML jugak seru, ntar diaz ajarin",
        "Diaz ganteng ga?"
    ];
    
    const messageElement = document.querySelector('.message');
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageElement.textContent = randomMessage;
}
