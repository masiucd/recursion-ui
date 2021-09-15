import styled from "@emotion/styled"
import {elevations, sizes} from "@styles/styles"
import Link from "next/link"

import routes from "../../data/routes.json"

const HeaderStyles = styled.header`
  min-height: ${sizes.headerHeight};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  box-shadow: ${elevations.xl};
`

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  li {
    a {
      text-transform: uppercase;
    }
  }
`

const Header = () => {
  return (
    <HeaderStyles>
      <h3>Recursive render with React</h3>
      <nav>
        <NavList>
          {routes.map(({name, path}) => (
            <li key={name}>
              <Link href={path}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </NavList>
      </nav>
    </HeaderStyles>
  )
}

export default Header
