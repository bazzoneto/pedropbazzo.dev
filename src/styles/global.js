import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: 'GothanRoundedLight';
    src: url("/fonts/GothamRnd-Light.ttf") format("truetype");
  }

  @font-face {
    font-display: swap;
    font-family: 'GothanRoundedBold';
    src: url("/fonts/GothamRnd-Bold.otf") format("opentype");
  }
  
  @font-face {
    font-display: swap;
    font-family: 'GothanRoundedMedium';
    src: url("/fonts/GothamRnd-Medium.ttf") format("truetype");
  }

  body {
    --main-color: #0059a0;
    --gray-color: #f6f3f3;
    --bs-primary: #0059a0;

    border-top: 10px solid var(--highlight);
    background: var(--background);
    line-height: 1;
    font-size: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  body.dark {
    --borders: #38444d;
    --texts: #8899a6;
    --postColor: #fff;
    --highlight: #0059a0;
    --mediumBackground: #0a0c21;
    --background: #030518;
    --white: #fff;
    --black: #222;
  }

  body.light {
    --borders: #dedede;
    --postColor: #111;
    --texts: #555555;
    --highlight: #0059a0;
    --mediumBackground: #f0f0f3;
    --background: #fff;
    --white: #fff;
    --black: #222;
  }

  .gotham-light {
    font-family: "GothanRoundedLight";
  }
  
  .gotham-bold {
    font-family: "GothanRoundedBold";
  }

  .gotham-medium {
    font-family: "GothanRoundedMedium";
  }

  nav {
    button.navbar-toggler {
      border: none;
    }
  }

  nav .link-secondary {
    color: var(--main-color) !important;
    border-bottom: 2px solid transparent;
  }

  nav .link-dark {
    border-bottom: 2px solid transparent;
  }

  nav .link-dark:focus, .link-dark:hover, .link-secondary:focus, .link-secondary:hover {
    color: var(--main-color) !important;
    border-bottom: 2px solid var(--main-color);
  }

  footer nav ul li a {
    color: white !important;
  }

  .btn-primary {
    --bs-btn-bg: var(--main-color);
  }

  .text-bg-primary {
    --bs-text-color: var(--main-color);
  }

  .card:hover {
    transform: translateY(5px);
    transition: all .2s ease-in-out;
  }

  .magic-link {
    color: inherit !important;
    cursor: pointer;
    text-decoration: none !important;
  }

  .shiki-inline {
    background: var(--shiki-inline-background) !important;
    padding: 2px;
    color: var(--shiki-inline-color) !important;
    font-size: 1.1rem;
  }
  
  p > code {
    background: var(--shiki-inline-background) !important;
    padding: 2px;
    color: var(--shiki-inline-color) !important;
    font-size: 0.9rem;
  }
`
export default GlobalStyles
