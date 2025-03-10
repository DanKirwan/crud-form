import { DeepKeys, FieldValidateOrFn, FormValidateOrFn, Validator } from '@tanstack/form-core';

export type FormValidator<T, TFormValidator extends Validator<T, unknown> | undefined = undefined> = {
    formValidator: FormValidateOrFn<T, TFormValidator>,
    getFieldValidator: <K extends DeepKeys<T>>(key: K) => FieldValidateOrFn<T, K, undefined, TFormValidator> | undefined,
    isFieldRequired: <K extends DeepKeys<T>>(key: K) => boolean,
};