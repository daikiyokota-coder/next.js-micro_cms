import { client } from "../../libs/client";
import MarkdownTemplate from "../../components/markdown_template";
import { Box, Center, Text } from "@chakra-ui/react"
import CommonMeta from "../../components/CommonMeta";

export default function BlogId({ blog }) {
  const createdAt = new Date( blog.createdAt );
  const year = createdAt.getFullYear();
  const month = createdAt.getMonth() + 1;
  const day = createdAt.getDate();

  return (
    <main>
      <CommonMeta title={blog.meta_title} description={blog.meta_description} />
      <Center mt="3">
        <Text fontSize={{ base: "2xl", md: "3xl"}}>{blog.title}</Text>
      </Center>
      <Box mt="4" textAlign="right">
        <Text fontSize="xl">投稿日: {year}/{month}/{day}</Text>
      </Box>
      <Box mt="12">
        <MarkdownTemplate source={blog.body} mb="16" />
      </Box>
    </main>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
