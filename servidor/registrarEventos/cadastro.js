import { buscarUsuario, cadastrarUsuario } from "../db/usuariosDb.js";

function registrarEventosCadastro(socket, io) {
  socket.on("cadastrar_usuario", async (dados) => {
    const usuario = await buscarUsuario(dados.nome);

    if (usuario)
      socket.emit("cadastro_existente");
    else {
      const resultado = await cadastrarUsuario(dados);

      if (resultado.acknowledged) {
        socket.emit("cadastro_sucesso");
      } else {
        socket.emit("cadastro_erro");
      }
    }
  });
}

export default registrarEventosCadastro;