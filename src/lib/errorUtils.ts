import { ValidationError, ValidationErrorMap } from '@tanstack/form-core';

export const extractRelevantError = (errorMap: ValidationErrorMap): ValidationError => {
    if(!errorMap) return undefined;
    
    if(!errorMap.onChange) return undefined;
    // if there was an error and we've removed it, don't return an error
    return errorMap.onBlur;
    
}