import { Request,Response,NextFunction } from "express";
import jwt from "jsonwebtoken";
export function userMiddleware(req: Request,res: Response,next: NextFunction){
    
    const authorization=req.headers.token;

    if(typeof authorization==="string"){
        const verify=jwt.verify(authorization,process.env.USER_JWT_SECRET!) as {userId : string};
        if(verify.userId){
            req.body.userId=verify.userId;
            next();
        }
        else{
            console.log("Hehe")
            res.status(202).json({
                msg: "Sign in Again"
            })
        }
    }
    else{
        res.status(202).json({
            msg:"Sigin in Again"
        })
    }
    
}