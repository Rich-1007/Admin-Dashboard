import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const DashboardTable = ({ data }) => {
  const [filteredPosts, setFilteredPosts] = useState(data);
  const [pageNum, setPageNum] = useState("1");
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setPageNum(searchParams.get("page") || "1");
  }, [searchParams]);

  useEffect(() => {
    const slicedArr = data.slice( (+pageNum-1) * 10, +pageNum * 10);
    console.log(slicedArr);
    setFilteredPosts(slicedArr);
  }, [pageNum]);

  const deletePost = (item) => {
    const filteredArr = filteredPosts.filter(
      (arr) => arr.post_id !== item.post_id
    );
    setFilteredPosts(filteredArr);
  };
  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className=" min-w-full overflow-hidden rounded-lg  border-collapse">
          <thead className="">
            <tr className="bg-gray-500 rounded-lg text-white">
              <th scope="col" className="text-start pr-3 py-2 px-2">
                <span>Post ID</span>
              </th>
              <th scope="col" className="text-start pr-3 py-2">
                <span>Post Caption</span>
              </th>
              <th scope="col" className="text-start pr-3 py-2">
                <span>URL</span>
              </th>
              <th scope="col" className="text-start pr-3 py-2">
                <span>Action</span>
              </th>
            </tr>
          </thead>
          <tbody className="">
            {filteredPosts &&
              filteredPosts.map((item) => (
                <tr className="border-b border-gray-400" key={item?.post_id}>
                  <td className="py-1">{item?.post_id}</td>
                  <td className="py-1">{item?.post_caption}</td>
                  <td className="py-1">{item?.media_url}</td>
                  <td>
                    <div className="flex gap-2">
                      <button
                        onClick={() => deletePost(item)}
                        className="border border-black px-2 py-0.5 text-sm"
                      >
                        Delete
                      </button>
                      <button className="border border-black px-2 py-0.5 text-sm">
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardTable;
