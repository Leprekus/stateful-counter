// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import StatefulCounterLayout from 'src/layouts/StatefulCounterLayout'
const Routes = () => {
  return (
    <Router>
      <Set wrap={StatefulCounterLayout}>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/web/src/pages/HomePage/Test.js" page={TestPage} name="test" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
