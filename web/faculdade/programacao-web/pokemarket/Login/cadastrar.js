function cadastrar(){
    let usuariosRocket = JSON.parse(localStorage.getItem('rocket'));
   let usuariosArcade = JSON.parse(localStorage.getItem('clientes'));

   let formulario = document.getElementById("cadastroForm");

   let usuarioInput = formulario["usuario"].value;
   let senhaInput = formulario["senha"].value;

   let existente = false;

   for(let usersLocal of usuariosArcade){
      if (usuarioInput == usersLocal.usuario) {
         existente = true;
         
      }
   }
   for(let usersLocal of usuariosRocket){
      if (usuarioInput === usersLocal.usuario) {
         existente = true;
         
      }
   }
   if(!existente){
    usuariosArcade.push({usuario:usuarioInput,senha:senhaInput});
    localStorage.setItem('clientes',JSON.stringify(usuariosArcade));
     alert('Usuário cadastrado com sucesso');
     window.location.href='arcade.html';

   }else{
    alert('Usuário já cadastrado');
   }
};