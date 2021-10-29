import { Box, Center, Image, Text, Flex, Spacer, useColorMode } from "@chakra-ui/react"
export default function PostCard(props) {
  const blog = props.blog
  const createdAt = new Date( blog.createdAt );
  const year = createdAt.getFullYear();
  const month = createdAt.getMonth() + 1;
  const day = createdAt.getDate();

  const { colorMode } = useColorMode()
  const text_color = colorMode === 'light' ? "gray.00" : "gray.300"
  const bg_color   = colorMode === 'light' ? "gray.300" : "gray.600"
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
          <Center>
            <Text fontSize="3xl" fontWeight="bold" color={text_color}>
              {blog.title}
            </Text>
          </Center>
          <Box mt="7" textAlign="right">
            <Text fontSize="xl" color={text_color}>
              {year}/{month}/{day}
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}
