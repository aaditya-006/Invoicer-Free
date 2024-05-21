import React from "react";

const Dates = ({invoiceNumber,invoiceDate, dueDate}) => {
  return (
    <>
      <article className="my-5 flex justify-end align-right">
        <ul>
          <li>Invoice number: {invoiceNumber}</li>
          <li>Invoice date: {invoiceDate}</li>
          <li>Due date: {dueDate}</li>
        </ul>
      </article>
    </>
  );
};

export default Dates;
