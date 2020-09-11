import Head from "next/head"

const url="/"
const title="Growth Areas for a Software Developer"
const description="A list of areas to focus on in and examples to follow in order to grow your career as a software developer."
const twitter = "@johnpolacek"
const imageUrl = "https://growth-areas-for-a-software-developer.vercel.app/screenshot.png"
const imageAlt = "5 Growth Areas for a Software Developer"

const DocHead = () => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {imageAlt && <meta property="og:image:alt" content={imageAlt} />}
      <meta property="og:url" content={url} />
      <meta
        name="twitter:card"
        content={imageUrl ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta property="twitter:image" content={imageUrl} />}
      {imageAlt && <meta property="twitter:image:alt" content={imageAlt} />}
    </Head>
  </>
)

export default DocHead
