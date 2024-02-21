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
  village_id: z.string().min(2),
  village_name: z.string(),
  village_pincode: z.string().max(6),
  talati_id: z.string(),
});
export default function Talati() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        village_id: "",
        village_name: "",
        village_pincode: "",
        talati_id: "",
      
    },
  });
  
  const handleSubmit = async (data: any) => {
    axios
      .post(
        "https://dfdf-2405-201-2006-7d89-a9d6-af84-c972-73ac.ngrok-free.app/village",
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
            name="village_id"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>village ID</FormLabel>
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
            name="village_name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>village name:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="village name"
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
                name="village_pincode"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Village pincode</FormLabel>
                    <FormControl>
                    <Input
                      {...field}
                      placeholder="enter pincode"
                      type="text"
                    />
                  </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
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
                      placeholder="status"
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