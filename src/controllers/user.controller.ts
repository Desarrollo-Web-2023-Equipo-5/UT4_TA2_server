import { USERS } from "../services/user.service";
import { User } from "../models/user.interface";
import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import { GeneralErrorCode, UserErrorCode } from "../helpers/error-codes";

export const createUser = (req: Request, res: Response) => {
    const { body } = req;

    if (!body) {
        return res.status(400).json({ code: GeneralErrorCode.BodyRequired });
    }

    if (!body.name) {
        return res.status(400).json({ code: UserErrorCode.UserNameRequired });
    }

    if (!body.email) {
        return res.status(400).json({ code: UserErrorCode.UserEmailRequired });
    }

    if (!body.password) {
        return res.status(400).json({ code: UserErrorCode.UserPasswordRequired });
    }

    const newUser: User = {
        ...body,
        id: uuidv4(),
        tasks: []
    };

    USERS.push(newUser);

    return res.status(201).json({ code: UserErrorCode.UserCreated, user: newUser });
}

export const getUserById = (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ code: UserErrorCode.UserIdRequired });
    }

    const newUser = USERS.find((user: User) => user.id === id);

    if (!newUser) {
        return res.status(404).json({ code: UserErrorCode.UserNotFound });
    }
    if (newUser) {
        return res.status(200).json({ code: UserErrorCode.UserFound, user: newUser });
    }

    return res.status(500).json({ code: GeneralErrorCode.InternalServerError });
}

export const getTasks = (req: Request, res: Response) => {
    throw Error("Not implemented");
}

export const deleteTask = (req: Request, res: Response) => {
    throw Error("Not implemented");
}

export const  addTask = (req: Request, res: Response) => {
    throw Error("Not implemented");
}

export const updateTask = (req: Request, res: Response) => {
    throw Error("Not implemented");
}

export const filterTasks = (req: Request, res: Response) => {
    throw Error("Not implemented");
}