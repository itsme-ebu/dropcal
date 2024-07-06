function calculate({
  advertisingSpent,
  sellingPrice,
  rtoPercentage,
  rtoCharge,
  orderQuantity,
  productCost,
}) {
  // Constants
  const GST_RATE = 0.18;
  // Calculations
  const advertisingSpentWithGST = advertisingSpent * (1 + GST_RATE);
  const costPerResult = advertisingSpentWithGST / orderQuantity;
  const rtoQuantity = (rtoPercentage / 100) * orderQuantity;
  const totalRtoCost = rtoQuantity * rtoCharge;
  const totalAdsCost = advertisingSpentWithGST;

  const deliveredQuantity = orderQuantity - rtoQuantity;
  const totalProductCost = deliveredQuantity * productCost;
  const totalRevenue = deliveredQuantity * sellingPrice;
  const netProfit =
    totalRevenue - (totalAdsCost + totalRtoCost + totalProductCost);
  const netProfitMargin = (netProfit / totalRevenue) * 100;
  const profitOrLoss = netProfit >= 0 ? true : false;

  return {
    costPerResult: costPerResult.toFixed(2),
    totalRtoCost: totalRtoCost.toFixed(2),
    totalAdsCost: totalAdsCost.toFixed(2),
    netProfit: netProfit.toFixed(2),
    totalProductCost: totalProductCost.toFixed(2),
    netProfitMargin: netProfitMargin.toFixed(2),
    profitOrLoss: profitOrLoss,
  };
}

export default calculate;
