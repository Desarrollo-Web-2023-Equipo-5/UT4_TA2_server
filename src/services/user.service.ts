import { User } from "../models/user.interface";

export const USERS: User[] = [
    {
        id: "1",
        name: "John",
        email: "john@email.com",
        password: "12345",
        tasks: [
            {
                id: "1",
                title: "Task 1",
                description: "Description 1",
                done: false,
            },
        ]

    },
];