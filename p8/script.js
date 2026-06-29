function UserNode(username) {
  this.element = document.createElement("li");

  this.element.innerText = username;
}

UserNode.prototype.appendNode = function (ID) {
  this.userlist = document.getElementById(ID);
  this.userlist.append(this.element);
};

function PremiumUser(username) {
  UserNode.call(this, username);
}

PremiumUser.prototype = Object.create(UserNode.prototype);

PremiumUser.prototype.highlight = function () {
  this.element.style.backgroundColor = "gold";
};

let newPremiumUser = new PremiumUser("roky");

newPremiumUser.highlight();
newPremiumUser.appendNode("user-list");

let bob = new UserNode("Bob_Normal");
bob.appendNode("user-list");
