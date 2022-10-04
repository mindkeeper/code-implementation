const fazzFood = (price, voucher, distance, tax) => {
  if (!price || typeof price !== "number") return "Input price Invalid";
  if (!(voucher === null || typeof voucher === "string"))
    // masi bingung apakah input boleh null jika user tidak input voucher. sudah terjawab : asumsikan seperti ini
    return "Input Voucher Invalid"; //apakah default value untuk voucher adalah string kosong atau null
  if (distance <= 0 || typeof distance !== "number")
    return "Input distance invalid";
  if (typeof tax !== "boolean") return "Input tax invalid"; // diflowchart harusnya ke end aja gausah input ulang

  //inisialisasi variabel
  let discount = 0,
    taxCost = 0, // langsung aja taxCost = 0
    shipmentCost = 5000; //inisialisasi aja shipmentCost = 5000, baiknya semua variabel yang mau digunakan kasi value sesuai tipe datanya aja

  //perhitungan diskon
  if (voucher) {
    if (voucher.toUpperCase() === "FAZZFOOD50" && price >= 50000) {
      discount = price * 0.5;
      if (discount > 50000) discount = 50000;
    }
    if (voucher.toUpperCase() === "DITRAKTIR60" && price >= 25000) {
      discount = price * 0.6;
      if (discount > 30000) discount = 30000; //kondisi maximum diskonnya kenapa ga di ubah
    }
  }
  // pengecekan voucher apakah lebih baik jika dia ngecek ke object? penggunaan object diflowchart bagaimana?

  //perhitungan tax
  if (tax) taxCost = price * 0.05;

  // perhitungan ongkir
  shipmentCost = distance <= 2 ? 5000 : Math.round(distance) * 3000 - 1000;
  console.log(shipmentCost);
  let subtotal = price - discount + taxCost + shipmentCost;

  return `Harga: ${price}
Potongan: ${discount}
Biaya Antar: ${shipmentCost}
Pajak: ${taxCost}
Subtotal: ${subtotal}`;
};

console.log(fazzFood(50000, null, 5.5, true));
