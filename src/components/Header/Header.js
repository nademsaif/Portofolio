import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/' style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px'}} >
          <DiCssdeck size='3rem'/> <Span>Portfolio</Span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>

      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>

      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>

    </Div2>

    <Div3>
      <SocialIcons href='https://github.com/nademsaif'>
        <AiFillGithub size='3rem'/>
      </SocialIcons>
      <SocialIcons href='www.linkedin.com/in/nadeem-saif-83647b294'>
        <AiFillLinkedin size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://www.instagram.com/mns_ar15/?next=%2F'>
        <AiFillInstagram size='3rem'/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
