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
  enrollment: z.string(),
  name: z.string(),
  college: z.string(),
  city: z.string(),
  contact: z.string(),
});
export default function Talati() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        enrollment: "",
        name: "",
        college: "",
        city: "",
        contact: "",
      
    },
  });
  
  const handleSubmit = async (data: any) => {
    axios
      .post(
        "https://6838-2405-201-2006-7d89-708b-5105-b05b-1b42.ngrok-free.app/student",
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
          <FormLabel className="flex flex-col items-center justify-between text-3xl font-bold" >student</FormLabel>
          <FormField
            control={form.control}
            name="enrollment"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>enrollment</FormLabel>
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
            name="name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>name:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="name"
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
                name="college"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>college</FormLabel>
                    <FormControl>
                    <Input
                      {...field}
                      placeholder="enter college"
                      type="text"
                    />
                  </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>city:</FormLabel>
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
            name="contact"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>contact:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="contact"
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

// "use client";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination"





// const page = () => {
//   const [data, setData] = useState([]);
//   const [limit,setLimit] = useState(5);
//   const current = 2;
//   console.log(process.env.NEXT_PUBLIC_PAGE);
//   console.log(limit,"LIMIt");
//   async function fetchRecords(limit,current) {
//     try {
//       await axios({
//         method: "post",
//         url: `https://e407-2405-201-2006-7d89-5ca4-cc7a-1dbf-a564.ngrok-free.app/page`,
//         data: {
//           limit: 5,
//           current: 1,
//         },
//       })
//         .then((res) => {
//           console.log(res.data.records);
//           setData(res.data.records);
//         })
//         .catch((err) => console.log(err));
//     } catch (error) {
//       console.error("Failed to fetch records:", error);
//     }
//   }
//   useEffect(() => {
//     fetchRecords(limit,current);
//   },[limit]);
//   return (
//     <>
//       <div className="w-[650px] mt-[50px] mx-auto">
//         <h2 className="text-2xl font-semibold flex flex-col items-center">
//           Student Records
//         </h2>
//         <Select>
//           <SelectTrigger className=" w-5 h-10 ml-[30px]">
//             <SelectValue placeholder="select " />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectGroup>
//               <SelectItem value="5" onClick={()=>(setLimit(5))}>5</SelectItem>
//               <SelectItem value="10" onClick={()=>(setLimit(10))}>10</SelectItem>
//               <SelectItem value="15" onClick={()=>(setLimit(15))}>15</SelectItem>
//             </SelectGroup>
//           </SelectContent>
//         </Select>
        
//       </div>
//       <div className="w-[650px] -mt-[20px]  mx-auto">
//         <table className="border-separate border-spacing-8 w-full ">
//           <thead>
//             <tr>
//               <th>Enrollment</th>
//               <th>Student Name</th>
//               <th>College</th>
//               <th>City</th>
//               <th>Contact</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               data.map((item) => (
//                 <tr key={item._id}>
//                     <td>{item.enrollment}</td>
//                     <td>{item.name}</td>
//                     <td>{item.college}</td>
//                     <td>{item.city}</td>
//                     <td>{item.contact}</td>
//                 </tr>
//               ))
//             }
//             </tbody>
//         </table>
//       </div>

//       <div className="w-[650px] mx-auto">
//       <Pagination>
//   <PaginationContent>
//     <PaginationItem>
//       <PaginationPrevious href="#" className=" font-bold"  />
//     </PaginationItem>
//     <PaginationItem>
//       <PaginationLink href="#" className=" font-bold">1</PaginationLink>
//       <PaginationLink href="#" className=" font-bold">2</PaginationLink>
//       <PaginationLink href="#" className=" font-bold">3</PaginationLink>
//       <PaginationLink href="#" className=" font-bold">4</PaginationLink>
//       <PaginationLink href="#" className=" font-bold">5</PaginationLink>
//     </PaginationItem>
//     <PaginationItem>
//       <PaginationEllipsis />
//     </PaginationItem>
//     <PaginationItem>
//       <PaginationNext href="#" className=" font-bold" />
//     </PaginationItem>
//   </PaginationContent>
// </Pagination>
//       </div>
 
   
//     </>
//   );
// };
// export default page;
