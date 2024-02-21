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
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Calendar } from "@/components/ui/calendar";
// import { format, formatDate } from "date-fns"
// import { Calendar as CalendarIcon } from "lucide-react"

// import { cn } from "@/lib/utils"




const formSchema = z.object({
  income_id: z.string().min(2),
  user_id: z.string(),
  user_name: z.string(),
  income: z.string(),
  pan_no: z.string(),
  talati_id: z.string(),
//   applyDate: z.date({
//     required_error: "A Date is required.",
// }),
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
      
      
    },
  });
  
  const handleSubmit = async (data: any) => {
    axios
      .post(
        "https://1366-2405-201-2006-7d89-a9d6-af84-c972-73ac.ngrok-free.app/income",
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
          <FormLabel className="flex flex-col items-center justify-between text-3xl font-bold" >Income</FormLabel>
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
                      placeholder="Enter income"
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
                      placeholder="Enter pan no"
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
                  <FormLabel>Talati Id</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter Talati ID"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
           {/* <FormField
            control={form.control}
            name="applyDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of Birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          formatDate(field.value, "PPP")
                        ) : (
                          <span>Pick a Date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </main>
  );
}