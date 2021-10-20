import React,{useState} from 'react'
import {useForm, Controller} from 'react-hook-form'
// import DatePicker from "react-datepicker"
import　ReactDatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
// import moment from 'moment';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { setLocale } from "yup";
import * as ja from "yup-locale-ja";
// ja.suggestive; // suggestive (提示的)
// ja.descriptive; // descriptive (記述的)
setLocale(ja.suggestive);

// const schema = yup.object({
//     firstName: yup.string().max(10).required(),
//     email: yup.string().email().required(),
//     website: yup.string().url(),
//   }).required();
// const defaultValues = {
//     // Native: "",
//     // TextField: "",
//     // Select: "",
//     // ReactSelect: { value: "vanilla", label: "Vanilla" },
//     // Checkbox: false,
//     // switch: false,
//     // RadioGroup: "",
//     ReactDatepicker: new Date(),
//     numberFormat: 123456789,
//     // downShift: "apple",
//     // country: { code: "AF", label: "Afghanistan", phone: "93" }
//   };
const Planning = () => {

    //reset
    const { register, handleSubmit, reset, setValue, control } = useForm();


    // const { handleSubmit, register, reset, control, errors } = useForm({
    //     defaultValues
    // });
    // const onSubmit = (data) => alert(JSON.stringify(data))




    //useForm--------
    // const { register, handleSubmit, formState:{ errors } } = useForm({
    // resolver: yupResolver(schema)
    // });
    // const onSubmit = data => console.log(data);
    //react-datepicker------------------
    // const initialDate = new Date()
    // const [startDate, setStartDate] = useState(initialDate)
    //     const handleChange = (date) => {
    //     setStartDate(date)
    //     console.log(date)
    // }

    return (
        <div className="page-fexed-container"> 
            <div>Planning</div>
            {/* <form onSubmit={handleSubmit(onSubmit)} className="form">
                <section>
                    <label>React Datepicker</label>
                    <Controller
                        control={control}
                        name="ReactDatepicker"
                        render={(props) => {
                            return (
                            <ReactDatePicker
                                {...props}
                                className="input"
                                placeholderText="Select date"
                                selected={props.value}
                        />
                        );
                    }}
                    />
                </section> 
                <button className="button" type="submit">submit</button>
            </form> */}
            




            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="firstName">Title
                    <input {...register("firstName")} id="firstName"/>
                </label>
                <p>{errors.firstName?.message}</p>

                <label htmlFor="email">E-mail
                    <input {...register("email")} id="email"/>
                </label>
                <p>{errors.email?.message}</p>

                <label htmlFor="website">WebSite
                <input {...register("website")} id="website"/>
                </label>
                <p>{errors.website?.message}</p>
                
                <input type="submit" /> 
            </form> */}
            {/* <div>
                <div>日時</div>
                <DatePicker
                    selected={startDate}
                    onChange={handleChange}
                />
            </div> */}
            
        </div>
    )
} 

export default Planning 
