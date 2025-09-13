import { render } from "solid-js/web";

function App() {
  return (
    <>
      <style>{`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
        }

        a {
          -webkit-tap-highlight-color: transparent;
        }

        html {
          scroll-behavior: smooth;
          scrollbar-width: thin;
          scrollbar-color: transparent transparent;
        }

        body {
          height: 100vh;
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          place-content: center;
          background-color: #dcd9d4;
          background-image: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.5) 0%,
              rgba(0, 0, 0, 0.5) 100%
            ),
            radial-gradient(
              at 50% 0%,
              rgba(255, 255, 255, 0.1) 0%,
              rgba(0, 0, 0, 0.5) 50%
            );
          background-blend-mode: soft-light, screen;
        }

        .spider {
          height: 66px;
          width: calc(576px / 9);
          background-repeat: no-repeat;
          background-image: url('assets/spider.png');
          animation: mover 1s steps(9) infinite;
          background-position: 0 0;
          transform: scale(2);
        }

        @keyframes mover {
          0% {
            background-position: 0 -3px;
          }
          100% {
            background-position: calc(-9 * calc(576px / 9)) -3px;
          }
        }
      `}</style>
      <div class="spider"></div>
    </>
  );
}

const root = document.createElement("div");
document.body.appendChild(root);
render(() => <App />, root);
