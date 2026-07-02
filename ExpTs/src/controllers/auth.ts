import type { Request, Response } from "express";

const singup = async (req: Request, res: Response) => {
    if (req.method === "GET") {
        res.render("auth/signup");
    }
};

const login = async (req: Request, res: Response) => {
    if (req.method === "GET") {
        res.render("auth/login");
    }
};

const logout = async (req: Request, res: Response) => {
    res.redirect("/");
};

const authController = {
    singup,
    login,
    logout
};

export default authController;
