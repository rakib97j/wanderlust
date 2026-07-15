"use client";

import { authClient } from "@/lib/auth-client";
import { Icon } from "@iconify/react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";

import Link from "next/link";

import { redirect } from "next/navigation";

const SingUpForm = () => {

    const onSubmit = async (e) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const user =Object.fromEntries(formData.entries());


        const {data , error} = await authClient.signUp.email({
            name:user.name,
            image: user.image,
            email:user.email,
            password:user.password,
            
        })



        if(data){
            redirect('/')
        }
        if(error){
            alert('error')
        }}


        const handelGoogleSingUp = async ( ) => {
          await authClient.signIn.social({
            provider: "google",
          });
        }

    
  return (
    <div className="flex  justify-center  ">
      <div className="bg-[#8cceda60] shadow rounded-lg p-5  ">
        <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4   ">
          {/* Name */}
          <TextField
            isRequired
            name="name"
            type="text"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="John Doe" variant="secondary" />
            <FieldError />
          </TextField>

          {/* Img */}
          <TextField isRequired name="image" type="url">
            <Label>Image</Label>
            <Input placeholder="Enter your image link" variant="secondary" />
            <FieldError />
          </TextField>

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" variant="secondary" />
            <FieldError />
          </TextField>
          {/* Password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" variant="secondary" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className="">
            <Button type="submit" className="w-full rounded-lg">
              Create Account
            </Button>
          </div>
        </Form>
        <div className="flex justify-center items-center">
          <Separator />
          <h1 className="whitespace-nowrap">Sign Up with OR</h1>
          <Separator />
        </div>
        <div>
          <Button
            onClick={handelGoogleSingUp}
            className="w-full mt-5"
            variant="tertiary"
          >
            <Icon icon="devicon:google" />
            Sign in with Google
          </Button>

          <p className="text-center text-sm text-muted-foreground mt-4">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary font-bold hover:underline"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingUpForm;
