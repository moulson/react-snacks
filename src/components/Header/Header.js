import React from 'react';
import styled from 'styled-components';
import logo from '../../logo.png';

const HeaderWrapper = styled.div`
  background-color: #FF4136;
  color: #fff;
  width: 100%;
  height: 60px;
  display: inline-flex;
`;

const LogoWrapper = styled.div`
    display: inline-flex;
    width: 64px;
`;

const Logo = styled.img`
    width: 64px;
    height: auto;
    pointer-events: none;
`;

const HeaderLinksWrapper = styled.ul`
    list-style: none;
    display: inline-flex;
    justify-content: space-evenly;
    width: 100%;
`

const Link = styled.a`
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    margin: 0px 20px;
`;

const Header = ({ links }) => (
    <HeaderWrapper>
        <LogoWrapper>
            <Link href='/'>
                <Logo src={logo}/>
            </Link>
        </LogoWrapper>
        <HeaderLinksWrapper>
            {links.map(link =>
                <Link href={link.href}>{link.title}</Link>
            )}
        </HeaderLinksWrapper>
    </HeaderWrapper>
);

export default Header;