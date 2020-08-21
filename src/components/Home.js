import React, { Fragment } from 'react';
import { Heading } from './Heading';
import { GuestList } from './GuestList';

export const Home = () => {
  return (
    <Fragment>
      <div className="App">
        <div className="container mx-auto">
          <h3 className="heading text-center  text-3xl mt-20 text-base leading-8 text-black font-bold tracking-wide uppercase">
            Your Guest List for your Events
          </h3>
          <Heading />
          <GuestList />
        </div>
      </div>
    </Fragment>
  );
};
