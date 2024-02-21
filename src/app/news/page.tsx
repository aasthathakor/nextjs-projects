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
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format, formatDate } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"





const formSchema = z.object({
  news_id: z.string().min(2),
  news_title: z.string(),
  news_description: z.string(),
  news_date_time: z.date({
    required_error: "A Date is required.",
  }),
  news_image: z.any(),
  talati_id: z.string(),
});
export default function Talati() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        news_id: "",
        news_title: "",
        news_description: "",
        news_image: "",
        talati_id: "",
      
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
          <FormLabel className="flex flex-col items-center justify-between text-3xl font-bold" >News</FormLabel>
          <FormField
            control={form.control}
            name="news_id"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>News ID</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="enter news id" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="news_title"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>News Title</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="enter news title"
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
                name="news_description"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>News Description</FormLabel>
                    <FormControl>
                    <Input
                      {...field}
                      placeholder="description of news"
                      type="text"
                    />
                  </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            <FormField
            control={form.control}
            name="news_date_time"
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
          />

           <FormField
            control={form.control}
            name="news_image"
            render={({ field: { value, onChange, ...fieldProps } }) => (
              <FormItem>
                <FormLabel>News Image</FormLabel>
                <FormControl>
                  <Input
                    {...fieldProps}
                    placeholder="Picture"
                    type="file"
                    accept="image/*, application/any"
                    onChange={(event) =>
                      onChange(event.target.files && event.target.files[0])
                    }
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
                  <FormLabel>talati id:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter talati id"
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