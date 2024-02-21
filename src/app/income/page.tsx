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
  income_id: z.string().min(2),
  user_id: z.string(),
  user_name: z.string(),
  income: z.string(),
  pan_no: z.string(),
  talati_id: z.string(),
  applyDate: z.string(),
});
export default function Talati() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        income_id: "",
        user_id: "",
        user_name: "",
        income: "",
        pan_no: "",
        talati_id: "",
        applyDate: "",
      
    },
  });
  
  const handleSubmit = async (data: any) => {
    axios
      .post(
        "",
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
            name="income_id"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Income ID</FormLabel>
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
            name="user_id"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>User ID</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="user id"
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
                name="user_name"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>User Name</FormLabel>
                    <FormControl>
                    <Input
                      {...field}
                      placeholder="user name"
                      type="text"
                    />
                  </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

          <FormField
            control={form.control}
            name="income"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Income</FormLabel>
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
          />
          <FormField
            control={form.control}
            name="pan_no"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Pan No</FormLabel>
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
          <FormField
            control={form.control}
            name="talati_id"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Talati Id</FormLabel>
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
          />
          <FormField
            control={form.control}
            name="applyDate"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Apply Date</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="enter apply date"
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