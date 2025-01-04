import "./App.css";
import carImage from "./assets/car_image.jpg";

function App() {
  return (
    <main>
      <header>
        <a href="/" className="logo">
          MyBlog
        </a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <div className="post">
        <div className="imageBox">
          <img src={carImage} alt="" />
        </div>
        <div className="text">
          <h2>Full-house battery backup coming later this year</h2>
          <p className="info">
            <a className="author">Rajesh</a>
            <time>2024-01-05 19:40</time>
          </p>
          <p className="description">
            Founded in 1937, Volkswagen is a German automaker that has gained a
            reputation for building some of the most iconic cars in the world
          </p>
        </div>
      </div>
      <div className="post">
        <div className="imageBox">
          <img src={carImage} alt="" />
        </div>
        <div className="text">
          <h2>Full-house battery backup coming later this year</h2>
          <p className="info">
            <a className="author">Rajesh</a>
            <time>2024-01-05 19:40</time>
          </p>
          <p className="description">
            Founded in 1937, Volkswagen is a German automaker that has gained a
            reputation for building some of the most iconic cars in the world
          </p>
        </div>
      </div>
      <div className="post">
        <div className="imageBox">
          <img src={carImage} alt="" />
        </div>
        <div className="text">
          <h2>Full-house battery backup coming later this year</h2>
          <p className="info">
            <a className="author">Rajesh</a>
            <time>2024-01-05 19:40</time>
          </p>
          <p className="description">
            Founded in 1937, Volkswagen is a German automaker that has gained a
            reputation for building some of the most iconic cars in the world
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
