import dotenv from 'dotenv';
dotenv.config();

interface EnvConfig {
  PORT: number;
}

export const envConfig: EnvConfig = {
  PORT: parseInt(process.env.PORT as string) || 3000,
};