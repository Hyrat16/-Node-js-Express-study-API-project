import { type Response, type Request, type NextFunction } from "express";
import { Erro } from "../utils/apiError.js";

export const errorHandler = (
  err: Erro,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("ERRO CAPTURADO:", err.message);

  const statusCode = err.statusCode;
  const message = err.message || "Erro interno do servidor.";

  res.status(statusCode).json({
    success: false,
    message,
  });
};

/* Definition of complete errorHandler formatting */
