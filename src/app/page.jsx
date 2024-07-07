"use client";
import { useState } from "react";
import Image from "next/image";
import calculate from "@/utils/calculate";

export default function Home() {
  const [adSpent, setAdSpent] = useState(0);
  const [sellingPrice, setSellingPrice] = useState(0);
  const [rtoPercentage, setRtoPercentage] = useState(0);
  const [rtoCharge, setRtoCharge] = useState(0);
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [productCost, setProductCost] = useState(0);
  const [calculated, setCalculated] = useState(false);
  const [calResult, setCalResult] = useState({});

  function calculateCosts() {
    const result = calculate({
      advertisingSpent: adSpent,
      sellingPrice: sellingPrice,
      rtoPercentage: rtoPercentage,
      rtoCharge: rtoCharge,
      orderQuantity: orderQuantity,
      productCost: productCost,
    });
    setCalResult(result);
    setCalculated(true);

    // setAdSpent(0);
    // setSellingPrice(0);
    // setRtoPercentage(0)
    // setRtoCharge(0);
    // setOrderQuantity(0);
    // setProductCost(0)
  }

  return (
    <main className="w-full min-h-screen bg-slate-950 p-6">
      <nav className="flex justify-between items-center">
        <Image src="/logo.webp" width={60} height={60} />
      </nav>
      <div className="grid-cols-1 md:grid-cols-2 grid w-full mt-10 gap-5">
        <div className="col-span-1 w-full min-h-80 py-4 border border-slate-600 p-4 flex justify-center gap-5 flex-wrap text-white">
          <input
            type="number"
            placeholder="ADVERTISING SPENT"
            className="input input-bordered md:w-[40%] bg-transparent border-zinc-600 w-full max-w-xs"
            onChange={(e) => setAdSpent(parseFloat(e.target.value))}
          />

          <input
            type="number"
            placeholder="SELLING PRICE"
            className="input input-bordered md:w-[40%] bg-transparent border-zinc-600 w-full max-w-xs"
            onChange={(e) => setSellingPrice(parseFloat(e.target.value))}
          />
          <input
            type="number"
            placeholder="RTO %"
            className="input input-bordered md:w-[40%] bg-transparent border-zinc-600 w-full max-w-xs"
            onChange={(e) => setRtoPercentage(parseFloat(e.target.value))}
          />
          <input
            type="number"
            placeholder="RTO CHARGE"
            className="input input-bordered md:w-[40%] bg-transparent border-zinc-600 w-full max-w-xs"
            onChange={(e) => setRtoCharge(parseFloat(e.target.value))}
          />
          <input
            type="number"
            placeholder="ORDER QUANTITY"
            className="input input-bordered md:w-[40%] bg-transparent border-zinc-600 w-full max-w-xs"
            onChange={(e) => setOrderQuantity(parseFloat(e.target.value))}
          />
          <input
            type="number"
            placeholder="PRODUCT COST"
            className="input input-bordered md:w-[40%] bg-transparent border-zinc-600 w-full max-w-xs"
            onChange={(e) => setProductCost(parseFloat(e.target.value))}
          />
          <button className="btn" onClick={calculateCosts}>
            CALCULATE
          </button>
        </div>

        <div
          className={`col-span-1 border border-slate-600 w-full min-h-80 p-5 ${
            calculated && "flex justify-center items-center"
          }`}
        >
          {!calculated ? (
            <h1 className="text-slate-400">Calculate something...</h1>
          ) : (
            <div className="text-slate-400 flex flex-col gap-5 uppercase w-full h-full relative">
              <p>Cost Per Result : {calResult.costPerResult}</p>
              <p>Total RTO Cost : {calResult.totalRtoCost}</p>
              <p>Total ADs Cost : {calResult.totalAdsCost}</p>
              <p>Product Cost : {calResult.totalProductCost}</p>
              <p>Net Profit Margin : {calResult.netProfitMargin}</p>
              <div className="absolute bottom-0 left-0">
                {calResult.profitOrLoss ? (
                  <h2 className="text-green-700 font-semibold">
                    Profit: {calResult?.netProfit}
                  </h2>
                ) : (
                  <h2 className="text-red-700 font-semibold">
                    Loss: {calResult?.netProfit}
                  </h2>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
