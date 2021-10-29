import { Box, Flex } from "@chakra-ui/react"
import Link from "next/link";
import { client } from "../libs/client";
import ContentsNav from "../components/contents_nav";
import PostCard from "../components/post_card";
import NameCard from "../components/name_card";

export default function Home({ blog }) {
  const blog_color  = "tomato"
  const about_color = "gray.300"
  return (
    <>
      <NameCard />
      <ContentsNav blog_color={blog_color} about_color={about_color} />
      <Flex wrap="wrap" justify="space-between">
        {blog.map((blog) => (
          <Box key={blog.id} w={{ base: "100%", md: "50%"}} p="2">
            <Link href={`/blog/${blog.id}`}>
              <a>
                <PostCard blog={blog}></PostCard>
              </a>
            </Link>
          </Box>
        ))}
      </Flex>
    </>
  )
}


export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
