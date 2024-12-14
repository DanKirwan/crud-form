import { DeepValue, FieldValidateOrFn, FormValidateOrFn, Validator } from '@tanstack/form-core';
import { PrimitiveDeepKeys } from '../form';

export type FormValidator<T, TFormValidator extends Validator<T, unknown> | undefined = undefined> = {
    formValidator: FormValidateOrFn<T, TFormValidator>,
    getFieldValidator: <K extends PrimitiveDeepKeys<T>>(key: K) => FieldValidateOrFn<T, K, undefined, TFormValidator> | undefined
};