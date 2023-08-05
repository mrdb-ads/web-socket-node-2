const socket = io();

function emitirCadastrarUsuario(dados) {
  socket.emit("cadastrar_usuario", dados);
}

socket.on("cadastro_sucesso", () => alert("Cadastro realizado com sucesso"));
socket.on("cadastro_existente", () => alert("Usuário já existente"));
socket.on("cadastro_erro", () => alert("Erro ao fazer o cadastro"));


export { emitirCadastrarUsuario };