import { ChakraProvider, Container, useColorMode } from "@chakra-ui/react"
import Header from "../components/header"

function MyApp({ Component, pageProps }) {
  //const { colorMode, toggleColorMode } = useColorMode()
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
