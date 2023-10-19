import {DataSource} from 'typeorm';
import 'dotenv/config';

const data = process.env.DB_CONNECT as string
export const AppDataSource = new DataSource({
    type:'postgres',
    url:data,
    logging:true,
    synchronize:true,
    entities:['src/Entities/*.ts'],
    migrations:['src/migration/*.ts'],
    migrationsTableName:"mis_migraciones"
});