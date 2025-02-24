// import { validateRegExp } from './validateRegExp';

/** Хук для правила на underscore в начале строки */
export const useValidatorRule = (
    message: string,
    regexp: RegExp,
    reverse?: boolean
) => {
    const rule = {
        validator: validateRegExp(regexp, reverse),
        message,
    };

    return rule;
};
