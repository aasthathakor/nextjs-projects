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
  applyDate: z.string(),
  talati_id: z.string(),
  issueDate: z.string(),
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
        applyDate: "",
        talati_id: "",
        issueDate: "",
    },
  });
  //const handleSubmit = () => {};
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
            name="applyDate"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Apply Date</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter Date"
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
          <FormField
              control={form.control}
              name="issueDate"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Issue Date</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter issue Date"
                        type="date"
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