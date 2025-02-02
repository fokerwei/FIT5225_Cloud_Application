import React, { Fragment } from 'react';
import Hero from './Hero';
import HomeContent from './HomeContent';

export default function Home() {
  return (
    
    <Fragment>
      <Hero></Hero>
      <HomeContent />
      <div className="box cta">
        <p className="has-text-centered">
        </p>
      </div>
    </Fragment>
  )
}
