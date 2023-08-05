import criaHashESalSenha from "../utils/criaHashESalSenha.js";
import { usuariosColecao } from "./dbConnect.js";

function cadastrarUsuario({ nome, senha }) {
  const { hashSenha, salSenha } = criaHashESalSenha(senha);

  return usuariosColecao.insertOne({ 
    nome: nome,
    hashSenha: hashSenha,
    salSenha
  });
}

function buscarUsuario(nome) {
  return usuariosColecao.findOne({ nome: nome });
}

export { cadastrarUsuario, buscarUsuario };