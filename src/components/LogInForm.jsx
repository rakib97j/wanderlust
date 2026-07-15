"use client"

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { redirect } from "next/navigation";

const LogInForm = () => {



     const onSubmit = async (e) =>{
            e.preventDefault();
            const formData = new FormData(e.currentTarget)
            const user =Object.fromEntries(formData.entries());
    
    
            const {data , error} = await authClient.signIn.email({
                email:user.email,
                password:user.password,
                
            })
    
    
    
            if(data){
                redirect('/')
            }
            if(error){
                alert('error')
            }
    
    
        }


          const handelGoogleSingUp = async () => {
            await authClient.signIn.social({
              provider: "google",
            });
          };

    



  return (
    <div className="flex  justify-center  ">
      <div className="p-5 rounded-lg bg-[#8cceda60] shadow">
        <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4  ">
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
              Log In
            </Button>
          </div>
        </Form>
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

export default LogInForm;
