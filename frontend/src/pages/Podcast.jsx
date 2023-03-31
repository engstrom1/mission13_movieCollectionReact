import React from 'react';

function Podcast() {
  return (
    <div>
      <h1 className="text-center" style={{ fontFamily: 'serif' }}>
        Baconsale Podcast
      </h1>
      <div className="mx-5">
        <p className="text-center">
          A comedian who likes movies and a movie critic who is sometimes funny
          discuss movies, music, television shows, video games and other pop
          culture topics in this podcast hosted by Joel. Check out{' '}
          <a
            style={{ textDecoration: 'underline', color: 'inherit' }}
            href="https://baconsale.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            this link
          </a>{' '}
          for more information.
        </p>
      </div>
    </div>
  );
}

export default Podcast;
