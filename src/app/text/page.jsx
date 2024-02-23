// "use client";
// import axios from "axios";
// import { useEffect, useState } from "react";



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
//         url: `https://7800-2405-201-2006-7d89-5ca4-cc7a-1dbf-a564.ngrok-free.app/page`,
//         data: {
//           limit,
//           current,
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
//   const [selectedItem, setSelectedItem] = useState("Counter");
//   const handleChange = (e) => {
//     setSelectedItem(e.target.value);
//     setLimit(e.target.value);
//   };
//   return (
//     <>
    
//       <div className="w-[650px] mt-[50px] mx-auto">
//         <h2 className="text-2xl font-semibold flex flex-col items-center">
//           Student Records
//         </h2>
//         <select
//             name="item-selected"
//             value={selectedItem}
//             onChange={handleChange}
//           >
//             <option className=" border-4 w-10 font-bold" value="5">5</option>
//             <option className=" border-4 w-10 font-bold"  value="10">10</option>
//             <option className=" border-4 w-10 font-bold"  value="15">15</option>
//           </select>
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

   
//     </>
//   );
// };
// export default page;










"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const Page = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5); // Records per page
  const [page, setPage] = useState(1);
  const [lastpage,setLastPage] = useState(1);

  async function fetchRecords() {
    try {
      const response = await axios.post(
        `https://7800-2405-201-2006-7d89-5ca4-cc7a-1dbf-a564.ngrok-free.app/page`,
        {
          limit: recordsPerPage,
          current: currentPage,
        }
      );
      const { records } = response.data;
      setData(records);
      setPage(result.currentPage);
          setLastPage(result.noOfDivision);
    } catch (error) {
      console.error("Failed to fetch records:", error);
    }
  }

  useEffect(() => {
    fetchRecords();
  }, [currentPage]); // Fetch records when currentPage changes

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      <div className="w-[650px] mt-[50px] mx-auto">
        <h2 className="text-2xl font-semibold flex flex-col items-center">
          Student Records
        </h2>
      </div>
      <div className="w-[650px] -mt-[20px] mx-auto">
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
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.enrollment}</td>
                <td>{item.name}</td>
                <td>{item.college}</td>
                <td>{item.city}</td>
                <td>{item.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className="flex justify-center mt-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-3 py-1 mr-2 bg-gray-200 rounded"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={data.length < recordsPerPage}
            className="px-3 py-1 bg-gray-200 rounded"
          >
            Next
          </button>
        </div> */}
        <div className="flex justify-between">
          <button onClick={() => setCurrent(page-1)} disabled={page==1}>
            <FaArrowLeft onClick={() => setCurrent(page-1)} />
          </button>
          <h1 className="text-lg">{page} out of {lastpage}</h1>
          <button onClick={() => setCurrent(page+1)} disabled={page==lastpage}>
            <FaArrowRight onClick={() => setCurrent(page+1)}/>
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;
