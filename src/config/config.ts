interface AppConfig {
  env: string;
  port: number;
  db: {
    host: string;
  };
}

//Creating an interface to make the correct settings as clear as possible

if (!process.env.PORT || !process.env.DB_HOST) {
  //checking whether the variables were loaded correctly
  throw new Error(
    "Variáveis de ambiente essenciais não foram definidas. Verifique seu arquivo .env."
  );
}

const config: AppConfig = {
  //Object responsible for reading variables directly from .env
  env: process.env.NODE_ENV || "development",
  port: parseInt(process.env.PORT, 10),
  db: {
    host: process.env.DB_HOST,
  },
};
