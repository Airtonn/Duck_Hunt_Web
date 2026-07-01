import type { Request, Response} from "express"

const singup = async (req:ReadableStreamBYOBRequest, res:Response){
    const majors = await getMajors();
    if(req.method === "GET"){

    }
}

const login = async (req:Request, res:Response){
    
}

export default authController;