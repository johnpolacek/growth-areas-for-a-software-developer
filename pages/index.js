import Layout from "../components/Layout"
import { MDXProvider } from "@mdx-js/react"
import Animation from "../components/Animation"
import ReadMe from "../README.md"

const IndexPage = () => (
  <Layout
    url="/"
    title="Growth Areas for a Software Developer"
    description="A list of areas to focus on in and examples to follow in order to grow your career as a software developer."
  >
    <Animation />
    <MDXProvider>
      <ReadMe />
    </MDXProvider>
  </Layout>
)
export default IndexPage
