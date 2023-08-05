import { definirCookie } from "../utils/cookies.js";

const socket = io("http://localhost:3000");

function emitirAutenticarUsuario(dados) {
  socket.emit("autenticar_usuario", dados);
}

socket.on("autenticacao_sucesso", (tokenJwt) => {
  definirCookie("tokenJwt", tokenJwt);

  alert("Usuário autenticado");
  window.location.href = "/";
});

socket.on("autenticacao_erro", () => alert("Erro na autenticação"));

socket.on("usuario_nao_encontrado", () => alert("Usuário não encontrado"));

export { emitirAutenticarUsuario };