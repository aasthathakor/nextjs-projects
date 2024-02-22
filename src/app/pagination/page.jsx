"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"



const page = () => {
  const [data, setData] = useState([]);
  const [limit,setLimit] = useState(5);
  const current = 2;
  console.log(process.env.NEXT_PUBLIC_PAGE);
  console.log(limit,"LIMIt");
  async function fetchRecords(limit,current) {
    try {
      await axios({
        method: "post",
        url: `https://7800-2405-201-2006-7d89-5ca4-cc7a-1dbf-a564.ngrok-free.app/page`,
        data: {
          limit,
          current,
        },
      })
        .then((res) => {
          console.log(res.data.records);
          setData(res.data.records);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error("Failed to fetch records:", error);
    }
  }
  useEffect(() => {
    fetchRecords(limit,current);
  },[limit]);
  const [selectedItem, setSelectedItem] = useState("Counter");
  const handleChange = (e) => {
    setSelectedItem(e.target.value);
    setLimit(e.target.value);
  };
  return (
    <>
    
      <div className="w-[650px] mt-[50px] mx-auto">
        <h2 className="text-2xl font-semibold flex flex-col items-center">
          Student Records
        </h2>
        <select
            name="item-selected"
            value={selectedItem}
            onChange={handleChange}
          >
            <option className=" border-4 w-10 font-bold" value="5">5</option>
            <option className=" border-4 w-10 font-bold"  value="10">10</option>
            <option className=" border-4 w-10 font-bold"  value="15">15</option>
          </select>
      </div>
      <div className="w-[650px] -mt-[20px]  mx-auto">
        <table className="border-separate border-spacing-8 w-full ">
          <thead>
            <tr>
              <th>Enrollment</th>
              <th>Student Name</th>
              <th>College</th>
              <th>City</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item) => (
                <tr key={item._id}>
                    <td>{item.enrollment}</td>
                    <td>{item.name}</td>
                    <td>{item.college}</td>
                    <td>{item.city}</td>
                    <td>{item.contact}</td>
                </tr>
              ))
            }
            </tbody>
        </table>
      </div>

      <div className="w-[650px] mx-auto">
      <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" className=" font-bold"  />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" className=" font-bold">1</PaginationLink>
      <PaginationLink href="#" className=" font-bold">2</PaginationLink>
      <PaginationLink href="#" className=" font-bold">3</PaginationLink>
      <PaginationLink href="#" className=" font-bold">4</PaginationLink>
      <PaginationLink href="#" className=" font-bold">5</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" className=" font-bold" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
      </div>
 
   
    </>
  );
};
export default page;









