import { Pool, Client } from 'pg';

const pool = new Pool({
  user: '',
  database: '',
  password: '',
  host: '',
  port: '',
});

pool.query('SELECT NOW()', (req, res) => {
  console.log(req, res);
});

const data = [];
export default data;
