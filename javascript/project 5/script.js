let num = document.querySelector("input#fnum")
let list = document.querySelector("select#flist")
let res = document.querySelector("div#res")
let res1 = document.querySelector("div#res1")
let res2 = document.querySelector("div#res2")
let res3 = document.querySelector("div#res3")
let values = []

// console.log(num)
// console.log(list)

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function toAdd() {
    if (isNumber(num.value) && !inList(num.value, values)) {
        values.push(Number(num.value))
        let item = document.createElement("option")
        item.text = "Valor " + num.value +  " adicionado"
        list.appendChild(item)
        res.innerHTML = ""
        res1.innerHTML = ""
        res2.innerHTML = ""
        res3.innerHTML = ""
       // window.alert("Tudo OK!")
    } else {
        window.alert("Valor inválido ou já encontrado na lista")
    }
    num.value = ""
    num.focus()
}

function finalize() {
    if (values.length == 0) {
        window.alert("Adicione valores antes de finalizar")
    } else {
        let tot = values.length
        let bigger = values[0];
        let smaller = values[0];
        let sum = 0;
        for (let pos in values) {
            sum += values[pos];
            if (values[pos] > bigger) {
                bigger = values[pos]
            }           
            if (values[pos] < smaller) {
                smaller = values [pos]
            }
        }
        
        res.innerHTML = ""
        res1.innerHTML = ""
        res2.innerHTML = ""
        res.innerHTML = "<br>Ao todo temos " + tot + " números cadastrados"
        res1.innerHTML = "<br>O maior valor informado foi " + bigger
        res2.innerHTML = "<br>O menor valor informado foi " + smaller
        res3.innerHTML = "<br>Somando todos os valores temos  " + sum
        
    }
}