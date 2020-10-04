import knex from 'knex';

const db = knex({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'proffy'
  },
  useNullAsDefault: true
})

export default db;