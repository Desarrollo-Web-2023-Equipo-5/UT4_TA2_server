import { User } from "../models/user.interface";

export const USERS: User[] = [
    {
        id: "1",
        name: "John",
        email: "john@email.com",
        password: "12345",
        createdAt: new Date(),
        updatedAt: new Date(),
        tasks: [
            {
                id: "1",
                title: "Task 1",
                description: "Description 1",
                done: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]

    },
];