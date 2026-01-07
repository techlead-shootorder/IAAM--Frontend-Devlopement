'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { forwardRef, type ReactNode } from 'react'

interface NavLinkProps extends LinkProps {
  className?: string
  activeClassName?: string
  children?: ReactNode
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ href, className = '', activeClassName = '', children, ...props }, ref) => {
    const pathname = usePathname()

    const isActive =
      typeof href === 'string' && pathname === href

    const combinedClassName = [
      className,
      isActive ? activeClassName : '',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <Link
        ref={ref}
        href={href}
        className={combinedClassName}
        {...props}
      >
        {children}
      </Link>
    )
  }
)

NavLink.displayName = 'NavLink'

export { NavLink }
