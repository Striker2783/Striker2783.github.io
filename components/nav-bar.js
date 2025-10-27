class NavigationBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav>
    <h1>
      <a href="/">
        Owen Kemp's Portfolio
      </a>
    </h1>
  </nav>`;
  }
}

customElements.define("nav-bar", NavigationBar);
