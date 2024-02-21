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
  birth_id: z.string().min(2),
  user_id: z.string().min(2),
  child_name: z.string(),
  birth_place: z.string(),
  birth_date: z.string(),
  father_name: z.string(),
  mother_name: z.string(),
  viliage_name: z.string(),
  application_date: z.string(),
  talati_id: z.string(),
});
export default function Talati() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        birth_id: "",
        user_id: "",
        child_name: "",
        birth_place: "",
        birth_date: "",
        father_name: "",
        mother_name: "",
        viliage_name: "",
        application_date: "",
        talati_id: "",
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
            name="birth_id"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Birth ID</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter Birth ID" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="child_name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Child Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter child Name "
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
                name="birth_place"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Birth Place</FormLabel>
                    <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter child Name "
                      type="text"
                    />
                  </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

          <FormField
            control={form.control}
            name="birth_date"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Birth Date</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter birth date"
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
            name="father_name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Father's Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter father name"
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
            name="mother_name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Mother's Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter Mother Name"
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
            name="viliage_name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Village Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter Village Name"
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
              name="application_date"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Application Date</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter Application Date"
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
                    <FormLabel>Talati ID:</FormLabel>
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