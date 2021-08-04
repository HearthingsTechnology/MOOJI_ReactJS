import './App.css';


function App() {
  return (
    <div class="container">
      <nav className="menu">
        <ul>
          <li><a href="#">home</a></li>
          <li><a href="#portifolio">portifólio</a></li>
          <li><a href="#sobre">sobre</a></li>
          <li><a href="#quemsomos">quem somos?</a></li>
          <li><a href="#contato">contato</a></li>
        </ul>
      </nav>

      <article>
        <section id="home"><h1>home</h1></section>
        <section id="portifolio"><h1>portifólio</h1></section>
        <section id="sobre"><h1>sobre</h1></section>
        <section id="quemsomos"><h1>quem somos?</h1></section>
        <section id="contato"><h1>contato</h1></section>
      </article>
      <div></div>
    </div>
  );
}

export default App;
