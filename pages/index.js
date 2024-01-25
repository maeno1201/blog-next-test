import Meta from 'components/meta'
import Layout from '@/components/layout'
import Hero from 'components/hero'
import Container from 'components/container'


export default function Home(){
  return (
    <Container>
      <Meta />
      <Hero 
        title="CUBE"
        subtitle="アウトプットしていくサイト前野参上"
        imageOn
      />
    </Container>
  )
}