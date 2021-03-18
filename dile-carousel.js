import { LitElement, html, css } from "lit-element";

class DileCarousel extends LitElement {
  static get properties() {
    return { prop: Boolean };
  }

  static get styles() {
    return css`...`;
  }

  render() {
    return html`template`;
  }
}

customElements.define("dile-carousel", DileCarousel);
