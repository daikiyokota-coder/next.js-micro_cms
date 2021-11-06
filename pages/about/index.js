import ContentsNav from "../../components/contents_nav"
import NameCard from "../../components/name_card"
import { Box, Text } from "@chakra-ui/react"
import CommonMeta from "../../components/CommonMeta"

export default function About() {
  const blog_color  = "gray.300"
  const about_color = "tomato"
  return(
    <>
      <CommonMeta title="YokoBlog | About" description="Explaining what yoko is like"/>
      <NameCard chara_num="02" />
      <ContentsNav blog_color={blog_color} about_color={about_color} />
      <Box mt="10" ml="10" mr="10">
        <Text fontSize="3xl" fontWeight="bold">Work</Text>
        <Box mt="3" ml="3" mr="3" mb="10">
          <Text lineHeight="8">
            都内のWeb系企業でエンジニアをしています。受託開発チームに所属しており、Ruby on Railsを使ったWebアプリケーションの開発をメインで行っています。
          </Text>
        </Box>

        <Text fontSize="3xl" fontWeight="bold">Qualifications</Text>
        <Box mt="3" ml="3" mr="3" mb="10">
          <Text lineHeight="8">
            Ruby技術者認定試験 Silver
          </Text>
          <Text lineHeight="8">
            Ruby技術者認定試験 Gold
          </Text>
        </Box>
        <Text fontSize="3xl" fontWeight="bold">Hobby</Text>
        <Box mt="3" ml="3" mr="3" mb="10">
          <Text lineHeight="8">
            エレキベース
          </Text>
          <Text lineHeight="8">
            個人開発(最近はNext.js多め)
          </Text>
          <Text lineHeight="8">
            読書
          </Text>
        </Box>
      </Box>
    </>
  )
}
