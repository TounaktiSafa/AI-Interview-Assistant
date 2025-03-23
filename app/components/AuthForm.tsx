"use client"

import { z } from "zod"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
const formSchema = z.object({
  username: z.string().min(2).max(50),
})

const authFormSchema =(type : FormType) =>{
    return z.object({
        name: type ==='sign-up' ? z.string().min(3) : z.string()
.optional(),
email : z.string().email(),
password:z.string().min(3),
    })
}

const AuthForm = ({ type }:{ type : FormType}) => {
const formSchema = authFormSchema(type);
    // 1. Define your form.
const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name:"",
      password:""
    },
  })
  const isSignIn = type === "sign-in"

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
    return (
    <div className="card-border lg:min-w-[566px]">
        <div className="flex flex-col gap-6 card py-14 px-10">
             <div className="flex flex-row gap-2 justify-center">
                <Image src="/logo.svg" alt="logo" height={32} width={32} ></Image>
             <h2 className="text-primary-100">InterviewPrep</h2>
             </div>
             <h3>Practice Job Interview with AI </h3>
        
        <Form {...form}>
    <form 
    className="w-full space-y-6 mt-4 form"
    
    onSubmit={form.handleSubmit(onSubmit)} >
      {!isSignIn && <p>Name :</p>}
      <p>Email :</p>
      <p>Password :</p>
      
      <Button className="btn" type="submit">{isSignIn? 'Sign in' : 'Create an Account'}</Button>
    </form>
  </Form>
  <p className="text-center">
    {isSignIn ? "Sign Up" :"Log In"}
    <Link href={!isSignIn ? '/sign-in' : '/sign-up'} className="font-bold text-user-primary ml-1">
    
    {!isSignIn ? '  Log In To your Account' : "Create a New Account" }
    
    </Link>
  </p>
  </div>
  </div>
  )
}

export default AuthForm