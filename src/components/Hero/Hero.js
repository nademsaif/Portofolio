import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        A Determained And Skilled JavaScript Developer That Aspiers To Enhance The Lives Of People And Make It As Convenient As It Needs To Be.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/naee44'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;