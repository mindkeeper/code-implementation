const fazzFood = (price, voucher, distance, tax) => {
  if (!price || typeof price !== "number") return "Input price Invalid";
  if (!(voucher === null || typeof voucher === "string"))
    // masi bingung apakah input boleh null jika user tidak input voucher.
    return "Input Voucher Invalid"; //apakah default value untuk voucher adalah string kosong atau null
  if (distance <= 0 || typeof distance !== "number")
    return "Input distance invalid";
  if (typeof tax !== "boolean") return "Input tax invalid";

  //inisialisasi variabel
  let discount, taxCost, shipmentCost, subtotal;

  //perhitungan diskon
  if (!voucher) discount = 0;
  else if (voucher.toUpperCase() === "FAZZFOOD50" && price >= 50000) {
    discount = price * 0.5;
    if (discount > 50000) discount = 50000;
  } else if (voucher.toUpperCase() === "DITRAKTIR60" && price >= 25000) {
    discount = price * 0.6;
    if (discount > 60000) discount = 30000;
  }

  //perhitungan tax
  if (!tax) taxCost = 0;
  else taxCost = price * 0.05;

  // perhitungan ongkir
  shipmentCost = distance <= 2 ? 5000 : Math.round(distance) * 3000 - 1000;
  subtotal = price - discount + tax + shipmentCost;

  return `Harga: ${price}
Potongan: ${discount}
Biaya Antar: ${shipmentCost}
Pajak: ${taxCost}
Subtotal: ${subtotal}`;
};

console.log(fazzFood(1, null, 5.1, false));
