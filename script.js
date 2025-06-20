document.addEventListener("DOMContentLoaded", function(){

// criando as variáveis para receber os valores dos campos
const loginInput = document.getElementById("login");
const senhaInput = document.getElementById("senha");
const enviarBtn = document.getElementById("enviar");

// criando a função para fazer o botão funcionar
enviarBtn.addEventListener('click', function(event){
event.preventDefault();

// criando mais duas variáveis para receber os valores fintrados (sem espaços)
const login = loginInput.value.trim();
const senha = senhaInput.value.trim();
// verifica se os campos login e senha estão vazios
if (login === "" || senha ===""){
alert("Por favor, preencha todos os campos.");
return;
}

// simulação de autenticação
if(login === "admin" && senha === "1234"){
alert("Login bem sucedido!");
} else {
alert("Login ou senha incorretos!");
}
});
});