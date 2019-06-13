import React from "react";

export function NoviProzor(props) {
  
  console.log("Uspješno pozvan prozor Popup")

  const { handlaj } = props;

  //return <div>Da li je to vaš konačan odgovor ili ćeš me još zajebavati!</div>;

  return (
    <div className='popup'>
        <div className='popup_inner'>
          <h1>Danijel</h1>
        <button>close me</button>
        </div>
      </div>
    );
  }




