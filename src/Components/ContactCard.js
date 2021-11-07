import React from 'react';
import userImage from '../Images/149071.png';

function ContactCard(props) {
    const {id,name,email} = props.contact;

    return (
      <div className="item" key={id}>
        <img className="ui avatar image" src={userImage} alt="" />
        <div className="content">
          <div className="header">{name}</div>
          <div>{email}</div>
        </div>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px" }}
          onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              props.clickHandler(id);
          }
        }
        ></i>
      </div>
    );
}

export default ContactCard;