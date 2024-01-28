function mudaFoto(foto){
    document.getElementById("icone").src=foto;
}

function calc_total(){
    var qtd = parseInt(document.getElementById('cQtd').value);
    if (isNaN(qtd)){
        qtd = 0;
    }
    tot = qtd * 1500;
    document.getElementById('cTot').value = tot;
}