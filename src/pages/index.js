import Card from '../../components/Card'

export async function getStaticProps() {

  const count = 16;
  const api = 'https://fakerapi.it/api/v1/books'

  const res = await fetch(`${api}?limit=${count}`);
  const data = await res.json()

  return {
    props: {
      books: data.data,
    },
  }
}

export default function Home( {books} ) {
  return (
    <ul>
        {books.map((book) => (
          <Card key={book.id} book={book}/>
        ))}
      </ul>
  
  )
}
