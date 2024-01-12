import React from 'react';
// import IMG from '../../public/bg1.png';

const BgImg = () => {

    console.log("BgImg component rendered"); // to be reviewed

  return (
    <div
      className=" bg-cover bg-center h-full z-[-1] bg-[url('/bg1.png')]" 

    >
    </div>
  );
};

export default BgImg;


    
    /* bg-[url(/bg1.png)] */ 

    // style={{backgroundImage: "url(" + Background + ")"}}