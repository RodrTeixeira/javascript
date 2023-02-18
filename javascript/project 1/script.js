function load() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var date = new Date()
    var hour = date.getHours()
    msg.innerHTML = "Agora são " + hour + " horas"
    if (hour >= 0 && hour < 12) {
        img.src = "manha.jpg"
        document.body.style.background = "#e2cd9f"
    } else if (hour>= 12 && hour < 18) {
        img.src = "tarde.jpg"
        document.body.style.background = "#b9846f"
    } else {
        img.src = "noite.jpg"
        document.body.style.background = "#515154"
    }
}
