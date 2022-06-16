import React, { useState } from 'react'
import { Container, Logo, NavLinks, MenuLink, Content, Menu, CloseSidebar, Icon} from './style'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Header() {
  const [sidebar, setSidebar] = useState(false)
  const { asPath } = useRouter()

  const showSiderbar = () => setSidebar(!sidebar)

  function activeLink(path) {
    return asPath === `/${path}` ? 'active' : ''
  }

  return (
  <Container>
    <Content>
        <Logo>
          <Image src="/images/Logo.png" width="130.79px" height= "32px"/>
        </Logo>
      <Menu>
        <FaBars onClick={showSiderbar} />
      </Menu>
      <NavLinks sidebar={sidebar}>
        <CloseSidebar onClick={showSiderbar}><FaTimes /></CloseSidebar>
            <Link href="/">
              <MenuLink className={activeLink('')} onClick={showSiderbar}>Home</MenuLink>
            </Link>
            <Link href="About">
              <MenuLink className={activeLink('About')} onClick={showSiderbar}>About</MenuLink>
            </Link>
            <Link href="Pricing">
              <MenuLink className={activeLink('Pricing')} onClick={showSiderbar}>Pricing</MenuLink>
            </Link>
            <Link href="Gallery">
              <MenuLink className={activeLink('Gallery')} onClick={showSiderbar}>Gallery</MenuLink>
            </Link>
            <Link href="Features">
              <MenuLink className={activeLink('Features')} onClick={showSiderbar}>Features</MenuLink>
            </Link>
            <Link href="Team">
              <MenuLink className={activeLink('Team')} onClick={showSiderbar}>Team</MenuLink>
            </Link>
            <Link href="Search">
              <i class="fas fa-search"></i>
            </Link>
        </NavLinks>
        <Icon href="/"><Image src="/images/search.svg" width="10.35px" height= "10.35px"/></Icon>
    </Content>
  </Container>
  )
}