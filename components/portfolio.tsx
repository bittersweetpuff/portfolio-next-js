import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project';

export default function Portfolio() {
  return (
      <section>
      <SectionHeading>Portfolio</SectionHeading>
      <div>
      {
      projectsData.map((project, index) => (
            <React.Fragment key={index}>
            <Project {...project} />
            </React.Fragment>
            ))
      }
      </div>
      </section>
      );
}

