import { Heading, Flex, Spacer,  Wrap, WrapItem } from "@chakra-ui/react"
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
            YokoLab
          </Link>
        </Heading>
        <Spacer/>
        <Wrap mr="10">
          <WrapItem>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </WrapItem>
          <WrapItem>
            <Link href="/about">
              <a>About</a>
            </Link>
          </WrapItem>
        </Wrap>
      </Flex>
    </>
  )
}
