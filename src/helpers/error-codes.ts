export enum GeneralErrorCode {
    BodyRequired = 'ERR_BODY_REQUIRED',
    NotFound = 'ERR_RESOURCE_NOT_FOUND',
    ResourceFound = 'ERR_RESOURCE_FOUND',
    BadRequest = 'ERR_BAD_REQUEST',
    InternalServerError = 'ERR_INTERNAL_SERVER_ERROR',
}

export enum UserErrorCode {
    UserNotFound = 'ERR_USER_NOT_FOUND',
    UserFound = 'ERR_USER_FOUND',
    UserCreated = 'ERR_USER_CREATED',
    UserIdRequired = 'ERR_USER_ID_REQUIRED',
    UserNameRequired = 'ERR_USER_NAME_REQUIRED',
    UserEmailRequired = 'ERR_USER_EMAIL_REQUIRED',
    UserPasswordRequired = 'ERR_USER_PASSWORD_REQUIRED',
}

export enum TaskErrorCode {
    TaskNotFound = 'ERR_TASK_NOT_FOUND',
    TaskFound = 'ERR_TASK_FOUND',
    TaskCreated = 'ERR_TASK_CREATED',
    TaskIdRequired = 'ERR_TASK_ID_REQUIRED',
    TaskNameRequired = 'ERR_TASK_NAME_REQUIRED',
    TaskDescriptionRequired = 'ERR_TASK_DESCRIPTION_REQUIRED',
    TaskStatusRequired = 'ERR_TASK_STATUS_REQUIRED',
}