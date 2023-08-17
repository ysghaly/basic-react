import '../css/Card.css';
import Card_Symbol from './Card_Symbol';

function Card(props) {

    const flip_card = (cardEvent) => {
        var card = cardEvent.currentTarget;
        var card_inner = card.firstChild;
        var text = card_inner.firstChild.firstChild;
        card.classList.toggle("card-clicked");
        card_inner.classList.toggle("card-clicked");
        text.classList.toggle("card-clicked");
    }
    var style1;
    var style2;
    if (props.flipped){
        style2="card-front";
        style1="card-back";
    }
    else{
        style1="card-front";
        style2="card-back";
    }
    return (
        <div className="card" onClick={(event) => flip_card(event)}>
            <div className="card-inner">
                <div className={style1}>
                    <h1 style={{marginTop: "40%", width: "100%"}}>Card</h1>
                </div>
                <div className={style2}  style={{background: props.color}}>
                    <p className="top-left">{props.value}</p>
                    <Card_Symbol shape={props.shape}/>
                    <p className="bottom-right">{props.value}</p>
                </div>
            </div>
        </div>
    );

}


export default Card;