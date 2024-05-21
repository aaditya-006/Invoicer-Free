import React, { useEffect,useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const TableForm = ({
  items,
  setItems,
  quantity,
  setQuantity,
  price,
  setPrice,
  amount,
  setAmount,
  list,
  setList
}) => {
  const [isediting, setIsEditing] = useState(false);

  //Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: uuidv4(),
      items,
      quantity,
      price,
      amount,
    };
    setItems("");
    setQuantity("");
    setPrice("");
    setAmount("");
    setList([...list, newItem]);
  };

  //Function to calculate the items amount
  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * price);
    };
    calculateAmount(amount);
  }, [amount, quantity, price, setAmount]);

  //Edit function to edit the items
  const handleEdit = (id) => { 
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setItems(specificItem.items);
    setQuantity(specificItem.quantity);
    setPrice(specificItem.price);
    setAmount(specificItem.amount);
    setList(list.filter((item) => item.id !== id));
  };

  //Delete function to delete the items
  const handleDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  //calculate the total amount
  let row = document.querySelectorAll(".amount");
  let total = 0;
  row.forEach((element) => {
    total += parseFloat(element.textContent);
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-4 gap-2 my-10">
          <div className="flex flex-col">
            <label htmlFor="description">Items detail</label>
            <input
            required
              type="text"
              name="items"
              id="items"
              value={items}
              onChange={(e) => setItems(e.target.value)}
              placeholder="Enter description"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="description">Quantity</label>
            <input
              required
              type="number"
              name="Quantity"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Enter Quantity"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="description">Price</label>
            <input
            required
              type="number"
              name="price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter Price"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="description">Amount</label>
            <p className="p-2 w-full mt-2 font-bold text-xl bg-secondary border text-white rounded-md">
              {amount}
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="lg:w-1/2 mx-auto text-black font-bold p-2 rounded bg-fourth hover:bg-primary 
    hover:border hover:text-text transition ease-in-out"
        >
          Add Item
        </button>
      </form>
      {/* Table Items */}
      <table className="w-full mt-4 rounded-sm">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-primary">Items</th>
            <th className="py-2 px-4 bg-primary">Quantity</th>
            <th className="py-2 px-4 bg-primary">Price</th>
            <th className="py-2 px-4 bg-primary">Amount</th>
            <th className="py-2 px-4 bg-primary">Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map(({ id, items, quantity, price, amount }) => (
            <tr key={id} className="border-b">
              <td className="py-2 px-4">{items}</td>
              <td className="py-2 px-4">{quantity}</td>
              <td className="py-2 px-4">{price}</td>
              <td className="py-2 px-4 amount">{amount}</td>
              <td className="py-2 px-4 text-xl flex gap-2">
                <button className="text-red-700" onClick={() => handleDelete(id)}>
                  <MdDelete />
                </button>
                <button className="text-green-700" onClick={() => handleEdit(id)}>
                  <FaEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Section to display total amount*/}
      <div className="flex justify-end">
        <h2 className="text-xl font-bold mt-5">Total Amount: Rs. {total}</h2>
      </div>
    </>
  );
};

export default TableForm;
