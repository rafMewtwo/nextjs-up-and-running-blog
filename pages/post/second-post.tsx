import Head from 'next/head';

const SecondPost = () => (
  <>
    <Head>
      <title>SecondPost :: My Blog</title>
      <meta property="og:title" content="Hello there :: My Blog" />
    </Head>
    <article>
      <h1>Hello There!</h1>
      <p> second post</p>
    </article>
  </>
)

export default SecondPost;