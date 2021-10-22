import React from 'react';

interface Props {
}

const Header: React.FC<Props> = (): JSX.Element => (
  <div className="logo">
    <span data-letter="x"></span>
    <span data-letter="t"></span>
    <span data-letter="r"></span>
    <span data-letter="a"></span>
    <span data-letter="v"></span>
    <span data-letter="a"></span>
  </div>
);

export default Header;
