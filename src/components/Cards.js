
import Header from './Header';
import Footer from './Footer';
import Card from './Card';

function Cards(props) {

  var values = [];

  return (
      <div>
          <div style={{overflow: "auto", paddingBottom: "30px"}}>
              
              <div className='cards_body'>
              <Card color='red' value={get_random(values)} shape={props.shape} flipped={random_flip()}/>
              <Card color='white' value={get_random(values)} shape={props.shape} flipped={random_flip()}/>
              <Card color='blue' value={get_random(values)} shape={props.shape} flipped={random_flip()}/>
              <Card color='green' value={get_random(values)} shape={props.shape} flipped={random_flip()}/>

              </div>
              <div className='cards_body'>
              <Card color='purple' value={get_random(values)} shape={props.shape} flipped={random_flip()}/>
              <Card color='pink' value={get_random(values)} shape={props.shape} flipped={random_flip()}/>
              <Card color='lightblue' value={get_random(values)} shape={props.shape} flipped={random_flip()}/>
              <Card color='lightgreen' value={get_random(values)} shape={props.shape} flipped={random_flip()}/>

              </div>

          </div>
      </div>
  );

}


function get_random(values){
  let x;
  do {
      x =  Math.floor((Math.random() * 8) + 1);
  }
  while (values.includes(x))

  values.push(x);
  
  return x;
}

function random_flip(){

  let x = Math.floor((Math.random() * 2));

  console.log("flip" + x); 
  return x;
}
  export default Cards;