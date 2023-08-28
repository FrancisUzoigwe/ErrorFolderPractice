import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import { STATUS, errorFile } from "./error/errorFile";
import { errorHandler } from "./error/errorHandler";

export const mainApp = (app: Application) => {
  app.use(express);
  app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PATCH", "DELETE"],
    })
  );
  app.get("/", (req: Request, res: Response) => {
    return res.status(STATUS.OK).json({
      message: "Consuming Francis Api",
    });
  });
  app.all(
    "*",
    (error: errorFile, req: Request, res: Response, next: NextFunction) => {
      next(
        new errorFile({
          errorMessage: "This endpoint is not supported",
          errorName: "End point not supported error",
          errorStatus: STATUS.BAD,
          errorSuccess: false,
        })
      );
    }
  );
  app.use(errorHandler);
};
