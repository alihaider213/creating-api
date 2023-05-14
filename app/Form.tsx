"use client"  // this is becouse we are using hooks
import { useForm } from 'react-hook-form';  // builtIn library provide the different objects to validate the form inputs
import React from 'react'

const Form = () => {

    const {  // ham yaha pay in ko destructure kr rhay han jo k "useForm()" say aarhay...
        register, // used to detect the changes & errors
        handleSubmit, // used for validation & error handling
        formState: { errors },  // a.formState.errors  yah dono trekay error ko destructure kren gay
      } = useForm();

      console.log("Errors :",errors)

      const formHandler = async(data:any) => {
        console.log(data);

        await fetch("/api/formHandler", {  //api ko fectch kia
            method:"POST",   // jo api opr fetch ke ha us main data send krne k leay "POST" method use kia
            body: JSON.stringify(data) // jo data send krna ha usay body main rkha aur formate JSON wala kr dia
        })
      };
    
    //   console.dir(register("password"))

    return (
        <div className='mx-10 my-10'>
            {/* "onSubmit" is an event */}
            <form className='flex space-x-6' onSubmit={handleSubmit(formHandler)}> 
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" 

                        {...register("email")}  // spread operator say spread kr rhay isay aur is main nechay waly saary funtions han
                        // name="email"
                        // onChange="email"
                        // onBlur="email"
                        // ref="email"

                        className='border' 
                        placeholder='Enter your email' />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" 
                        {...register("password", {required:true})}  // yah register ka method ab yaha pay attach ho gya ha ab yah is input field main dekhta rhay ga k kia kia changes ho rhin
                        className='border' placeholder='Enter your password' />

                        {errors.password && errors.password.type === "required" && (
                            <p className='errorMsg'>Password is required</p>
                        )}
                </div>
                <div>
                    <button type='submit' className='border p-4'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form