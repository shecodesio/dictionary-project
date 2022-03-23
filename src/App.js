import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">
          <img src="./dictionary.png" className="App-logo" alt="logo" />
          <span className="ms-3">DICTIONARY APP</span>
        </header>
        <main>
          <Dictionary defaultKeyword="drone" />
        </main>
        <footer className="text-center">
          This app is coded by Asma Sadiq and{" "}
          <a
            href="https://github.com/Trinh95/Dictionary-App"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;



