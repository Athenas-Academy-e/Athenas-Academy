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

async function getUserByUser(user: string, codigo_escola: string, type: string) {
  const query = 'SELECT * FROM `alunos` WHERE matricula = ? and codigo_escola = ?';
  const [rows] = await (await connection).execute(query, [user, codigo_escola]);
  return rows;
}

async function getAlunoByCurso(id: string, codigo_escola: string) {
  const query = 'SELECT * FROM alunos_cursos ac  LEFT JOIN alunos al ON al.id_aluno = ac.id_aluno AND al.codigo_escola = ac.codigo_escola  LEFT JOIN pacotes p ON ac.id_pacote = p.id_pacote AND ac.codigo_escola = p.codigo_escola WHERE al.id_aluno = ? AND al.codigo_escola = ? ';
  const [rows] = await (await connection).execute(query, [id, codigo_escola]);
  return rows;  
}



export { createUserTable, addUser, getUserByUser, getAlunoByCurso };