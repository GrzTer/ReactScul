import { NavLink } from 'react-router-dom' // Correct import for React Router

const Header = () => {
  return (
    <header className="bg-amber-500 text-white p-4 m-0 top-0 w-screen fixed">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <nav>
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/"
                className="text-white hover:text-blue-400"
                activeClassName="text-blue-500"
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-white hover:text-blue-400"
                activeClassName="text-blue-500"
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-white hover:text-blue-400"
                activeClassName="text-blue-500"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
