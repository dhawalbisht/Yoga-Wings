import React from 'react';
import cardImage1 from '../assets/images/cards/card-1.png'
import cardImage2 from '../assets/images/cards/card-2.png'
import cardImage3 from '../assets/images/cards/card-3.png'
const Cards = () => {
  return <section>
    <div classname="container mx-auto">
      {/* { cards group  } */}
      <div>
        {/* { card 1} */}
        <div>Card 1</div>
      </div>
      <div>
        {/* { card 2} */}
        <div>Card 2</div>
      </div>
      <div>
        {/* { card 3} */}
        <div>Card 3</div>
      </div>

    </div>
  </section>;
};

export default Cards;