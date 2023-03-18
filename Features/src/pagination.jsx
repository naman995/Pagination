import React, { useState } from "react";
import ApiData from "./Data.json";
import ReactPagination from "react-paginate";
// import {AiOutlineLeft}

const Pagination = () => {
  const [PostData, setPostData] = useState(ApiData.slice(0, 100));
  const [pageNumber, setPageNumber] = useState(0);
  const perPage = 10;
  const pageclick = pageNumber * perPage;
  const countPage = Math.ceil(PostData.length / perPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="h-screen w-screen">
      <p>pagination</p>
      {PostData.slice(pageclick, pageclick + perPage).map((dataPost, index) => (
        <div className="mt-10" key={index}>
          <p className="bg-red-200">{dataPost.id}</p>
          <p className="bg-green-200">{dataPost.last_name}</p>
          <p className="bg-blue-300">{dataPost.gender}</p>
        </div>
      ))}
      <ReactPagination
        containerClassName="flex gap-4 justify-center items-center mt-10 pb-10 text-[#A0A3BD]"
        activeClassName="text-blue-500 border-b-2 border-[#4D5EDC]"
        previousLinkClassName="text-[#4D5EDC] pb-[4px] px-[7px] pr-[8px] rounded-full border   border-[#4D5EDC] hover:text-[#ffffff] hover:bg-[#4D5EDC]"
        nextLinkClassName="text-[#4D5EDC] pb-[4px] px-[7px] pl-[8px] rounded-full border   border-[#4D5EDC] hover:text-[#ffffff] hover:bg-[#4D5EDC]"
        previousLabel="<"
        breakLabel="..."
        nextLabel=">"
        pageCount={countPage}
        onPageChange={changePage}
        pageRangeDisplayed={1}
        renderOnZeroPageCount={null}
      ></ReactPagination>
    </div>
  );
};

export default Pagination;
