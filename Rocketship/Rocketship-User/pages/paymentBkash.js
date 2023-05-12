import React from "react";
import Consult from "./consult";
import EnrollForm from "../components/admin/forms/EnrollForm";

const PaymentBkash = () => {
  const handlePayment = () => {
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        Authorization: "auth",
        "X-APP-Key": "4f6o0cjiki2rfm34kfdadl1eqq",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        amount: "100",
        currency: "BDT",
        intent: "sale",
        merchantInvoiceNumber: "INV-12345",
        merchantAssociationInfo: "My Business",
      }),
    };

    fetch(
      "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/create",
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  return (
    <div className="xl:max-w-screen-lg mx-auto grid grid-cols-1 justify-items-center content-center mb-20 pt-28">
      <div>
        <button
          onClick={handlePayment}
          className="hover:text-[#211A56] hover:bg-white border-2 border-[#E2136E] mr-4 rounded-tl-3xl rounded-br-3xl hover:shadow-red-500 hover:shadow-2xl bg-[#E2136E] w-full py-3 text-white"
        >
          Pay with bKash
        </button>
      </div>

      {/* <Consult />
      <EnrollForm />
      <h1 className="text-xl font-bold">
        Here is the bkash merchant number :{" "}
        <span className="text-4xl text-[#F13841]">01624435633</span>
      </h1>
      <p className="text-xl font-bold">Please payment</p> */}
    </div>
  );
};

export default PaymentBkash;
