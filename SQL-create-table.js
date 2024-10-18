
import { sql } from './db.js'

sql`
  CREATE TABLE moto (
      id text PRIMARY KEY,
      name character varying(255),
      modelo character varying(255),
      cor text
  );
`.then(() => {
  console.log('tabela criada');
})