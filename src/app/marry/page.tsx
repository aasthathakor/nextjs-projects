
"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { z } from "zod";
import { formSchema } from "../marry2/page";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"



const page = () => {
  const [perttys, setperttys] = useState<
    z.infer<typeof formSchema>[]
  >([]);
  const [limit,setLimit] = useState(5);
 
  async function fetchRecords() {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_URL}/marry`);
      setperttys(response.data.reverse());
    } catch (error) {
      console.error("Failed to fetch records:", error);
    }
  }
  useEffect(() => {
    fetchRecords();
  }, []);
  return (
    <>
    <div className="w-[650px] mt-[50px] mx-auto">
    <h2 className="text-2xl font-semibold flex flex-col items-center">Marriage Records</h2>
    <Select>
      <SelectTrigger className="w-[130px] h-[30px] ml-[30px]">
        <SelectValue placeholder="Select a Row " />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="5" onClick={() => setLimit(5)}>5</SelectItem>
          <SelectItem value="10" onClick={() => setLimit(10)}>10</SelectItem>
          <SelectItem value="15" onClick={() => setLimit(15)}>15</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
     <div className="flex min-h-screen flex-col items-center">
            <h3 className=" font-bold pt-10 pb-3 text-2xl">Fetch data</h3>
            <Table>
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
            </Table>
          </div>
    </>
  );
};
export default page;


