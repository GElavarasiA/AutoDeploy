function showMessage() {

    const message = document.getElementById("message");

    message.innerText = "✓ Deployment is working successfully!";

    message.style.opacity = "1";

    setTimeout(() => {
        message.innerText = "";
    }, 4000);
}