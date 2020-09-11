import Head from "./Head"

const Layout = (props) => (
  <>
    <Head {...props} />
    <>{props.children}</>
  </>
)

export default Layout
