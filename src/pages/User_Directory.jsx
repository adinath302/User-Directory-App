import React, { useState } from "react";
import UserList from "../component/UserList";
import Loading from "../assets/loading.gif";
import UseFetch from "../component/UseFetch";
import Search from "../component/Search";
import { FiRefreshCw } from "react-icons/fi";

const User_Directory = () => {
  const [isRefetching, setIsRefetching] = useState(false);
  const [search, setSearch] = useState("");
  // custom hook to fetch api using react query
  const { data, isPending, isError, refetch, isFetching } = UseFetch({
    key: "User",
    api: "https://jsonplaceholder.typicode.com/users",
  });

  if (isError) {
    return <div>{isError.message}</div>;
  }
  if (isPending || isRefetching || isFetching) {
    return (
      <div className="flex items-center justify-center mt-52">
        <img src={Loading} alt="" className="h-30 w-30" />
      </div>
    );
  }

  const HandleSearch = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-5">
      <div>
        <div className="font-semibold text-3xl select-none cursor-pointer">
          User Directory
        </div>
      </div>
      <div className="mt-5">
        <Search
          refetch={refetch}
          search={search}
          setSearch={setSearch}
          setIsRefetching={setIsRefetching}
        />
      </div>
      <UserList HandleSearch={HandleSearch} />
      {}
    </div>
  );
};

export default User_Directory;
