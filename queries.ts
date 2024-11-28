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
async function getAlunoBycurso(id_aluno: string, codigo_escola: string, id_curso:string) {
  const query = 'SELECT * FROM alunos_cursos ac  LEFT JOIN alunos al ON al.id_aluno = ac.id_aluno AND al.codigo_escola = ac.codigo_escola  LEFT JOIN pacotes p ON ac.id_pacote = p.id_pacote AND ac.codigo_escola = p.codigo_escola WHERE al.id_aluno = ? AND al.codigo_escola = ? AND ac.id_aluno_curso= ?';
  const [rows] = await (await connection).execute(query, [id_aluno, codigo_escola, id_curso]);
  return rows;
}
async function getPacoteByAluno(id: string, codigo_escola: string) {
  const query = `SELECT ac.situacao, p.nome, p.id_pacote, p.codigo_escola as pacoteCod, ac.codigo_escola FROM alunos_cursos ac left join pacotes p on(p.id_pacote = ac.id_pacote and p.codigo_escola= ?) WHERE ac.codigo_escola = ? and ac.id_aluno = ?`;
  const [rows] = await (await connection).execute(query, [codigo_escola, codigo_escola, id]);
  return rows;
}

async function getParcelas(id: string, codigo_escola: string, id_aluno: string) {
  const query = 'SELECT * FROM `caixa` WHERE id_aluno = ? and codigo_escola = ? and id_aluno_curso= ? and (id_cartao is null or id_cartao = "") and cheque_transfere = "N" order by vencimento asc';
  const [rows] = await (await connection).execute(query, [id_aluno, codigo_escola, id]);
  return rows;
}
async function getNotas(id_modulo: string, codigo_escola: string, id_aluno: string, id_aluno_aluno:string) {
  const query = 'select pr.nome as prova_nome, pr.media, coalesce(pa.nota, paw.nota) as nota, coalesce(pa.data, paw.data) as data, pr.id_prova, coalesce(pa.id_aluno, paw.id_aluno) as id_aluno, e.media_min, pa.id_prova_aluno, paw.id_prova_aluno as id_prova_aluno_web from provas pr left join provas_alunos pa on(pr.id_prova = pa.id_prova and pa.id_aluno_curso = ? and pa.codigo_escola = pr.codigo_escola) left join provas_alunos_web paw on(pr.id_prova = paw.id_prova and paw.id_aluno_curso = ? and paw.codigo_escola = pr.codigo_escola) left join empresas e on(pr.codigo_escola = e.codigo) where pr.id_modulo = ? and pr.codigo_escola = ? order by pr.media, pr.id_prova;';
  const [rows] = await (await connection).execute(query, [id_aluno, codigo_escola, id_modulo, id_aluno_aluno]);
  return rows;
}
async function getFrequenciaAula(codigo_escola: string, id_aluno_aluno: string) {
  const query = 'select count(id_presenca) as totalaula from presenca where id_aluno_curso= ? and codigo_escola = ?';
  const [rows] = await (await connection).execute(query, [id_aluno_aluno, codigo_escola]);
  return rows;
}
async function getFrequenciaPresenca(type: string, codigo_escola: string, id_aluno: string) {
  const query = 'select count(id_presenca) as presenca from presenca where id_aluno_curso= ? and codigo_escola = ? and presenca = ? ';
  const [rows] = await (await connection).execute(query, [id_aluno, codigo_escola, type]);
  return rows;
}

async function getFrequenciaFaltas(type: string, codigo_escola: string, id_aluno: string) {
  const query = 'select count(id_presenca) as faltas from presenca where id_aluno_curso= ? and codigo_escola = ? and presenca = ? ';
  const [rows] = await (await connection).execute(query, [id_aluno, codigo_escola, type]);
  return rows;
}

async function getFrequenciaReposicao(codigo_escola: string, id_aluno: string) {
  const query = 'select count(id_presenca) as reposicao from presenca where id_aluno_curso= ? and codigo_escola = ? and aula_tipo = "Reposição"';
  const [rows] = await (await connection).execute(query, [id_aluno, codigo_escola]);
  return rows;
}
async function getFrequencia(codigo_escola: string, id_aluno: string) {
  const query = 'SELECT p.id_presenca, p.data, hf.descricao, p.horario_presenca, pr.nome, p.aula_tipo, p.presenca, p.reposta, p.falta_antecipada FROM presenca p LEFT JOIN horarios_funcionamento hf ON ( p.id_horario = hf.id_horarios_funcionamento AND hf.codigo_escola = p.codigo_escola )LEFT JOIN alunos pr ON ( p.id_aluno = pr.id_aluno AND pr.codigo_escola = p.codigo_escola ) WHERE p.id_aluno_curso = ? AND ((p.aula_tipo IN ("Normal","Flexível")) OR (p.reposicao = "S")) AND p.codigo_escola = ? ORDER BY p.data DESC';
  const [rows] = await (await connection).execute(query, [id_aluno, codigo_escola]);
  return rows;
}
async function getModulo(codigo_escola: string, id_aluno_curso: string) {
  const query = 'SELECT * FROM aluno_modulos am INNER JOIN modulos md ON (am.id_modulo = md.id_modulo AND am.codigo_escola = md.codigo_escola) WHERE am.id_aluno_curso =? AND am.codigo_escola =? ORDER BY am.sequencia, am.situacao asc';
  const [rows] = await (await connection).execute(query, [id_aluno_curso, codigo_escola]);
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



export { createUserTable, addUser, getUserByUser, getAlunoByCurso, getParcelas, getDadosPj, getEmpresa, getPacoteByAluno, getFrequenciaAula, getFrequenciaPresenca, getFrequenciaReposicao, getFrequencia, getAlunoBycurso, getFrequenciaFaltas, getModulo };