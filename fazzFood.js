const fazzFood = (price, voucher, distance, tax) => {
  if (!price || typeof price !== "number") return "Input price Invalid";
  if (!(voucher === null || typeof voucher === "string"))
    return "Input Voucher Invalid";
  if (!distance || typeof distance !== "number")
    return "Input distance invalid";
  if (typeof tax !== "boolean") return "Input tax invalid";

  //inisialisasi variabel
  let discount = 0,
    taxCost = 0,
    shipmentCost = 0,
    subtotal = 0;

  //perhitungan diskon
  if (!voucher) discount = 0;
  if (voucher.toUpperCase() === "FAZZFOOD50") {
    discount = price * 0.5;
    if (discount > 50000) discount = 50000;
  }
  if (voucher.toUpperCase() === "FAZZFOOD60") {
    discount = price * 0.6;
    if (discount > 60000) discount = 60000;
  }

  //perhitungan tax
  if (!tax) taxCost = 0;
  taxCost = price * 0.05;

  // perhitungan ongkir
  shipmentCost = distance <= 2 ? 5000 : (distance - 2) * 3000 + 5000;
  subtotal = price - discount + tax + shipmentCost;

  return `Harga: ${price}
  Potongan: ${discount}
  Biaya Antar: ${shipmentCost}
  Pajak: ${taxCost}
  Subtotal: ${subtotal}`;
};

console.log(fazzFood(50000, "fazzfood50", 5, true));
