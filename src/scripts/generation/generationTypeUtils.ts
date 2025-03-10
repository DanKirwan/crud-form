type GenerationResult = {
    value: string;
    errors: string[];
    references: string[];
  };
  
export const genResultOf = (value: string): GenerationResult => ({
    value,
    errors: [],
    references: [],
});

export const genResultError = (error: string): GenerationResult => ({
    value: '',
    errors: [error],
    references: [],
});
  
export const genResultMap = (
    result: GenerationResult,
    f: (value: string) => string,
): GenerationResult => ({
    value: f(result.value),
    errors: result.errors,
    references: result.references,
});
  
export const genResultChain = (
    result: GenerationResult,
    f: (value: string) => GenerationResult,
): GenerationResult => {
    const next = f(result.value);
    return {
        value: next.value,
        errors: result.errors.concat(next.errors),
        references: result.references.concat(next.references),
    };
};
  
export const appendError = (
    result: GenerationResult,
    error: string,
): GenerationResult => ({
    value: result.value,
    errors: result.errors.concat([error]),
    references: result.references,
});
  
export const appendReference = (
    result: GenerationResult,
    reference: string,
): GenerationResult => ({
    value: result.value,
    errors: result.errors,
    references: result.references.concat([reference]),
});