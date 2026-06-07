function formatMoney(value) {
  return value.toLocaleString("vi-VN") + "đ";
}

function formatK(value) {
  return `${Math.round(value / 1000)}k`;
}

function calculateRestaurantBill(items, options = {}) {
  const day = options.day || "Monday";
  const tipRate = options.tip ? 0.05 : 0;

  let subtotal = 0;
  let lines = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const lineTotal = item.price * item.quantity;
    subtotal += lineTotal;

    lines.push({
      stt: i + 1,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      lineTotal: lineTotal,
    });
  }

  let discountRate = 0;
  if (subtotal > 1000000) {
    discountRate = 0.15;
  } else if (subtotal > 500000) {
    discountRate = 0.1;
  }

  let discountAmount = subtotal * discountRate;
  let weekdayExtraDiscount = 0;

  if (day === "Wednesday") {
    weekdayExtraDiscount = subtotal * 0.05;
  }

  const totalDiscount = discountAmount + weekdayExtraDiscount;
  const afterDiscount = subtotal - totalDiscount;
  const vat = afterDiscount * 0.08;
  const tip = afterDiscount * tipRate;
  const finalTotal = afterDiscount + vat + tip;

  return {
    day,
    lines,
    subtotal,
    discountRate,
    weekdayExtraDiscount,
    totalDiscount,
    vat,
    tip,
    finalTotal,
  };
}

function printRestaurantBill(items, options = {}) {
  const bill = calculateRestaurantBill(items, options);

  console.log("╔══════════════════════════════════════╗");
  console.log("║        HÓA ĐƠN NHÀ HÀNG             ║");
  console.log("╠══════════════════════════════════════╣");

  for (let i = 0; i < bill.lines.length; i++) {
    const line = bill.lines[i];
    const left = `${line.stt}. ${line.name}`.padEnd(14, " ");
    const qty = `x${line.quantity}`.padEnd(4, " ");
    const unit = `@${formatK(line.price)}`.padEnd(6, " ");
    const total = `= ${formatK(line.lineTotal)}`.padEnd(7, " ");
    console.log(`║ ${left}${qty}${unit}${total.padEnd(20, " ")}║`);
  }

  console.log("╠══════════════════════════════════════╣");
  const discountLabel =
    bill.discountRate > 0 && bill.weekdayExtraDiscount > 0
      ? `${Math.round(bill.discountRate * 100)}% + 5%`
      : `${Math.round(bill.discountRate * 100)}%`;
  console.log(
    `║ Tổng cộng:${" ".repeat(20)}${formatMoney(bill.subtotal).padStart(12, " ")} ║`,
  );
  console.log(
    `║ Giảm giá (${discountLabel}):${" ".repeat(Math.max(0, 18 - discountLabel.length))}${formatMoney(bill.totalDiscount).padStart(12, " ")} ║`,
  );
  console.log(
    `║ VAT (8%):${" ".repeat(22)}${formatMoney(bill.vat).padStart(12, " ")} ║`,
  );
  console.log(
    `║ Tip (${options.tip ? "5%" : "0%"}):${" ".repeat(21)}${formatMoney(bill.tip).padStart(12, " ")} ║`,
  );
  console.log("╠══════════════════════════════════════╣");
  console.log(
    `║ THANH TOÁN:${" ".repeat(18)}${formatMoney(bill.finalTotal).padStart(12, " ")} ║`,
  );
  console.log("╚══════════════════════════════════════╝");
}

const sampleItems = [
  { name: "Phở bò", price: 65000, quantity: 2 },
  { name: "Trà đá", price: 5000, quantity: 3 },
  { name: "Bún chả", price: 55000, quantity: 1 },
];

printRestaurantBill(sampleItems, { day: "Monday", tip: true });

if (typeof module !== "undefined") {
  module.exports = { calculateRestaurantBill, printRestaurantBill };
}
