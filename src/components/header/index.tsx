import { NavLink } from 'react-router-dom'

const links = [
  { url: '/', title: 'Home' },
  { url: '/genres', title: 'Genres' },
  { url: '/info', title: 'Info' },
]

const Header = () => {
  return (
    <div>
      {links.map(({ url, title }) => (
        <NavLink
          role={`page-${title.toLowerCase()}-link`}
          key={title}
          to={url}
          style={({ isActive }) =>
            isActive
              ? { color: 'red', paddingRight: '10px' }
              : { color: 'blue', paddingRight: '10px' }
          }
        >
          {title}
        </NavLink>
      ))}
    </div>
  )
}

export default Header
