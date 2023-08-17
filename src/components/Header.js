import header from '../header.jpg';

function Header() {
  return (
    <div>
      <header style={{height: "100px", backgroundImage: `url(${header})`}}>
        {/* <img src={header}/> */}
      </header>
        <a
          
          href="./cards"
          target="_self"
          rel="noopener noreferrer"
        >
          Go To Card Game
        </a>
    </div>
  );
}

export default Header;
