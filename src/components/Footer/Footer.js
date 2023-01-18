import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:000-000-000-00'>000-000-000-00</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:nademsaif@gmail.com'>nademsaif@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Creating a Better Future, Unlocking The Possibilities</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/naee44'>
          <AiFillGithub size='3rem'/>
        </SocialIcons>
        <SocialIcons href='https://linkedin.com'>
          <AiFillLinkedin size='3rem'/>
        </SocialIcons>
        <SocialIcons href='https://www.instagram.com/mns_ar15/?next=%2F'>
          <AiFillInstagram size='3rem'/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
