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
        if (fsex[0].checked) {
            gender = "Homem"
            if (age > 0 && age < 10) {
                img.setAttribute('src' , 'criancaM.jpg')
                img.setAttribute('width', '500')
                img.setAttribute('height', '305')
            } else if (age < 21) {
                img.setAttribute('src' , 'jovemM.jpg')
                img.setAttribute('width', '500')
                img.setAttribute('height', '305')
            } else if (age < 60) {
                img.setAttribute('src' , 'homem.jpg')
                img.setAttribute('width', '500')
                img.setAttribute('height', '305')
            }
                   else {
                img.setAttribute('src' , 'idoso.jpg')
                img.setAttribute('width', '500')
                img.setAttribute('height', '305')
              }

        } else if (fsex[1].checked) {
            gender = "Mulher"
            if (age > 0 && age < 10) {
                img.setAttribute('src' , 'criancaF.jpg')
                img.setAttribute('width', '500')
                img.setAttribute('height', '305')
            } else if (age < 21) {
                img.setAttribute('src' , 'jovemF.jpg')
                img.setAttribute('width', '500')
                img.setAttribute('height', '305')
            } else if (age < 60) {
                img.setAttribute('src' , 'mulher.jpg')
                img.setAttribute('width', '500')
                img.setAttribute('height', '305')
            }
                   else {
                img.setAttribute('src' , 'idosa.jpg')
                img.setAttribute('width', '500')
                img.setAttribute('height', '305')
              }
        }
        res.innerHTML = "Idade Calculada " + age + " anos - " + gender
        res.append(img)

    }
    
} // width="500" height="305"