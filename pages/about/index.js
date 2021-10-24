import ContentsNav from "../../components/contents_nav"
export default function About() {
  const blog_color  = "gray.300"
  const about_color = "tomato"
  return(
    <>
      <ContentsNav blog_color={blog_color} about_color={about_color} />
      <h1>About</h1>
    </>
  )
}
