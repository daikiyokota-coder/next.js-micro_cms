import {
  Heading,
  Flex,
  Spacer,
  useColorMode,
  IconButton,
  Box,
  Center,

} from "@chakra-ui/react"
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import Link from 'next/link'


export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Flex
        as="nav"
        bg={colorMode === 'light' ? "tomato" : "gray.600"}
        color="gray.50"
        padding={{ base: 3, md: 4 }}
        mb="5"
        opacity="0.9"
        w="100%"
        position="fixed"
      >
        <Center w="100%">
          <Center w={{base: "100%", md: "57%"}}>
            <Heading
              as="h1"
              fontSize="xl"
              fontFamily={{ base: "arial", md: "fantasy"}}
              mt={{ base: "2px", md: "2"}}
              ml={{ base: "2", md: "5"}}
              color={colorMode === 'light' ? "white" : "tomato"}
            >
              <Link href="/">
                YokoBlog
              </Link>
            </Heading>
            <Spacer />
            <IconButton
              size="sm"
              bg={colorMode === 'light' ? "gray.700" : "gray.100"}
              borderRadius="50"
              mr="3"
              _focus={{_focus: "none"}}
              aria-label="DarkMode Switch"
              icon={colorMode === 'light' ? <MoonIcon color="yellow" /> : <SunIcon color="tomato" />}
              onClick={toggleColorMode}
            />
          </Center>
        </Center>
      </Flex>
      <Box p="8" />
    </>
  )
}
