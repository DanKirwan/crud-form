import {  FieldValidateOrFn, FormValidateOrFn, Validator } from '@tanstack/form-core';
import { PrimitiveDeepKeys, UndefinedDeepPrimitives } from '../typeUtils';

export type FormValidator<T, TFormValidator extends Validator<T, unknown> | undefined = undefined> = {
    formValidator: FormValidateOrFn<UndefinedDeepPrimitives<T>, TFormValidator>,
    getFieldValidator: <K extends PrimitiveDeepKeys<T>>(key: K) => FieldValidateOrFn<T, K, undefined, TFormValidator> | undefined,
    isFieldRequired: <K extends PrimitiveDeepKeys<T>>(key: K) => boolean,
};