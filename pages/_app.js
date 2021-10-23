import { ChakraProvider } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
import Header from "../components/header"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Header />
      <Container maxW="container.md">
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}
export default MyApp
