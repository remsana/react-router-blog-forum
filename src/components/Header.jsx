import React from "react";

function Header(props) {
  return (
    <div>
      <div className="header">
        <h1>React Blog Forum</h1>         
        <h2 className="header2">{props.title}</h2>
      </div>
    </div>
  );
}

export default Header;
