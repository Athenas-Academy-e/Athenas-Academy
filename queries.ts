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
      email VARCHAR(255) NOT NULL UNIQUE
    )
  `;
  (await connection).query(query);
}

async function addUser(user: User) {
  const query = 'INSERT INTO users (name, user, password, email) VALUES (?, ?, ?, ?)';
  const [result] = await (await connection).execute(query, [user.name, user.user, user.password, user.email]);
  return result;
}

async function getUserByUser(user: string, password: string) {
  const query = 'SELECT * FROM users WHERE user = ? and password = ?';
  const [rows] = await (await connection).execute(query, [user, password]);
  return rows;
}


export { createUserTable, addUser, getUserByUser };