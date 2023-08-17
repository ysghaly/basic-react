import Deck from '../components/Deck';
import Footer from '../components/Footer';

function Game(){
    return (
        <div>
        <a
          
          href="/"
          target="_self"
          rel="noopener noreferrer"
        >
          Go Home
        </a>
            <h1>Click to Flip Cards</h1>
            <div style={{overflow: "auto", paddingBottom: "30px"}}>
                
                <Deck />

            </div>
            <Footer />
        </div>
    );
}

export default Game;