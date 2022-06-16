import React, { useCallback, useState } from 'react'
import { Container, Title, Author, Description, CardImage, Infos, Button} from './style'
import Image from 'next/image'


export default function Card({book}) {
  const meses = ["Jan.", "Fev.", "Mar.", "Abr.", "Mai.", "Jun.", "Jul.","Ago.","Set.","Out.","Nov.","Dez."];
  let data = new Date(book.published);
  let dataFormatada = ((data.getDate() + " " + meses[(data.getMonth())] + " " + data.getFullYear().toString().substr(-2)));
  
  return (
    <Container>
      <CardImage>
        <Image src={book.image} width="227px" height= "224px"/>
      </CardImage>

      <Title>{book.title}</Title>

      <Author>{book.author}</Author>

      <Description>{book.description}</Description>
      
      <Infos>
        <Button>{book.genre}</Button>
        {dataFormatada}
      </Infos>
    </Container>
  )
}