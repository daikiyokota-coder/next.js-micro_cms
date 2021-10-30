import { Box, Center, Image, Text } from "@chakra-ui/react"

import React, { Suspense } from 'react'
import { Canvas, useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Controls from "../utils/Controls"

export default function NameCard() {
  const LoadModel = () => {
    const gltf = useLoader(GLTFLoader, "/RiggedFigure.glb")
    return (
      <primitive object={gltf.scene} dispose={null} />
    )
  }
  const UseModel = () => {
    return (
      <Suspense fallback={null}>
        <LoadModel />
      </Suspense>
    )
  }
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
        {/* <Image
          borderRadius="full"
          boxSize="150px"
          src="/images/tars.gif"
          alt="tars"
        /> */}
        <Canvas>
          <UseModel />
          <Controls />
          <directionalLight position={[1, 1, 1]} />
          <gridHelper />
        </Canvas>
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
        <Text fontSize="sm" color="gray.600" fontWeight="semibold">Ruby on Rails  |  Next.js</Text>
      </Center>
    </Box>
  )
}
