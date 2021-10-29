import { Box, Center, Image, Text, Flex, Spacer } from "@chakra-ui/react"
export default function PostCard(props) {
  const blog = props.blog
  const createdAt = new Date( blog.createdAt );
  const year = createdAt.getFullYear();
  const month = createdAt.getMonth() + 1;
  const day = createdAt.getDate();
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
        <Box bg="gray.300" w="100%" h="70px" p="3" />
        <Box p="3">
          <Center>
            <Text fontSize="3xl" fontWeight="bold">
              {blog.title}
            </Text>
          </Center>
          <Box mt="7" textAlign="right">
            <Text fontSize="xl" color="gray.600">
              {year}/{month}/{day}
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}
