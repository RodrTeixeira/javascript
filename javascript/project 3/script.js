function tell() {
    let ini = document.getElementById("txti");
    let end = document.getElementById("txtf");
    let step = document.getElementById("txtp");
    let res = document.getElementById("res");
    if (ini.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        // window.alert("Erro ! Algum campo inválido !");
        res.innerHTML = "Impossível Contar...";
    } else {
        res.innerHTML = "Contando ...<br>";
        let i = Number(ini.value);
        let e = Number(end.value);
        let s = Number(step.value);
        if (s <= 0) {
            window.alert("Passo Inválido ! Considerando Passo Igual a 1");
            s = 1;
        };
        if (i < e) {
            // Contagem Crescente
            for (let c = i ; c <= e ; c += s) {
             //   console.log(c);
                res.innerHTML += " "+c+"\u{1F449}";
            };
            
        } else {
            // Contagem Regressiva
            for (let c = i ; c >= e ; c -= s) {
              //  console.log(c);
                res.innerHTML += " "+c+"\u{1F449}";
            };
            
        };
        res.innerHTML += "\u{1F3C1}";
    };
    
};