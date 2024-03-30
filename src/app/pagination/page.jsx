"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { TfiArrowCircleRight } from "react-icons/tfi";



const page = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(5);
  const [current, setCurrent] = useState(1);
  const [page, setPage] = useState(1);
  const [lastpage,setLastPage] = useState(1);
 
  async function fetchRecords(limit, current) {
    try {
      await axios.post(`https://d3f8-2405-201-2006-7d89-c488-b21b-95c-6546.ngrok-free.app/page`,{limit,current})
        .then((res) => {
          const result = res.data;
          setData(result.records);
          setPage(result.currentPage);
          setLastPage(result.noOfDivision);
        })
       
     
    
    } catch (error) {
      console.error("Failed to fetch records:", error);
    }
  }
  //select menu
  const [selectedItem, setSelectedItem] = useState("Counter");
  const handleChange = (e) => {
    setSelectedItem(e.target.value);
    setLimit(e.target.value);
  };
  useEffect(() => {
    fetchRecords(limit, current);
  }, [limit, current,page]);
 
  return (
    <>
      <div className="w-[650px] mt-[50px] mx-auto">
        <h2 className="text-2xl font-semibold flex flex-col items-center">
          Student Records
        </h2>
        <div>
          <select
            name="item-selected"
            value={selectedItem}
            onChange={handleChange}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
      </div>
      <div className="w-[650px] -mt-[20px]  mx-auto">
        <table className="border-separate border-spacing-8 w-full ">
          <thead>
            <tr>
              <th>Enrollment</th>
              <th>Student Name</th>
              <th>College</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return(
              <tr key={item._id}>
                <td>{item.enrollment}</td>
                <td>{item.name}</td>
                <td>{item.college}</td>
                <td>{item.contact}</td>
              </tr>
            )})}
          </tbody>
        </table>
        <div className="flex justify-center gap-4">
          <button onClick={() => setCurrent(page-1)} disabled={page==1}>
            <TfiArrowCircleLeft onClick={() => setCurrent(page-1)} />
          </button>
          <h1 className="text-lg">{page} out of {lastpage}</h1>
          <button onClick={() => setCurrent(page+1)} disabled={page==lastpage}>
            <TfiArrowCircleRight onClick={() => setCurrent(page+1)}/>
          </button>
        </div>
      </div>
    </>
  );
};
export default page;



