import React, { useState } from "react";
import ApiData from "./Data.json";
import ReactPagination from "react-paginate";

const Pagination = () => {
  const [PostData, setPostData] = useState(ApiData.slice(0, 100));
  const [pageNumber, setPageNumber] = useState(0);
  const perPage = 9;
  const pageclick = pageNumber * perPage;
  const countPage = Math.ceil(PostData.length / perPage);
  return (
    <div className="h-screen w-screen ">
      <p>pagination</p>
      {PostData.slice(pageclick, pageclick + perPage).map((dataPost, index) => (
        <div key={index}>
          <p>{PostData.first_name}</p>
          <p>{PostData.last_name}</p>
          <p>{PostData.gender}</p>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
