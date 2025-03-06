import { ObjectTypeConfig, FieldTypeConfig, ArrayTypeConfig } from "./form";

export const isFieldTypeConfig = <T>(typeConfig: ObjectTypeConfig<T> | FieldTypeConfig<T>): typeConfig is FieldTypeConfig<T> => {
    return ('type' in typeConfig && typeof typeConfig.type === 'string');
}

export const isArrayTypeConfig = <T>(typeConfig: ObjectTypeConfig<T> | ArrayTypeConfig<T>): typeConfig is ArrayTypeConfig<T> => {
    return ('config' in typeConfig && typeof typeConfig.config === 'object');
}