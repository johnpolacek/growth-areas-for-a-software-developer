import Head from "next/head"

const twitter = "@johnpolacek"
const imageUrl =
  "https://growth-areas-for-a-software-developer.vercel.app/screenshot.png"
const imageAlt = "5 Growth Areas for a Software Developer"

const DocHead = (props) => (
  <>
    <Head>
      <title>{props.title}</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="canonical" href={props.url} />
      <meta name="description" content={props.description} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {imageAlt && <meta property="og:image:alt" content={imageAlt} />}
      <meta property="og:url" content={props.url} />
      <meta
        name="twitter:card"
        content={imageUrl ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      {imageUrl && <meta property="twitter:image" content={imageUrl} />}
      {imageAlt && <meta property="twitter:image:alt" content={imageAlt} />}
    </Head>
  </>
)

export default DocHead
