import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
const UserList = ({ data }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageNum, setPageNum] = useState("1");

  useEffect(() => {
    setPageNum(searchParams.get("page") || "1");
  }, [searchParams]);

  const [filteredPosts, setFilteredPosts] = useState(data);
  useEffect(() => {
    const slicedArr = data.slice((+pageNum - 1) * 10, +pageNum * 10);
    console.log(slicedArr);
    setFilteredPosts(slicedArr);
  }, [pageNum]);

  const banUser = (item) => {
    const filteredArr = filteredPosts.map((arr) =>
      arr.userID === item.userID ? { ...item, isBanned: !item.isBanned } : arr
    );
    setFilteredPosts(filteredArr);
  };

  console.log(filteredPosts);
  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className=" min-w-full overflow-hidden rounded-lg  border-collapse">
          <thead className="">
            <tr className="bg-gray-500 rounded-lg text-white">
              <th scope="col" className="text-start pr-3 py-2 px-2">
                <span>User ID</span>
              </th>
              <th scope="col" className="text-start pr-3 py-2">
                <span>Username</span>
              </th>
              <th scope="col" className="text-start pr-3 py-2">
                <span>Name</span>
              </th>
              <th scope="col" className="text-start pr-3 py-2">
                <span>Email</span>
              </th>
              <th scope="col" className="text-start pr-3 py-2">
                <span>Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="">
            {filteredPosts &&
              filteredPosts.map((item) => (
                <tr
                  className={` border-b border-gray-400 ${
                    item?.isBanned && "text-red-500"
                  } `}
                  key={item?.userID}
                >
                  <td className={`py-1 `}>{item?.userID}</td>

                  <td className="py-1">{item?.userName}</td>
                  <td className="py-1">{item?.name}</td>
                  <td className="py-1">{item?.email}</td>
                  <td>
                    <div className="flex gap-2">
                      <button
                        onClick={() => banUser(item)}
                        className="border border-black px-3 py-0.5 text-sm"
                      >
                        Ban
                      </button>
                      <button className="border border-black px-3 py-0.5 text-sm">
                        Hide
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

export default UserList;
