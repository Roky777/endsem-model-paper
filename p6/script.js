function enforceDesktopView() {
  if (window.innerWidth < 1024) {
    let div = document.createElement("div");
    div.className = "warning";

    div.textContent =
      "Please switch to a desktop device. You will be redirected in 5 seconds.";
    document.body.append(div);
    setTimeout(() => {
      window.location.href = "https://mobile.company.com";
    }, 5000);
  }
}

enforceDesktopView();

console.log(window.innerWidth);
