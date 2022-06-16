import React, { useState } from 'react'
import { Container, Logo, LogoText, Content, Text, Divider, Icons} from './style'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Footer() {
  const [sidebar, setSidebar] = useState(false)
  const { asPath } = useRouter()
  
  return (
  <Container>
    <Content>
    
    <Logo>
      <Image src="/images/logo-solo.png" width="35px" height= "32px"/>
    </Logo>
    <LogoText>
      <Image src="/images/libslide.png" width="73.46px" height= "16.1px"/>
    </LogoText>
    <Divider/>
    <Text>Terms & Conditions</Text>
    <Text>Privacy Policy</Text>
    <Icons>
      <Image src="/images/facebook.svg" width="9px" height= "19px"/>&nbsp;
      <Image src="/images/twitter.svg" width="22px" height= "17px"/>&nbsp;
      <Image src="/images/instagram.svg" width="22px" height= "22px"/>&nbsp;
    </Icons>
    </Content>
    
  </Container>
  )
}