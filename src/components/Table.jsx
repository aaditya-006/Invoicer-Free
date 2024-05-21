import React from "react";

const Table = ({list,sum
}) => {
  // funtion to calculate the total amount
  const total = list.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <>
      <table className="w-full mt-4 rounded-sm">
      <thead>
        <tr className="border">
          <th className="py-2 px-4 bg-primary">Items</th>
          <th className="py-2 px-4 bg-primary">Quantity</th>
          <th className="py-2 px-4 bg-primary">Price</th>
          <th className="py-2 px-4 bg-primary">Amount</th>
        </tr>
      </thead>
      <tbody>
        {list.map(({ id, items, quantity, price, amount }) => (
          <tr key={id} className="border text-center">
            <td className="py-2 px-4">{items}</td>
            <td className="py-2 px-4">{quantity}</td>
            <td className="py-2 px-4">{price}</td>
            <td className="py-2 px-4 amount">{amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
    {/* section to display totol amount */}
    <div className="flex justify-end mt-5">
      <p className="text-xl font-bold">Total: {total}</p>
    </div>
    </>
  );
};

export default Table;
