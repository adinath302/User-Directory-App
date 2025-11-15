import React from "react";
import { IoMdClose } from "react-icons/io";

const Modal = ({ user, setUserId }) => {
  return (
    <div className="relative bg-gray-100 rounded-xl p-4 shadow-md shadow-gray-400">
      <div
        onClick={() => setUserId(null)}
        className="absolute right-1 cursor-pointer top-1 p-1 text-xl hover:scale-105 transition-all"
      >
        <IoMdClose />
      </div>
      <div className="text-md items-center flex justify-center mb-3 font-bold">
        User Details
      </div>
      <div className="text-xl p-2 font-semibold gap-2 flex">
        <div className="font-normal">{user.id}.</div>
        {user.name}
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 p-2 gap-3 sm:gap-15 text-sm">
        <div className="flex-col">
          <div className="font-semibold select-none">Email :</div>
          {user.email}
        </div>
        <div className="flex-col">
          <div className="font-semibold select-none">Phone:</div>
          {user.phone}
        </div>
        <div>
          <div className="font-semibold select-none">Website:</div>
          {user.website}
        </div>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 p-2 gap-3 sm:gap-15 text-sm">
        <div>
          <div className="font-semibold select-none">Company:</div>
          {user.company.name}
        </div>
        <div>
          <div className="font-semibold select-none">Zip Code:</div>
          {user.address.zipcode}
        </div>
        <div>
          <div className="font-semibold select-none">City:</div>
          {user.address.city}
        </div>
      </div>
    </div>
  );
};

export default Modal;
