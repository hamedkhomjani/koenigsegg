import './App.css';

function App() {
  return (
    <div className="container" id="container">
      <div className="navbar" id="navbar">
        <div className="navlinks" id="navlinks">
          <a href="#">HOME</a>
          <a href="#">GALLRY</a>
          <a href="#">ABOUT</a>
        </div>
        <div className="logo" id="logo">
          <img src="assets/iconsandlogos/Koenigsegg_symbol.svg" alt="Koenigsegg Symbol"/>
        </div>
        <div className="navlinks2" id="navlinks2">
          <a href="#">DESIGN</a>
          <a href="#">PERFORMANCE</a>
          <a href="#">CONTACT</a>
        </div>
      </div>
      <div className="sideImg" id="sideImg">
        <img src="/assets/images/koenigsegggemera-removebg-preview.png" alt="Koenigsegg Gemera"/>
      </div>
      <div className="content" id="content">
        <h1>KOENIGSEGG GEMERA</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia velit ad possimus maiores nemo perspiciatis cumque beatae. Accusamus dolore, assumenda molestiae nobis voluptatum maiores deleniti quisquam sequi sunt repudiandae voluptatem!</p>
        <button>EXPLORE</button>
        <img src="" alt=""/>
      </div>
    </div>
  );
}

export default App;
