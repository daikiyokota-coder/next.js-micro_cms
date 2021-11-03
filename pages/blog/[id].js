import { client } from "../../libs/client";
import MarkdownTemplate from "../../components/markdown_template";
import { Box, Center, Image, Text, Flex, Spacer, useColorMode } from "@chakra-ui/react"

export default function BlogId({ blog }) {
  const createdAt = new Date( blog.createdAt );
  const year = createdAt.getFullYear();
  const month = createdAt.getMonth() + 1;
  const day = createdAt.getDate();

  return (
    <main>
      <Center mt="3">
        <Text fontSize={{ base: "2xl", md: "3xl"}}>{blog.title}</Text>
      </Center>
      <Box mt="4" textAlign="right">
        {/* <Text>{blog.category && `${blog.category.name}`}</Text> */}
        <Text fontSize="xl">投稿日: {year}/{month}/{day}</Text>
      </Box>
      <Box mt="12">
        <MarkdownTemplate source={blog.body} mb="16" />
      </Box>
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
