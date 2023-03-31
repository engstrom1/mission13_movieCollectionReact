import React from 'react';
import JoelHilton from './img/joel_hilton_img.jpg';

function Home() {
  return (
    <div>
      <div class="text-center">
        <h1 style={{ fontFamily: 'serif' }} class="display-4">
          The Joel Hilton Film Collection
        </h1>
        <img
          src={JoelHilton}
          width="250"
          alt="picture of Joel Hilton"
          style={{ border: '1px solid' }}
        />
        <br />
        <br />
        <p>
          Welcome to Joel Hilton's Movie Database. Joel is into film, in fact,
          he minored in Film Studies at BYU, contracts as a movie reviewer for
          ClearPlay, and does a weekly podcast with a couple friends about
          movies called Baconsale. Only movies deemed worthy make it into this
          collection. Enjoy!
        </p>
      </div>
    </div>
  );
}

export default Home;
