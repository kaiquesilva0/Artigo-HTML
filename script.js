function validar() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    var infos = {
        nome: name,
        email: email, 
        mensagem: mensagem
    };

    if(name.length < 3){
        alert('favor preencher o nome');
        return false
    }if(email.length < 3){
        alert('favor preencher o email');
        return false
    }if(mensagem.length < 3){
        alert('favor preencher a mensagem');
        return false
    }else{
        alert(JSON.stringify(infos));
    }

}
