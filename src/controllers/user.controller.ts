import { USERS } from "../services/user.service";
import { User } from "../models/user.interface";
import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import { GeneralErrorCode, TaskErrorCode, UserErrorCode } from "../helpers/error-codes";
import { Task } from "../models/task.interface";


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
    tasks: [],
  };

  USERS.push(newUser);

  return res
    .status(201)
    .json({ code: UserErrorCode.UserCreated, user: newUser });
};

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
    return res
      .status(200)
      .json({ code: UserErrorCode.UserFound, user: newUser });
  }

  return res.status(500).json({ code: GeneralErrorCode.InternalServerError });
};

export const getTasks = (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ code: UserErrorCode.UserIdRequired });
  }

  const newUser = USERS.find((user: User) => user.id === id);

  if (!newUser) {
    return res.status(404).json({ code: UserErrorCode.UserNotFound });
  }

  const tasks = newUser.tasks;

  if (tasks) {
    return res.status(200).json({ code : TaskErrorCode.TaskFound , tasks });
  }


  return res.status(500).json({ code: GeneralErrorCode.InternalServerError });
};

export const deleteTask = (req: Request, res: Response) => {
    const {id, tid} = req.params;

    if(!id || !tid) {
        return res.status(400).json({ code: TaskErrorCode.TaskIdRequired });
    }

    const foundUser = USERS.find((user: User) => user.id === id);

    if (!foundUser) {
        return res.status(404).json({ code: UserErrorCode.UserNotFound });
    }

    const taskIndex = foundUser.tasks.findIndex((task) => task.id === tid);

    if (taskIndex === -1){
        return res.status(500).json({ code: TaskErrorCode.TaskNotFound })
    }

    foundUser.tasks.splice(taskIndex, 1)

    return res.status(200).json({ code: TaskErrorCode.TaskDeleted });
};

export const addTask = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    if (!body) {
        return res.status(400).json({ code: GeneralErrorCode.BodyRequired });
    }

    if (!body.title) {
        return res.status(400).json({ code: TaskErrorCode.TaskNameRequired });
    }

    if (!body.description) {
        return res.status(400).json({ code: TaskErrorCode.TaskDescriptionRequired });
    }

    if (!body.done.toString()) {
        return res.status(400).json({ code: TaskErrorCode.TaskStatusRequired } )
    }

    const newTask: Task = {
        ...body,
        id: uuidv4()
    }

    const createdUser: User = USERS.find((user: User) => user.id === id);
    createdUser.tasks.push(newTask)

    return res.status(201).json({ code: TaskErrorCode.TaskCreated } )
};

export const updateTask = (req: Request, res: Response) => {
  throw Error("Not implemented");
};

export const filterTasks = (req: Request, res: Response) => {
  throw Error("Not implemented");
};
