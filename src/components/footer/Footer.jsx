import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <div className="logo">
            <img src="../assets/img/logo.png" alt="" />

            <p>You can reach us through: </p>
          </div>
          <i className="fa fa-envelope"></i>
          <span> bridoh707@gmail.com </span> <br />
          <i className="fa fa-headphones"></i>
          <span> +233 243903271</span>
        </div>
      </div>

      <div className="legal">
        <p><i className='fa fa-copyright' />
          AMEST INC - GHANA
        </p>
      </div>
    </>
  );
}

export default Footer;
