import React from 'react';
import { MdEditDocument } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';

const Item = ({ task }) => {
  const { _id, title, description, date, iscompleted, isimportant } = task;
  console.log(title);
  return (
    <div className="item w-1/3 h-[25vh] p-[0.25rem]">
      <div className="w-full h-full border border-gray-500 rounded-md flex py-3 px-4 flex-col justify-between">
        <div className="upper">
          <h2 className="text-xl font-normal mb-3 relative ">
            <span className="w-full h-[1px] bg-gray-500 absolute bottom-0"></span>
            {title}
          </h2>
          <p>{description}</p>
        </div>
        <div className="lower">
          <p className="text-sm mb-1">{date}</p>
          <div className="item-footer flex justify-between">
            <div className="item-footer-left flex gap-x-2">
              <button className="block py-1 px-4 bg-green-400 text-sm text-white rounded-md">
                Completed
              </button>
              <button className="block py-1 px-4 bg-red-400 text-sm text-white rounded-md">
                Important
              </button>
            </div>
            <div className="item-footer-right flex gap-x-2 items-center">
              <button className="w-5 h-5">
                <MdEditDocument />
              </button>
              <button>
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
