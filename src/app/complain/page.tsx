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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


const formSchema = z.object({
  complain_id: z.string().min(2),
  complain_title: z.string(),
  complain_description: z.string(),
  complain_status: z.enum(["true", "false"], {
    required_error: "You need to select a notification type.",
  }),
  complain_date: z.string(),
  // complain_resolve_date: z.string(),
  user_id: z.string(),
});
export default function Talati() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        complain_id: "",
        complain_title: "",
        complain_description: "",
        complain_date: "",
      
        // complain_resolve_date: "",
        user_id: "",
    },
  });
  
  const handleSubmit = async (data: any) => {
    axios
      .post(
        "https://ac12-2405-201-2006-7d89-1cda-7f31-fd25-a700.ngrok-free.app/complain",
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
            name="complain_id"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Complain ID</FormLabel>
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
            name="complain_title"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Complain Title</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Complain Title"
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
                name="complain_description"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Complain description</FormLabel>
                    <FormControl>
                    <Input
                      {...field}
                      placeholder="complain description "
                      type="text"
                    />
                  </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

          {/* <FormField
            control={form.control}
            name="complain_status"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Complain Status</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="status"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          /> */}

<FormField
            control={form.control}
            name="complain_status"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className=" space-y-3 "
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="true" />
                      </FormControl>
                      <FormLabel className="font-normal">True</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="false" />
                      </FormControl>
                      <FormLabel className="font-normal">False</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />


          <FormField
            control={form.control}
            name="complain_date"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Complain Date</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter date"
                      type="date"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          {/* <FormField
            control={form.control}
            name="complain_resolve_date"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Complain Resolve Data</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Complain resolve date"
                      type="date"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          /> */}
          <FormField
            control={form.control}
            name="user_id"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>User ID</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="enter user id"
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