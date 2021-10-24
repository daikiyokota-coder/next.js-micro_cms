import { Heading, Flex } from "@chakra-ui/react"
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <Flex
        as="nav"
        bg="teal.400"
        color="gray.50"
        padding={{ base: 3, md: 4 }}
        mb="5"
      >
        <Heading
          as="h1"
          fontSize={{ base: "md", md: "lg" }}
          ml="5"
        >
          <Link href="/">
            YokoBlog
          </Link>
        </Heading>
      </Flex>
    </>
  )
}
