
function Card_Symbol(props) {

    var shape = (<p>empty</p>);
    if (props.shape == "heart"){
        shape = (<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="black" class="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>);

    }

    else if (props.shape == "spade"){
        shape = (<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-suit-spade-fill" viewBox="0 0 16 16">
                    <path d="M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 19.92 19.92 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 0 0 1.582-2.907z"/>
                </svg>);
    }

    else if (props.shape == "diamond"){
        shape = (<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
                    <path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z"/>
                </svg>);
    }

    else if (props.shape == "clubs"){
        shape = (<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-suit-club-fill" viewBox="0 0 16 16">
                    <path d="M11.5 12.5a3.493 3.493 0 0 1-2.684-1.254 19.92 19.92 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 0 0 1.582-2.907 3.5 3.5 0 1 1-2.538-5.743 3.5 3.5 0 1 1 6.708 0A3.5 3.5 0 1 1 11.5 12.5z"/>
                </svg>);
    }
    return (
        shape
    );
}
  
  export default Card_Symbol;
  