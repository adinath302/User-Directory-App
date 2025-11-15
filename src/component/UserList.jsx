import React, { useState } from "react";
import Modal from "./Modal";
import { AnimatePresence, easeOut, motion } from "motion/react";
const UserList = ({ HandleSearch }) => {
  const [userid, setUserId] = useState(null);
  console.log(HandleSearch);

  return (
    <div className="mt-10">
      <div className="md:grid grid-cols-1 none sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-3 items-center font-bold p-2 border-b border-gray-300 hidden ">
        <div>Name</div>
        <div>Email</div>
        <div>Company</div>
        <div>City</div>
        <div>View Details</div>
      </div>
      <ul>
        {HandleSearch.map((user) => {
          return (
            <li
              key={user.id}
              className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 items-center p-2 border-b border-gray-300 bg-gray-300 m-3"
            >
              <AnimatePresence mode="wait">
                {userid === user.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    key={user.id}
                    transition={{ duration: 0.1, ease: easeOut }}
                    className="z-10 fixed inset-0 flex items-center justify-center backdrop-blur-md backdrop-opacity-100 transition-all duration-300"
                  >
                    <Modal user={user} setUserId={setUserId} />
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="flex gap-2">
                <div>{user.id}</div>
                <div className="font-semibold flex items-center ">
                  {user.name}
                </div>
              </div>
              <p>{user.email}</p>
              <p>{user.company.name}</p>
              <p>{user.address.city}</p>
              <div className="">
                <span
                  onClick={() => setUserId(user.id)}
                  className="border border-gray-300 p-1 rounded-xl cursor-pointer text-sm bg-gray-200 text-black"
                >
                  View Details
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
