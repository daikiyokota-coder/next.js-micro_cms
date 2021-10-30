import { ChakraProvider, Container, Box } from "@chakra-ui/react"
import Header from "../components/header"
import { Canvas } from 'react-three-fiber'
import SampleBox from "../components/SampleBox"
import Controls from "../utils/Controls"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Header />
      <Box h="700px" w="500px">
        <Canvas>
          <SampleBox />
          <Controls />
          <gridHelper />
        </Canvas>
      </Box>
      <Container maxW="container.md">
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}
export default MyApp
