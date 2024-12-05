import React from "react";
import user from "../Images/user.png";
import { FaEdit, FaPhone } from "react-icons/fa";

const ContactCard = (props) => {
  const { id, name, email, phone } = props.contact;

  return (
    <div className="item" style={styles.card}>
      <img className="ui avatar image" src={user} alt="user" style={styles.avatar} />
      <div className="content">
        <div className="header" style={styles.name}>{name}</div>
        <div style={styles.email}>{email}</div>
        <div style={styles.phone}>{phone}</div>
      </div>
      <div style={styles.icons}>
        <FaPhone style={{ ...styles.icon, color: "green" }} />
        <FaEdit style={{ ...styles.icon, color: "blue" }} />
        <i
          className="trash alternate outline icon"
          style={{ ...styles.icon, color: "red" }}
          onClick={() => props.clickHander(id)}
        ></i>
      </div>
    </div>
  );
};

const styles = {
  phone: { color: "#555", marginTop: "5px" },
  // Other styles remain unchanged...
};

export default ContactCard;
