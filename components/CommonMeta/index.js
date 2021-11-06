import Head from 'next/head'

export default function CommonMeta({ title = "YokoBlog", description = "This is a technical blog of web engineer yoko" }) {

  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/images/ogp.jpg" />
      <meta name="twitter:card" content="summary_large_image"/>
    </Head>
  )
}
