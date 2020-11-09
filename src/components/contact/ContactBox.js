import React from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ContactBox = () => {
  return (
    <div className="contactBox">
      <ul>
        <li>
          <i className="fas fa-map-marker-alt"></i>
          <span>Mérignac</span>
        </li>
        <li>
          <i className="fas fa-mobile-alt"></i>
          <CopyToClipboard text="0659084550">
            <span
              className="clickInput"
              onClick={() => {
                alert("Téléphone copié !");
              }}
            >
              06 59 08 45 50
            </span>
          </CopyToClipboard>
        </li>
        <li>
          <i className="far fa-envelope"></i>
          <CopyToClipboard text="julien.azbrg@gmail.com">
            <span
              className="clickInput"
              onClick={() => {
                alert("E-mail copié !");
              }}
            >
              julien.azbrg@gmail.com
            </span>
          </CopyToClipboard>
        </li>
      </ul>
    </div>
  );
};

export default ContactBox;
