import { useState,useRef } from "react";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import Table from "./components/Table";
import MainDetails from "./components/MainDetails";
import ClientDetails from "./components/ClientDetails";
import Header from "./components/Header";
import Dates from "./components/Dates";
import TableForm from "./components/TableForm";
import "./index.css";
import ReactToPrint from "react-to-print";

// name, address, invoice number, invoice date, due date, table with items, total amount, notes

function App() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [items, setItems] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="flex flex-col title text-center font-raleway md:my-5 py-2">
        <h1 className="text-center text-4xl font-bold italic text-fourth p-2">
          Free Invoice Generator
        </h1>
        <span className="text-text mt-4">
          Create an invoice for free without any login.
        </span>
        <span className="text-text">
          Instantly generate attractive invoice for your clients with our
          ready-to-download editable invoice template
        </span>
        <span className="text-text text-xl font-bold mt-4">
          Developed by : Aaditya & Divya
        </span>
      </div>
      <hr className="text-fourth" />
      <main className=" border px-6 p-5 md:p-5 m-10 md:w-1/2 w-full mx-auto bg-third text-text font-raleway rounded shadow-2xl">
        {showInvoice ? (
          <>
            <Header handlePrint={handlePrint} />
            <MainDetails name={name} address={address} />
            <div className="flex flex-row justify-between">
              <ClientDetails
                clientName={clientName}
                clientAddress={clientAddress}
              />
              <Dates
                invoiceNumber={invoiceNumber}
                invoiceDate={invoiceDate}
                dueDate={dueDate}
              />
            </div>
            <Table list={list} total={total} setTotal={setTotal}/>
            <Footer />
            <button
              className="md:w-1/4 text-black font-bold p-1 mt-5 rounded bg-fourth hover:bg-secondary hover:text-white border border-black transition ease-in-out"
              onClick={() => setShowInvoice(false)}
            >
              Edit Information
            </button>
          </>
        ) : (
          <div className="">
            <div className="flex flex-col justify-center ">
              <article className="md:grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label htmlFor="Name">Business name</label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Enter Name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="Address">Business Address</label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Enter Address"
                    autoComplete="off"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label htmlFor="Client Name">Client Name</label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Enter Client Name"
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="Client Address">Client Address</label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Enter Client Address"
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-2 pt-3">
                <div className="flex flex-col">
                  <label htmlFor="Invoice Number">Invoice Number</label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Invoice Number"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="Invoice Date">Invoice Date</label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="Due Date">Due Date</label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              </article>

              {/* Table form for invoicing items */}

              <article>
                <TableForm
                  items={items}
                  setItems={setItems}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  price={price}
                  setPrice={setPrice}
                  amount={amount}
                  setAmount={setAmount}
                  list={list}
                  setList={setList}
                  total={total}
                  setTotal={setTotal}
                />
              </article>

              <label htmlFor="Notes">Notes</label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="Enter Notes"
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
              <button
                className="lg:w-1/4 mx-auto text-black font-bold p-2 mt-5 rounded bg-fourth hover:bg-primary hover:text-text transition ease-in-out"
                onClick={() => setShowInvoice(true)}
              >
                Show Invoice
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
