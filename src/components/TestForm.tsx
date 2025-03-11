// import { BigUserProfile, bigUserProfileExample, bigUserProfileForm, bigUserProfileSchema, bigUserProfileTypeConfig } from '@src/lib/bigExample';
// import { buildZodValidator } from '@src/lib/zodAdapter/zodAdapter';
// import { useForm } from '@tanstack/react-form';
// import { zodValidator } from '@tanstack/zod-form-adapter';
// import { EditForm } from '../react/EditForm';
// import { REACT_RENDER_CONFIG, ReactRenderConfig } from '../react/config';
// import { Booking, BookingInsert } from '@src/scripts/generated/types';
// import { bookingInsertTypeConfig } from '@src/scripts/generated/output.generated';
// import { FormItems } from '@src/lib/form';
// import { ReactNode } from 'react';






// type BookingInsertTypeConfig = typeof bookingInsertTypeConfig;
// function TestForm() {

//     const zodSchema = buildZodValidator<BookingInsert>(bookingInsertTypeConfig);

//     const form = useForm<BookingInsert>({
//         defaultValues: {
//             endDate: new Date(),
//             primaryDriver: null, 
//             startDate: null,
//             mileage: undefined,
//             notes: null,
//         }, 
//         defaultState: {
//             canSubmit: false,
//         },
//         validatorAdapter: zodValidator(),
//         validators: {
//             onSubmit: zodSchema.formValidator,    
//         },
//     });

    

//     const formItems: FormItems<BookingInsert, ReactNode, BookingInsertTypeConfig, ReactRenderConfig> = {
//         items: [
//             'endDate', 'mileage', 'price', {key: 'notes', component: 'multi-line-text-field'}, '',
//         ],
//     } 

//     return (
//         <EditForm
//             value={form}
//             renderConfig={REACT_RENDER_CONFIG}
//             config={bookingInsertTypeConfig}
//             form={formItems} 
//             validator={zodSchema}
//         />
//     );
// }

// export default TestForm;
