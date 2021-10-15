import React,{useState} from 'react'
import {useForm, Controller} from 'react-hook-form'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import moment from 'moment';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { setLocale } from "yup";
import * as ja from "yup-locale-ja";
// ja.suggestive; // suggestive (提示的)
// ja.descriptive; // descriptive (記述的)
setLocale(ja.suggestive);

const schema = yup.object({
    firstName: yup.string().max(10).required(),
    // age: yup.number().positive().integer().required(),
    email: yup.string().email().required(),
    website: yup.string().url(),
  }).required();



const Planning = () => {
    //useForm--------
    const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);
    //react-datepicker------------------
    const initialDate = new Date()
    const [startDate, setStartDate] = useState(initialDate)
        const handleChange = (date) => {
        setStartDate(date)
        console.log(date)
    }

    return (
        <div className="page-fexed-container"> 
            <div>Planning</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <label htmlFor="firstName">Title
                    <input {...register("firstName")} for="firstName"/>
                </label>
                <p>{errors.firstName?.message}</p>

                <label htmlFor="email">E-mail
                    <input {...register("email")} />
                </label>
                <p>{errors.email?.message}</p>

                <label htmlFor="website">WebSite
                <input {...register("website")} />
                </label>
                <p>{errors.website?.message}</p>
                    
                {/* <input {...register("age")} />
                <p>{errors.age?.message}</p> */}
                
                <input type="submit" /> 
            </form>
            <DatePicker
            selected={startDate}
            onChange={handleChange}
            />
        </div>
    )
} 

export default Planning 
