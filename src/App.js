import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Welcome to My Website</h1>
        <p>A simple site built with React</p>
      </header>
      <main>
        <section>
          <h2>About</h2>
          <p>This is a basic React app with separate CSS styling.</p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>Email: contact@example.com</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 My Website</p>
      </footer>
    </div>
  );
}

export default App;
