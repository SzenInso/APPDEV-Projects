import React from 'react';

function Footer(){
  const year = new Date().getFullYear();
  return (
    <footer>
    <center>
      <h5>
        Fhrenne Szen D. Inso - October 28, {year}
      </h5>
    </center>
    </footer>
  );
};

export default Footer;
