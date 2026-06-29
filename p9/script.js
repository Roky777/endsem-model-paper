class LiveTicker {
  constructor(containerId) {
    let container = document.getElementById(containerId);
    this.tickerNode = document.createElement("span");
    container.appendChild(this.tickerNode);
    this.intervalId = setInterval(() => {
      this.tickerNode.innerText =
        "Stock Price: $" + (Math.random() * 100).toFixed(2);
    }, 1000);
  }

  destroy() {
    clearInterval(this.intervalId);
    this.tickerNode.remove();
    this.tickerNode = null;
  }
}
const ticker = new LiveTicker("ticker-container");
document.getElementById("stopBtn").addEventListener("click", function () {
  ticker.destroy();
});
