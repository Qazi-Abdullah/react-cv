import React, { useEffect } from 'react';
import Typed from 'typed.js';

function MultiHeadline() {
  useEffect(() => {
    const typed = new Typed(".multi-headline", {
      strings: ["Frontend Developer", "React Devepoler", "Freelancer", ],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <h3>
      <span className="multi-headline"></span>
    </h3>
  );
}

export default MultiHeadline;