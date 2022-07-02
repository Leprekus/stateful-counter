import { MetaTags } from '@redwoodjs/web'
const TestPage = () => {
  return (
    <>
      <MetaTags title="Test" description="Test page" />

      <p>
        My default route is named <code>test</code>, link to me with
        <code>/web/src/pages/HomePage/Test.js</code>
      </p>
    </>
  )
}

export default TestPage
