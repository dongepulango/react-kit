import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

const Wrap = (props) => {
  return (
    <main className="bb_wrapper--main">
      <Header />
      <section className="bb_wrapper--inner">
        {props.children}
      </section>
      <Footer />
    </main>
  );
}

export default Wrap;