import Head from 'next/head'

type ISeoContentProps = {
  title: string
  description?: string
  content?: string
}

export default function Seo({ title, description, content }: ISeoContentProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name={description} content={content} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
