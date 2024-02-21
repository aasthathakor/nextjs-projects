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
  mc_id: z.string().min(2),
  Boy_full_name: z.string(),
  Girl_full_name: z.string(),
  Date: z.string(),
  Place: z.string(),
  City: z.string(),
  Signature_of_Authority: z.string(),
});
export default function Talati() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    mc_id: "",
    Boy_full_name: "",
    Girl_full_name: "",
    Date: "",
    Place: "",
    City: "",
    Signature_of_Authority: "",
    },
  });
  
  const handleSubmit = async (data: any) => {
    axios
      .post(
        "https://dfdf-2405-201-2006-7d89-a9d6-af84-c972-73ac.ngrok-free.app/marriagecerti",
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
            name="mc_id"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Marriage Certificate ID</FormLabel>
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
            name="Boy_full_name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Boy Full Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Boy full name "
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
                name="Girl_full_name"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Girl Full Name</FormLabel>
                    <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter girl name "
                      type="text"
                    />
                  </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

          <FormField
            control={form.control}
            name="Date"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Date"
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
            name="Place"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Place</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter place"
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
            name="City"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter city"
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
            name="Signature_of_Authority"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Signature of Authority</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter signature"
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