function toCheck() {
    var date = new Date()
    var year = date.getFullYear()
    var fyear = document.getElementById("txtyear")
    var res = document.querySelector("div#result")
    if (fyear.value < 1900 || fyear.value > year) {
        window.alert("Erro! Ano Inválido")
    } else {
        var fsex = document.getElementsByName("radsex")
        var age = year - Number(fyear.value)
        var gender = ""
        var img = document.createElement("img")
        img.setAttribute("id", "photo")
        function Attrib() {
            img.setAttribute('width', '500')
            img.setAttribute('height', '305')
        }
        if (fsex[0].checked) {
            gender = "Homem"
            if (age > 0 && age < 10) {
                img.setAttribute('src' , './img/criancaM.jpg')
                Attrib()
                //img.setAttribute('width', '500')
                //img.setAttribute('height', '305')
            } else if (age < 21) {
                img.setAttribute('src' , './img/jovemM.jpg')
                img.setAttribute('width', '500')
                img.setAttribute('height', '305')
            } else if (age < 60) {
                img.setAttribute('src' , './img/homem.jpg')
                img.setAttribute('width', '500')
                img.setAttribute('height', '305')
            }
                   else {
                img.setAttribute('src' , './img/idoso.jpg')
                img.setAttribute('width', '500')
                img.setAttribute('height', '305')
              }

        } else if (fsex[1].checked) {
            gender = "Mulher"
            if (age > 0 && age < 10) {
                img.setAttribute('src' , './img/criancaF.jpg')
                img.setAttribute('width', '500')
                img.setAttribute('height', '305')
            } else if (age < 21) {
                img.setAttribute('src' , './img/jovemF.jpg')
                img.setAttribute('width', '500')
                img.setAttribute('height', '305')
            } else if (age < 60) {
                img.setAttribute('src' , './img/mulher.jpg')
                img.setAttribute('width', '500')
                img.setAttribute('height', '305')
            }
                   else {
                img.setAttribute('src' , './img/idosa.jpg')
                img.setAttribute('width', '500')
                img.setAttribute('height', '305')
              }
        }
        res.innerHTML = `Idade Calculada ${age} anos - ${gender}`
        // res.innerHTML = "Idade Calculada " + age + " anos - " + gender
        res.append(img)

    }
    
} // width="500" height="305"