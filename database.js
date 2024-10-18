import { sql } from './db.js'
import {randomUUID} from 'crypto'

export class Database {
    async createMoto(Moto) {
        const id = randomUUID();
        const name = moto.name;
        const modelo = moto.modelo;
        const cor = moto.cor;

        await sql`insert into users (id, name, modelo, cor)
        values (${id}, ${name}, ${modelo}, ${cor})`

    }
}