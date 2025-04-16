// функция для валидации полей по регулярным выражениям
export const validateRegExp =
    (regExp: RegExp, reverse = false) =>
    (_: any, val: string) => {
        if (reverse !== regExp.test(val)) {
            return Promise.reject();
        }
        return Promise.resolve();
    };
