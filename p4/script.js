let a = document.getElementById("summary-card");

const booking = {
  id: 101,
  customer: {
    details: { name: "Alice" },
    contact: { phone: 7439878813 },
  },
  discountCode: 123,
};

let phNum = booking?.customer?.contact?.phone ?? "No Phone Provided";

let code = "discountCode" in booking;

let p = document.createElement("p");

p.textContent = `Phone: ${phNum} | Discount Applied: ${code}`;

a.append(p);
