import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/Header';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import SectionForm from './components/SectionForm';
import SectionArticles from './components/SectionArticles';

gsap.registerPlugin(ScrollTrigger);

const index = () => {
  return (
    <>
      <Header />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <SectionForm />
      <SectionArticles />
    </>
  );
};

export default index;
