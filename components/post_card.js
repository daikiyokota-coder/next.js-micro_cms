import { Box, Center, Text, Flex, useColorMode } from "@chakra-ui/react"
export default function PostCard(props) {
  const blog = props.blog
  const createdAt = new Date( blog.createdAt );
  const year = createdAt.getFullYear();
  const month = createdAt.getMonth() + 1;
  const day = createdAt.getDate();

  const { colorMode } = useColorMode()
  const text_color = colorMode === 'light' ? "gray.00" : "gray.300"
  const bg_color   = colorMode === 'light' ? "gray.300" : "gray.600"

  let title_length = blog.title.length
  if (title_length > 24) {
    var title = blog.title.substr(0, (title_length - (title_length - 24))) + '...'
  } else {
    var title = blog.title
  }

  return (
    <Flex>
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
        <Box bg={bg_color} w="100%" h="70px" p="3" />
        <Box p="3">
          <Center h="70px">
            <Text fontSize="2xl" fontWeight="bold" color={text_color} textAlign="center">
              {title}
            </Text>
          </Center>
          <Box mb="3" textAlign="right">
            <Text fontSize="lg" color={text_color}>
              {year}/{month}/{day}
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}
