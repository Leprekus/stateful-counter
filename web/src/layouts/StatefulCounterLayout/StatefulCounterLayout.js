import { Link, routes } from '@redwoodjs/router'

const SatefulCounterLayout = ({ children }) => {
  return (
    <>
    <h1>Stateful Counter</h1>
    <header>
      <nav>
        <ul>
          <li>
            <Link to={routes.home()}>Home</Link>
          </li>
          <li>
          <Link to={routes.test()}>Test</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
    </>
  )
}

export default SatefulCounterLayout
