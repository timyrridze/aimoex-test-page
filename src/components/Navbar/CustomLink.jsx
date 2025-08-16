import { Link, useResolvedPath, useMatch } from "react-router-dom"

export function CustomLink({to, className, children}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true } )

  return (
    <Link to={to} className={className + (isActive ? " active" : "")}>{children}</Link>
  )
}