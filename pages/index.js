import { Center, List, ListItem } from "@chakra-ui/react"
import Link from "next/link";
import { client } from "../libs/client";
import ContentsNav from "../components/contents_nav";

export default function Home({ blog }) {
  const blog_color  = "tomato"
  const about_color = "gray.300"
  return (
    <>
      <ContentsNav blog_color={blog_color} about_color={about_color} />
      <Center>
        <List>
          {blog.map((blog) => (
            <ListItem key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </ListItem>
          ))}
        </List>
      </Center>
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
