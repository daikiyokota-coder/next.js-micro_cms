import Link from 'next/link'
import { Center, Text } from "@chakra-ui/react"

export default function ContentsNav(props) {
  return (
    <>
      <Center mt="7" mb="5">
        <Text fontSize="2xl" fontWeight="bold" mr="3" color={props.blog_color}>
          <Link href={`/`}>Blog</Link>
        </Text> |
        <Text fontSize="2xl" fontWeight="bold" ml="3" color={props.about_color}>
          <Link href={`/about`}>About</Link>
        </Text>
      </Center>
    </>
  )
}
