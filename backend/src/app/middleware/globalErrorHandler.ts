/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { envVars } from "../../config/env";
import status from "http-status";


export const globalErrorHandler = (err : any, req : Request, res : Response, next : NextFunction) => {
    if(envVars.NODE_ENV === 'development'){
        console.log("error from globalErrorHandler", err)
    }

    const statusCode : number = status.INTERNAL_SERVER_ERROR;
    const message : string = "INTERNAL SERVER ERROR"

    res.status(500).json({
        success : false,
        message : "internal server error",
        error : err.message
    })

}