import React from "react";

const ClientDetails = ({clientName,clientAddress}) => {
  return (
    <>
      <section className="mt-5">
        <span className="font-bold" >Bill to:</span>
        <h3 className="text-xl capitalize ">{clientName}</h3>
        <div>
          <p>{clientAddress}</p>
        </div>
      </section>
    </>
  );
};

export default ClientDetails;
