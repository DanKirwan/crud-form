import {  FieldValidateOrFn, FormValidateOrFn, Validator } from '@tanstack/form-core';
import { AllPrimitiveDeepKeys, PrimitiveDeepKeys, UndefinedDeepPrimitives } from '../typeUtils';

export type FormValidator<T, TFormValidator extends Validator<T, unknown> | undefined = undefined> = {
    formValidator: FormValidateOrFn<UndefinedDeepPrimitives<T>, TFormValidator>,
    getFieldValidator: <K extends AllPrimitiveDeepKeys<T>>(key: K) => FieldValidateOrFn<T, K, undefined, TFormValidator> | undefined,
    isFieldRequired: <K extends AllPrimitiveDeepKeys<T>>(key: K) => boolean,
};