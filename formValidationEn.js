const form = document.getElementById("contact-form")

form.onsubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());

    if (!formObject.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        Toastify({
            text: "Please enter a valid email",
            duration: 2000,
            close: true,
            gravity: "bottom",
            position: "left",
            stopOnFocus: true,
            style: {
                background: "#8c0000",
            },
            offset: {
                x: 10,
                y: 60
            },
        }).showToast();
    } else {
        Toastify({
            text: "Thank you for your message! I'll be contacting you soon",
            duration: 3000,
            close: true,
            gravity: "bottom",
            position: "left",
            stopOnFocus: true,
            style: {
                background: "#507DBC",
            },
            offset: {
                x: 10,
                y: 60
            },
        }).showToast();
        form.reset();
    }
}