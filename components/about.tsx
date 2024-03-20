"use client";

import React from 'react'
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
    initial = {{ opacity: 0, y: 100 }}
    animate = {{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    >
    <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      Cupcake ipsum dolor sit amet wafer tiramisu. Marshmallow wafer gingerbread dessert dragée sugar plum. Cookie cotton candy gingerbread jelly beans powder toffee. Brownie cookie lemon drops donut gummi bears tootsie roll dragée marshmallow sweet.
      </p>
      <p>
      Bear claw chupa chups macaroon bear claw jelly-o marshmallow carrot cake cheesecake. Carrot cake shortbread fruitcake croissant chupa chups pie lollipop caramels. Gummies apple pie chocolate cake sweet roll soufflé gingerbread gummies cake. Cupcake lollipop cupcake chupa chups icing lollipop cotton candy.
      </p>
    </motion.section>
  );
}
