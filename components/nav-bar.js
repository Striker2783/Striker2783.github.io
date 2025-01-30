class NavigationBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav>
    <h1>
      <a href="/">
        Striker2783's Portfolio
      </a>
    </h1>
  </nav>`;
  }
}

customElements.define("nav-bar", NavigationBar);
