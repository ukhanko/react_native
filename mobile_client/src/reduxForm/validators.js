export const dummyCheck = () => undefined;
export const requiredCheck = value => (!value || (value === '')) && 'Обязательное поле';
export const lenghtCheck = lenght => value => value && (value.length !== lenght) && `Значение должно быть длиной в ${lenght} символов`;
export const onlyNumbers = value => (value && !/^[0-9]+$/.test(value)) && 'Значение должно содержать только цифры';
