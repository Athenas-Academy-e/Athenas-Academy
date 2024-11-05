import connection from "./connectionDatabase";


interface User {
  id: number;
  name: string;
  user: string;
  password: string;
  email: string;
}

async function createUserTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      user VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL UNIQUE,
      email VARCHAR(255) NOT NULL UNIQUE,
    )
  `;
  (await connection).query(query);
}

async function addUser(user: User) {
  const query = 'INSERT INTO users (name, user, password, email) VALUES (?, ?, ?, ?)';
  const [result] = await (await connection).execute(query, [user.name, user.user, user.password, user.email]);
  return result;
}

async function getUserByUser(user: string, codigo_escola: string) {
  const query = 'SELECT * FROM `alunos` WHERE matricula = ? and codigo_escola = ?';
  const [rows] = await (await connection).execute(query, [user, codigo_escola]);
  return rows;
}

async function getAlunoByCurso(id: string, codigo_escola: string) {
  const query = 'SELECT * FROM alunos_cursos ac  LEFT JOIN alunos al ON al.id_aluno = ac.id_aluno AND al.codigo_escola = ac.codigo_escola  LEFT JOIN pacotes p ON ac.id_pacote = p.id_pacote AND ac.codigo_escola = p.codigo_escola WHERE al.id_aluno = ? AND al.codigo_escola = ? ';
  const [rows] = await (await connection).execute(query, [id, codigo_escola]);
  return rows;
}
async function getPacoteByAluno(id: string, codigo_escola: string) {
  const query = `SELECT ac.situacao, p.nome, p.id_pacote, p.codigo_escola as pacoteCod, ac.codigo_escola FROM alunos_cursos ac left join pacotes p on(p.id_pacote = ac.id_pacote and p.codigo_escola= ?) WHERE ac.codigo_escola = ? and ac.id_aluno = ?`;
  const [rows] = await (await connection).execute(query,[codigo_escola, codigo_escola, id]);
  return rows;
}

async function getParcelas(id: string, codigo_escola: string, id_aluno: string) {
  const query = 'SELECT * FROM `caixa` WHERE id_aluno = ? and codigo_escola = ? and id_aluno_curso= ? and (id_cartao is null or id_cartao = "") and cheque_transfere = "N" order by vencimento asc';
  const [rows] = await (await connection).execute(query, [id_aluno, codigo_escola, id]);
  return rows;
}
async function getDadosPj(codigo_escola: string) {
  const query = 'SELECT * FROM `dados_pj` WHERE codigo_escola = ?';
  const [rows] = await (await connection).execute(query, [codigo_escola]);
  return rows;
}

async function getEmpresa() {
  const query = 'SELECT * FROM `empresas`';
  const [rows] = await (await connection).execute(query);
  return rows;
}



export { createUserTable, addUser, getUserByUser, getAlunoByCurso, getParcelas, getDadosPj, getEmpresa, getPacoteByAluno };