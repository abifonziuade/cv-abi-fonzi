document.getElementById("button_cv").onclick = () => {
    confetti({
        particleCount: 500,
        spread: 150,
        origin: { y: 0.7 }
    });

    const a = document.createElement('a')
    a.href='./assets/Curriculum.pdf'
    a.download='Curriculum Abi Fonzi'
    document.body.appendChild(a)
    a.click() 
    document.body.removeChild(a)
}