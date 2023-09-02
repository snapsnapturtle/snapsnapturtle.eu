import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: rgba(10, 2, 25, 1);
    --text-primary: rgba(255, 255, 255, 0.8);
    --text-link: rgba(255, 255, 255, 1);
    --text-secondary: rgba(255, 255, 255, 0.4);
    --font-family: 'Recursive', monospace;
  }

  html {
    -webkit-text-size-adjust: 100%;
  }

  body {
    background-color: var(--background);
    margin: 3rem 1rem 1rem;
    padding: 0;
    color: var(--text-primary);
    font-size: 1rem;
    line-height: 1.4;
    font-family: var(--font-family);
  }

  p {
    margin: 1.5rem 0;
  }

  a,
  a:link,
  a:visited {
    color: var(--text-link);
    text-decoration: none;
    transition: box-shadow 75ms;
    box-shadow: transparent 0 0.1rem 0 0;
  }

  a:hover {
    text-decoration: none;
    box-shadow: var(--text-link) 0 0.1rem 0 0;
  }

  a:active {
    text-decoration: none;
  }

  .whois {
    font-weight: 800;
    font-size: 1.25rem;
  }

  .whois a {
    display: inline-block;
    background: var(--fancy-gradient);
    background-clip: text;
    background-size: 300% auto;
    -webkit-text-fill-color: transparent;
  }

  .whois a:hover {
    box-shadow: none;
    animation: move-gradient 2s linear infinite;
  }

  @media (min-width: 812px) {
    body {
      font-size: 1.2rem;
      line-height: 1.5;
      margin: 5rem;
      max-width: 70ch;
    }

    p {
      margin: 2rem 0;
    }
  }

  @media (min-width: 2560px) {
    body {
      margin: 7.5rem auto;
      max-width: 80ch;
    }
  }

`;
