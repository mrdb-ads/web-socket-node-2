import { MongoClient } from "mongodb";
import "dotenv/config";

const cliente = new MongoClient(
  `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.CLUSTER_ID}?retryWrites=true&w=majority`
);

let documentosColecao, usuariosColecao;

try {
  await cliente.connect();

  const db = cliente.db(process.env.DATABASE);
  documentosColecao = db.collection(process.env.COLECAO_DOCUMENTOS);
  usuariosColecao = db.collection(process.env.COLECAO_USUARIOS);

  console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao, usuariosColecao };
