class LikeComponent {
  constructor(id) {
    this.btn = document.getElementById(id);
    this.likes = 0;
    this.btn.addEventListener("click", this.registerClick.bind(this));
  }

  registerClick() {
    this.likes++;
    this.btn.innerText = `Like(${this.likes})`;
  }
}

let a = new LikeComponent("likeBtn");
