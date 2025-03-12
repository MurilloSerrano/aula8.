function  logar() {
    var usuario = document.getElementById('inputUsuario').value;
    var senha = document.getElementById('inputSenha').value;

    if(usuario == "admin" && senha == "1234"){
       window.location.href = "page.html"
       } else{
        alert("usuário/senha está incorreto")
       }


}

function calcular() {
    var nota1 = parseInt(document.getElementById('nota1').value);
    var nota2 = parseInt(document.getElementById('nota2').value);
    var nota3 = parseInt(document.getElementById('nota3').value);
    var nota4 = parseInt(document.getElementById('nota4').value);
    var media =(nota1 + nota2 + nota3 + nota4) / 4

    document.getElementById('notaResultado1').innerHTML ="NOTA 1:"  + nota1
    document.getElementById('notaResultado2').innerHTML = " NOTA 2:" + nota2
    document.getElementById('notaResultado3').innerHTML = "NOTA 3:" + nota3
    document.getElementById('notaResultado4').innerHTML = "NOTA 4:" + nota4

    if(media >= 7){
        document.getElementById("mediaAluno").innerHTML = "Aprovado!"
} else{
    document.getElementById("mediaAluno").innerHTML = "reprovado!"
}

}