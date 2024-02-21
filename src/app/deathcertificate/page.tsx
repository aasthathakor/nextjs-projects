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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";

const formSchema = z.object({
  death_certificate_id: z.string(),
  form_id: z.string(),
  user_id: z.string(),
  death_date: z.string(),
  death_place: z.string(),
  cause_of_death: z.string(),
  talati_id: z.string(), 
});
export default function Talati() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        death_certificate_id: "",
        form_id: "",
        user_id: "",
        death_date: "",
        death_place: "",
        cause_of_death: "",
        talati_id: "", 
    },
  });
  //const handleSubmit = () => {};
  const handleSubmit = async (data: any) => {
    axios
      .post(
        "https://dfdf-2405-201-2006-7d89-a9d6-af84-c972-73ac.ngrok-free.app/deathcertificate",
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
          <FormLabel className="flex flex-col items-center justify-between text-3xl font-bold" >Death Certificate</FormLabel>
          <FormField
            control={form.control}
            name="death_certificate_id"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Death Certificate ID</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="enter death certificate id" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="form_id"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Form ID:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="enter form id "
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
                name="user_id"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>User ID</FormLabel>
                    <FormControl>
                    <Input
                      {...field}
                      placeholder="enter user id "
                      type="text"
                    />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

          <FormField
            control={form.control}
            name="death_date"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Death date</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="enter death date"
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
            name="death_place"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Death place</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="enter death place"
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
            name="cause_of_death"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Cause of Death</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter Cause of death"
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
                      placeholder="enter talati id"
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