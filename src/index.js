import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

class ReactMicroFrontend extends HTMLElement {
  static get observedAttributes() {
    return ['message']; // Observe 'message' attribute
  }

  connectedCallback() {
    this.root = createRoot(this);
    const message = this.getAttribute('message');
    console.log("vLUE is",message)
    this.renderReactApp(message); // Initial render with attribute value
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'message' && oldValue !== newValue) {
      this.renderReactApp(newValue); // Re-render when attribute changes
    }
  }

  renderReactApp(message) {
    this.root.render(<App message={message} />);
  }

  disconnectedCallback() {
    this.root.unmount();
  }
}

customElements.define('react-micro-frontend', ReactMicroFrontend);
