import Cards from "./Cards";
import Footer from "./Footer";

function Deck(){
    return (
        <div>
                
                <Cards shape="heart"/>
                <Cards shape="clubs"/>
                <Cards shape="spade"/>
                <Cards shape="diamond"/>

            <Footer />
        </div>
    );
}

export default Deck;