const form = document.getElementById("contact-form")

form.onsubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());

    if (!formObject.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        Toastify({
            text: "Por favor ingrese un email válido",
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
            text: "Gracias por tu mensaje! En breve me estaré contactando con vos",
            duration: 2000,
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