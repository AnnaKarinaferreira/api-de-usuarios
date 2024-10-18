import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async listMoto() {
    const moto = await sql`select * from moto`;
    return moto;
  }

  async createMoto(moto) {
    const id = randomUUID();
    console.log('id', id);
    const nome_moto = moto.nome_moto;
    const nome_modelo = moto.modelo_moto;
    const cor_moto = moto.cor_moto;
    
    await sql`insert into cantores (id, nome_cantor, nome_banda, data_nascimento)
    values (${id}, ${nome_moto}, ${modelo_moto}, ${cor_moto})`
  }

  async updateUser(id, moto) {
    const nome_moto = moto.nome_moto;
    const modelo_moto = moto.nome_banda;
    const cor_moto = moto.cor_moto;

    await sql`update users set 
        nome_moto = ${nome_moto},
        modelo_moto = ${modelo_moto},
        cor_moto = ${cor_moto}
        where id = ${id}
    `;
  }

  async deleteMoto(id) {
    await sql`delete from moto where id = ${id}`
  }

}