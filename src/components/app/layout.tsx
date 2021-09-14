import {css} from "@emotion/css"
import React, {FC} from "react"
import {Link} from "react-router-dom"

const routes = [
  {name: "home", path: "/"},
  {name: "folder structure", path: "/folder"},
  {name: "conversations", path: "/conversations"},
]

const Nav = () => {
  return (
    <nav
      className={css`
        min-height: 10rem;
        display: flex;
        align-items: center;
      `}>
      <ul
        className={css`
          list-style: none;
          display: flex;

          justify-content: space-between;
          align-items: center;
          min-width: 100rem;
          margin: 0 auto;
          padding: 1rem;
        `}>
        {routes.map(({name, path}) => (
          <li key={name}>
            <Link
              to={path}
              className={css`
                font-size: 2rem;
                text-decoration: none;
                color: #0b51d3;
                text-transform: capitalize;
              `}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const Layout: FC = ({children}) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  )
}

export default Layout
