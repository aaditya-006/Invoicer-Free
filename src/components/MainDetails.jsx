import React from "react";

const MainDetails = ({name, address}) => {
  return (
    <>
      <section className="flex flex-col justify-end items-end mt-10">
        <h3 className="text-xl capitalize font-bold md:text-2xl">{name}</h3>
        <div>
          <p className="">{address}</p>
        </div>
      </section>
    </>
  );
};

export default MainDetails;
