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

const formSchema = z.object({
  cast_id: z.string().min(2),
  user_id: z.string().min(2),
  form_id: z.string().min(2),
  religion: z.string(),
  cast: z.string(),
  talati_id: z.string(),
});
export default function Talati() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        cast_id: "",
        user_id: "",
        form_id: "",
        religion: "",
        cast: "",
        talati_id: "",

    },
  });
  //const handleSubmit = () => {};
  const handleSubmit = async (data: any) => {
    axios
      .post(
        "https://1366-2405-201-2006-7d89-a9d6-af84-c972-73ac.ngrok-free.app/cast",
        data
      )
      .then(() => {
        alert("Successfully submitted");
        form.reset();
      })
      .catch((err) => console.log(err));
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-w-md w-full flex flex-col gap-4"
        >
          <FormLabel className="flex flex-col items-center justify-between text-3xl font-bold" >Cast</FormLabel>
          <FormField
            control={form.control}
            name="cast_id"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Cast ID</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter cast ID" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="user_id"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>User Id</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter user id "
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
                name="form_id"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Form ID</FormLabel>
                    <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter id "
                      type="text"
                    />
                  </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

          <FormField
            control={form.control}
            name="religion"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Religion</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter Religion"
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
            name="cast"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Cast</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter cast type"
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
            name="talati_id"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Talati ID</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter talati ID"
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