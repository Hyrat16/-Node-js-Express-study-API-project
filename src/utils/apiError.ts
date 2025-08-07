export class Erro extends Error {
  constructor(public readonly statusCode: number, message: string) {
    super(message);
  }
}

/* Definition of error formatting. Using Error as a base and based on 2 arguments (message, code status) */
