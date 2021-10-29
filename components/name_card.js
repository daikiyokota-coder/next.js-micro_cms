import { Box, Center, Image, Text } from "@chakra-ui/react"
export default function NameCard() {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      w="100%"
      h="350px"
      boxShadow="md"
      p="6"
      mt="5"
      rounded="md"
    >
      <Center>
        <Image
          borderRadius="full"
          boxSize="150px"
          src="/images/tars.gif"
          alt="tars"
        />
      </Center>
      <Center>
        <Text fontSize="3xl" fontWeight="extrabold">yoko</Text>
      </Center>
      <Center>
        <Text fontSize="md" fontWeight="bold" color="gray.600">Backend Engineer</Text>
      </Center>
      <Center mt="7">
        <Text fontSize="md" fontWeight="bold">My Skill 🔽</Text>
      </Center>
      <Center>
        <Text fontSize="sm" color="gray.600" fontWeight="semibold">Ruby on Rails  |  React  |  TypeScript</Text>
      </Center>
    </Box>
  )
}
