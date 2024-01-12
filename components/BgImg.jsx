import React from 'react';

const BgImg = () => {

    console.log("BgImg component rendered"); // to be reviewed

  return (
    <div
      className="bg-cover bg-center z-[-1]"
      style={{ backgroundImage: "url(bg1.png)" }}
    >
    </div>
  );
};

export default BgImg;


    
    /* bg-[url(/bg1.png)] */ 