"use client";
import React, { useEffect, useState } from "react";
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
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

export const formSchema = z.object({
  mc_id: z.string().min(2),
  Boy_full_name: z.string(),
  Girl_full_name: z.string(),
  Date: z.string(),
  Place: z.string(),
  City: z.string(),
  Signature_of_Authority: z.string(),
});


export default function Marriage() {
    const [perttys, setperttys] = useState<z.infer<typeof formSchema>[]>(
        []
      );
      async function fetchRecords() {
        try {
          const response = await axios.get(
            "https://118d-2405-201-2006-7d89-5ca4-cc7a-1dbf-a564.ngrok-free.app/marriagecerti"
          );
          setperttys(response.data.reverse());
        } catch (error) {
          console.error("Failed to fetch records:", error);
        }
      }
      useEffect(() => {
        fetchRecords();
      }, []);

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
        "https://118d-2405-201-2006-7d89-5ca4-cc7a-1dbf-a564.ngrok-free.app/marriagecerti",
        data
      )
      .then(() => {
        alert("Successfully submitted");
        fetchRecords();
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
          <FormLabel className="flex flex-col items-center justify-between text-3xl font-bold" >Marriage Certificate</FormLabel>
          <FormField
            control={form.control}
            name="mc_id"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Marriage Certificate ID</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="enter certificate id" type="text" />
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
                      placeholder="enter Boy full name "
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
                      placeholder="enter girl full name "
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
                      placeholder="enter date"
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
                      placeholder="enter place"
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
                      placeholder="enter city"
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
                      placeholder="enter signature of authority"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Button type="submit">Submit</Button>

          <div className="flex min-h-screen flex-col items-center">
            <h3 className=" font-bold pt-10 pb-3 text-2xl">Fetch data</h3>
            <table>
            <TableHeader>
    <TableRow>
      <TableHead className="w-[100px] text-gray-700">Marriage Certificate ID</TableHead>
      <TableHead className="text-gray-700">Boy Full Name</TableHead>
      <TableHead className="text-gray-700">Girl Full Name</TableHead>
      <TableHead className="text-gray-700">Date</TableHead>
      <TableHead className="text-gray-700">Place</TableHead>
      <TableHead className="text-gray-700">City</TableHead>
      <TableHead className="text-right text-gray-700">Signature of Authority</TableHead>
    </TableRow>
  </TableHeader>

              <TableBody>
                  {perttys.map((pertty, index) => (
                <TableRow key={index} className="space-x-5 p-5">
        
                <TableCell className="font-medium">{pertty.mc_id}</TableCell>
                <TableCell>{pertty.Boy_full_name}</TableCell>
                <TableCell>{pertty.Girl_full_name}</TableCell>
                <TableCell>{pertty.Date}</TableCell>
                <TableCell>{pertty.Place}</TableCell>
                <TableCell>{pertty.City}</TableCell>
                
                <TableCell className="text-right">{pertty.Signature_of_Authority}</TableCell>
    </TableRow>
        ))}
  </TableBody>
            </table>
          </div>
        </form>
      </Form>
    </main>
  );
}