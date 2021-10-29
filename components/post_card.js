import { Box, Center, Image, Text } from "@chakra-ui/react"
export default function PostCard(props) {
  const blog = props.blog
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      w="100%"
      h="200px"
      boxShadow="md"
      mt="3"
      mb="3"
      rounded="md"
    >
      <Box bg="gray.300" w="100%" h="70px" p="3" />
      <Box p="3">
        <Text fontSize="4xl" fontWeight="bold">
          {blog.title}
        </Text>
        <Text fontSize="xl">
          {blog.createdAt}
        </Text>
        {blog.category && `${blog.category.name}`}
      </Box>
    </Box>
  )
}
