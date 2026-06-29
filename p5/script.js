function ToastNotification(message) {
  this.message = message;
  this.div = document.createElement("div");
  this.div.textContent = this.message;
}

ToastNotification.prototype.show = function () {
  let self = this;
  document.body.append(self.div);
  setTimeout(function () {
    self.div.remove();
  }, 3000);
};

let a = new ToastNotification("Action Successful");

a.show();
