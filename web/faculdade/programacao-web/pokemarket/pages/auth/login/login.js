const admin = [{ usuario: 'Giovanni', senha: 'PersianS2' }, { usuario: 'grunt', senha: '12341234' }];
if(!localStorage.getItem('rocket')){
localStorage.setItem('rocket', JSON.stringify(admin));
}

const clientes = [{ usuario: 'Guilherme', senha: '12345678' }, { usuario: 'Altino', senha: '87654321' }];
if(!localStorage.getItem('clientes')){
localStorage.setItem('clientes', JSON.stringify(clientes));
}

function logar() {
   var usuariosRocket = JSON.parse(localStorage.getItem('rocket')) || [];
   var usuariosArcade = JSON.parse(localStorage.getItem('clientes')) || [];

   var formulario = document.getElementById("loginForm");

   var usuarioInput = formulario["usuario"].value;
   var senhaInput = formulario["senha"].value;
   var logado = false;

   for(var usersLocal of usuariosRocket){
      if (usuarioInput == usersLocal.usuario && senhaInput == usersLocal.senha) {
         logado = true
         sessionStorage.setItem('usuarioLogado', JSON.stringify({ nome: usersLocal.usuario }));
         window.location.href = "../../../index.html";
      }
   }
   for(var usersLocal of usuariosArcade){
      if (usuarioInput == usersLocal.usuario && senhaInput == usersLocal.senha) {
         logado = true
         sessionStorage.setItem('usuarioLogado', JSON.stringify({ nome: usersLocal.usuario }));
         window.location.href = "../../arcade/arcade.html";
      }
   }
   if(!logado){
      alert("Usuário ou senha incorretos");
   }

}
function redirecionar(){
   window.location.href="../cadastrar/cadastrarRocket.html"
};
