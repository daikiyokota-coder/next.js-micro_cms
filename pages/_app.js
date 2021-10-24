import { ChakraProvider, Container } from "@chakra-ui/react"
import Header from "../components/header"
import NameCard from "../components/name_card"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Header />
      <Container maxW="container.md">
        <NameCard />
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}
export default MyApp
