import React from 'react';

const Card = ({ updateCard, flipped, matched, icon, index }) => {

  return(

  <div 
    onClick={() => updateCard(index, flipped = !flipped )}
    className='col-xs-3 text-center' 
    style={{ height: '300px', border: '1px solid black'}}
  >
   
   {

   }
   {/*show icon if flipped or matched*/}
{ flipped ?  <i className={`fa ${icon} fa-5x`} /> : <i /> }
{ matched ? <i className={`fa ${icon} fa-5x`} /> : <i /> }
   {/*do not show icon if not flipped or matched*/}

   {/*do not allow user to click on card again if flipped or matched*/}
  </div>
  );
}

export default Card;