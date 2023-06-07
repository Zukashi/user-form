import {boolean, number, object, string} from "yup";

export const formSchema = object({
    name: string().required().max(32),
    surname: string().required().max(48),
    email: string().email().required(),
    phone: string().typeError('Phone must be a number').min(6).max(15),
    message:string().max(250),
    privacyPolicy:boolean().required().isTrue('Privacy Policy is required')

})