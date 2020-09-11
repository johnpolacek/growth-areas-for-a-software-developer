import { MDXProvider } from "@mdx-js/react"
import Head from "../components/Head"
import Animation from "../components/Animation"
import ReadMe from "../README.md"

const IndexPage = () => (
  <>
    <Head
      url="/"
      title="Growth Areas for a Software Developer"
      description="A list of areas to focus on in and examples to follow in order to grow your career as a software developer."
    />
    <Animation />
    <MDXProvider>
      <ReadMe />
    </MDXProvider>
  </>
)
export default IndexPage
