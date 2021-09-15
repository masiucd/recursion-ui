import {css, Global} from "@emotion/react"

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        :root {
          /* fonts */
          --nunito: "Nunito Sans", sans-serif;

          /* colors */
          --bg: #fff;
          --bg-2: #191c21;
          --text: #252932;
          --primary: #f5487f;
          --highlight: #2d469f;
          --bg-900: #d3d7da;
          --bg-800: #d7dbdd;
          --bg-700: #dcdfe1;
          --bg-600: #e0e3e5;
          --bg-500: #e5e7e9;
          --bg-400: #e9ebec;
          --bg-300: #edeff0;
          --bg-200: #f2f3f4;
          --bg-100: #f6f7f8;
          /* elevations */
          --sm-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
            0 1px 2px 0 rgba(0, 0, 0, 0.06);
          --md-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
          --lg-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          --xl-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
          --xxl-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          --inner-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
          --none-shadow: 0 0 #0000;
          /* sizes */
          --h1: 3.052rem;
          --h2: 2.441rem;
          --h3: 1.953rem;
          --h4: 1.563rem;
          --h5: 1.25rem;
          --maxWidth: 110rem;
          --header-height: 10rem;
          --footer-height: 10rem;
          /* border-radius */
          --border-radius-s: 3px;
          --border-radius-m: 4px;
          --border-radius-l: 5px;
          --border-radius-xl: 6px;
          --border-radius-2xl: 8px;
        }
        *::before,
        *::after,
        * {
          margin: 0;
          padding: 0;
          box-sizing: inherit;
        }
        html {
          font-size: 100%;
          font-family: var(--nunito);
        }
        body {
          height: 100%;
          box-sizing: border-box;
          font-weight: normal;
          line-height: 1.75;
          color: var(--text);
          background-color: var(--bg);
        }
        h1 {
          font-size: var(--h1);
        }
        h2 {
          font-size: var(--h2);
        }
        h3 {
          font-size: var(--h3);
        }
        h4 {
          font-size: var(--h4);
        }
        h5 {
          font-size: var(--h5);
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin-bottom: 0.5rem;
          font-family: var(--nunito);
          font-weight: normal;
          line-height: 1.5;
        }
        p,
        ul,
        ol {
          line-height: 1.7;
          font-weight: 400;
          list-style: none;
          font-family: var(--nunito);
          margin-bottom: 0.25rem;
        }
        a {
          text-decoration: none;
          color: var(--color-text-text);
        }
      `}
    />
  )
}

export default GlobalStyles
