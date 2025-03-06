// import { RenderConfig } from "../domain";
// import { ArraySelectorFormItem, ArrayTypeConfig, FieldTypeConfig, FormItems, ObjectTypeConfig } from "../form";
// import { isArrayTypeConfig, isFieldTypeConfig } from "../objectTypeConfigUtils";
// import { isEmptyObject, objectEntries } from "../objectUtils";
// import { PrimitiveDeepKeys, UnnestedArrayKeys } from "../typeUtils";

// NOTE: This is a work in progress - in most cases this shouldn't be necessary as writing the form itself shouldn't be a large task


// export const buildDefaultForm = <T, TConfig extends ObjectTypeConfig<T>,  RenderT, RenderConfigT extends RenderConfig<RenderT>>(typeConfig: ObjectTypeConfig<T>, prefix: string | undefined = undefined): FormItems<
//     T,
//     RenderT,
//     TConfig,
//     RenderConfigT
// > => {

//         const items = objectEntries(typeConfig).map(([key, child]) => {
    
//             const fullKey = prefix === void 0 ? key : `${prefix}.${String(key)}`;

//             if(child === null || child === void 0) throw new Error('Invalid object configuration - no configuration can be null or undefined');
//             if(typeof child !== 'object') throw new Error('Invalid object configuration - field configurations must be objects');
    
//             if(isEmptyObject(child)) throw new Error('Cannot process empty child');
    
//             if(isFieldTypeConfig(child)) {
//                 // TODO check this is right
//                 return fullKey as unknown as PrimitiveDeepKeys<T>;
//             }
    
//             if(isArrayTypeConfig(child)) {
//                 const arrayConf = child as ArrayTypeConfig<T[keyof T]>;
//                 type ChildConfigT = typeof arrayConf['config'];
//                 const arrKey = fullKey as unknown as UnnestedArrayKeys<T>;
//                 const arrayForm = {
//                     key: arrKey,
//                     subForm: buildDefaultForm<T[keyof T][number], ChildConfigT, RenderT, RenderConfigT>(arrayConf.config),
//                 } satisfies  ArraySelectorFormItem<T, RenderT, TConfig, RenderConfigT, any>;
//                 return arrayForm;
//             }
    
//             const childItems = buildDefaultForm(child, fullKey);
//             return {
//                 ...childItems,
//                 label: key
//             };
//         });
    
//         return {
//             items
//         };

    
// }