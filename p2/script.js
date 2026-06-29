let adminProfile = {};

Object.defineProperties(adminProfile, {
  role: {
    value: "SuperAdmin",
    writable: false,
    configurable: false,
    enumerable: true,
  },

  department: {
    value: "IT",
    writable: true,
    configurable: true,
    enumerable: false,
  },
});

adminProfile.accessLevel = 1;

let ul = document.getElementById("badge-list");

let dataArr = Object.entries(adminProfile);

dataArr.forEach((data) => {
  let li = document.createElement("li");

  li.textContent = `Key: ${data[0]}, Value: ${data[1]} \n`;
  ul.append(li);
});
