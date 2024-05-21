import React from "react";
import { FaPrint } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

const Header = ({ handlePrint }) => {
  return (
    <>
        <div className="flex text-center justify-between">
          <h2 className="text-2xl md:text-4xl md:mb-3 font-bold underline ">
            Invoice
          </h2>
          <div>
            <ul className="flex item-center justify-between flex-wrap gap-1">
              <li className="flex flex-row gap-2 item-center text-primary align-middle">
                <button className="btn btn-print flex flex-row gap-3 px-4 py-2 font-bold bg-fourth rounded-lg" onClick={handlePrint}>
                <FaPrint />
                </button>
              </li>
              <li className="flex flex-row gap-2  item-center align-middle">
                <button className="btn btn-print flex flex-row gap-3 text-primary px-4 py-2 font-bold bg-fourth rounded-lg" onClick={handlePrint}>
                <FaShareAlt/>
                </button>
              </li>
              
            </ul>
          </div>
        </div>
    </>
  );
};

export default Header;
