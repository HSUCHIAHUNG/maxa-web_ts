import React from 'react';

const Header: React.FC<{title?: string}> = (props) => {
  return <div>{props.title}</div>;
}

export default Header;
