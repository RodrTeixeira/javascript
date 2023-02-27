function load() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('image');
    var date = new Date();
    var hour = date.getHours();
    msg.innerHTML = `Agora são ${hour} horas`;
    // msg.innerHTML = "Agora são " + hour + " horas";
    if (hour >= 0 && hour < 12) {
        img.src = "./img/morning.jpg";
        document.body.style.background = "#e2cd9f";
    } else if (hour>= 12 && hour < 18) {
        img.src = "./img/afternoon.jpg";
        document.body.style.background = "#b9846f";
    } else {
        img.src = "./img/night.jpg";
        document.body.style.background = "#515154";
    };
};
