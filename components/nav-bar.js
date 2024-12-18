class NavigationBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav>
        <a class="big-header header" href="/">Striker2783's Portfolio</a>
    </nav>
    `;
  }
}

customElements.define("nav-bar", NavigationBar);
