import { Connection, createConnection, getConnection, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection> => {

    const defaultoptions = await getConnectionOptions();


    return createConnection(
        Object.assign(defaultoptions, {
            database: process.env.NODE_ENV === 'test' ? "./src/database/database.test.sqlite" : defaultoptions.database
        })
    );
}