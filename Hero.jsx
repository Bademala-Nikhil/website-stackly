import React from 'react';
import { motion } from 'framer-motion';


export default function Hero(){
return (
<section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24">
<div className="hero">
  <h1>We build digital products that scale</h1>
  <p>Modern web & mobile apps, delightful UX and measurable growth.</p>

  <div className="hero-buttons">
    <a className="btn-primary" href="#start">Get Started</a>
    <a className="btn-outline" href="#services">Our Services</a>
  </div>
</div>
</section>
);
}