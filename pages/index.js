import { MDXProvider } from "@mdx-js/react"
import Head from "../components/Head"
import Animation from "../components/Animation"
import ReadMe from "../README.md"

const IndexPage = () => (
  <>
    <Head />
    <Animation />
    <MDXProvider>
      <ReadMe />
    </MDXProvider>
  </>
)
export default IndexPage
