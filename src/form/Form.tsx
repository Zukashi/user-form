import {useForm} from "react-hook-form";
import {toast, ToastContainer} from "react-toastify";
import {Button, Checkbox, FormControlLabel, TextField} from "@mui/material";
export interface FormValues  {
    name:string,
    surname: string,
    email:string,
    phone:number,
    message?:number,
    privacyPolicy:boolean
}
import 'react-toastify/dist/ReactToastify.css';
import './form.css'
import { motion} from 'framer-motion'
import {yupResolver} from "@hookform/resolvers/yup";
import {formSchema} from "./formSchema";
import {useState} from "react";
export const Form = () => {
    const [changer, setChanger ] = useState(false)
    const {register, handleSubmit, formState : {errors}, reset} =  useForm<FormValues>({
        resolver: yupResolver(formSchema),

    });
    const submitForm = () => {
        toast.success(`Form submitted`, {
            position: "top-center",
            theme:"dark",
        });
        reset()
        setChanger(true)

    }
    return (<><ToastContainer/> <div className='form-container'>
        <motion.form initial={{y:-300}} transition={{ ease:"easeInOut"}}  animate={{y:0}} onSubmit={handleSubmit(submitForm)} autoComplete={'off'}>
            <div className="input-container">
                <TextField label={'Name'} variant={'outlined'} type="text" {
                    ...register('name')
                }/>
                <p className='error-text'>{errors.name?.message}</p>
            </div>
            <div className="input-container">
                <TextField label={'Surname'} variant={'outlined'} type="text" {
                    ...register('surname')
                }/>
                <p className='error-text'>{errors.surname?.message}</p>
            </div>
            <div className="input-container">
                <TextField label={'Email'} variant={'outlined'} type="email" {
                    ...register('email')
                }/>
                <p className='error-text'>{errors.email?.message}</p>
            </div>
            <div className="input-container">
                <TextField label={'Phone'} variant={'outlined'} type="number" {
                    ...register('phone')
                }/>
                <p className='error-text'>{errors.phone?.message}</p>
            </div>
            <div className="input-container">
                <TextField label={'Message'} variant={'outlined'} type="text" {
                    ...register('message')
                }/>
                <p className='error-text'>{errors.message?.message}</p>
            </div>
            <div >

                <FormControlLabel  control={<Checkbox />} label="Privacy Policy" {...register('privacyPolicy')}/>
                <p className='error-text'>{errors.privacyPolicy?.message}</p>
            </div>
            <Button type={"submit"}>Submit</Button>
        </motion.form>
    </div></>)
}