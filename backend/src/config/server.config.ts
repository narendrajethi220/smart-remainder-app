import dotenv from 'dotenv';

function loadEnv(){
    dotenv.config();
}

loadEnv();

type ServerConfig={
    PORT:number
}

export const serverConfig:ServerConfig= {
    PORT: Number(process.env.PORT) || 3030,
}
