import React from 'react';
import { render } from 'react-dom';
import Nav  from "./nav.jsx"
import HeaderMenu  from "./Header.jsx"
import Footer  from "./Footer.jsx"
export default function GridMenu() {
  return (
    <div>
      <div id="page" >
        <Nav />
        <HeaderMenu />
        <Footer />
      </div>
    </div>
  );
}
render(
  <GridMenu title="Grab" />,
  document.getElementById('app'),
);
