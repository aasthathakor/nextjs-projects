"use client";
import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";

const formSchema = z.object({
  talati_id: z.string(),
  talati_name: z.string().min(4),
  talati_mail: z.string().email(),
  talati_password: z.string().min(8),
  talati_ph: z.string().min(10),
  talati_sal: z.string(),
  talati_gender: z.enum(["male", "female"], {
    required_error: "You need to select a type.",
  }),
  talati_signature: z.string(),
  village_id: z.string(),
});
export default function Talati() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      talati_id:"",
      talati_name:"", 
      talati_mail:"", 
      talati_password:"", 
      talati_ph:"",
      talati_sal:"",
      talati_signature:"",
      village_id:"",
    },
  });
  //const handleSubmit = () => {};
  const handleSubmit = async (data: any) => {
    axios
      .post(
        "https://ac12-2405-201-2006-7d89-1cda-7f31-fd25-a700.ngrok-free.app/talati",
        data
      )
      .then(() => {
        alert("Successfully submitted");
        form.reset();
      })
      .catch((err) => console.log(err));
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-w-md w-full flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="talati_id"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Enter ID</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter ID" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="talati_name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Enter Name:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter Talati Name "
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
                control={form.control}
                name="talati_gender"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Gender</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className=" space-y-3 "
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="male" />
                          </FormControl>
                          <FormLabel className="font-normal">Male</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="female"/>
                          </FormControl>
                          <FormLabel className="font-normal">Female</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

          <FormField
            control={form.control}
            name="talati_mail"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Enter mail:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter mail-id"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="talati_password"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Enter Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter Password"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="talati_ph"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Enter phone-no:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter phone-no"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="talati_sal"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Salary</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter Salary"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
              control={form.control}
              name="talati_signature"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Sign</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="sign"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          <FormField
              control={form.control}
              name="village_id"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Village ID:</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter Village id"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </main>
  );
}