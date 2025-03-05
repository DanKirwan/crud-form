import { FieldValidateOrFn, FormValidateOrFn, Validator } from '@tanstack/form-core';
import { AllPrimitiveDeepKeys } from '../typeUtils';

export type FormValidator<T, TFormValidator extends Validator<T, unknown> | undefined = undefined> = {
    formValidator: FormValidateOrFn<T, TFormValidator>,
    getFieldValidator: <K extends AllPrimitiveDeepKeys<T>>(key: K) => FieldValidateOrFn<T, K, undefined, TFormValidator> | undefined,
    isFieldRequired: <K extends AllPrimitiveDeepKeys<T>>(key: K) => boolean,
};