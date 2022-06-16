import Card from '../../components/Card'
import Footer from '../../components/Footer'
import Containter from '../../components/Card'

export async function getStaticProps() {

  const count = 10;
  const api = 'https://fakerapi.it/api/v1/books'

  const res = await fetch(`${api}?limit=${count}`);
  const data = await res.json()
  console.log(data.data)
  return {
    props: {
      books: data.data,
    },
  }
}

export default function Home( {books} ) {
  return (
  <div>
        {books.map((book) => (
          <Card key={book.id} book={book}/>
        ))}
      
  </div>
  
  )
}
