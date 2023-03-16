import Link from 'next/link'
import { PayloadAdminBarProps, PayloadMeUser } from 'payload-admin-bar'
import React, { useState } from 'react'

import { CMSLink } from '../CMSLink'
import { Gutter } from '../Gutter'
import { Logo } from '../Logo'
import { AdminBar } from './AdminBar'

import { MainMenu } from 'payload-cms/src/payload-types'
import classes from './index.module.scss'

type HeaderBarProps = {
  children?: React.ReactNode
}

export const HeaderBar: React.FC<HeaderBarProps> = ({ children }) => {
  return (
    <header className={classes.header}>
      <Gutter className={classes.wrap}>
        <Link href='/'>
          <Logo />
        </Link>
        {children}
      </Gutter>
    </header>
  )
}

export const Header: React.FC<{
  globals: {
    mainMenu: MainMenu
  }
  adminBarProps: PayloadAdminBarProps
}> = props => {
  const { globals, adminBarProps } = props

  const [user, setUser] = useState<PayloadMeUser>()

  const {
    mainMenu: { navItems },
  } = globals

  const hasNavItems = navItems && Array.isArray(navItems) && navItems.length > 0

  return (
    <div>
      <AdminBar adminBarProps={adminBarProps} user={user} setUser={setUser} />
      <HeaderBar>
        {hasNavItems && (
          <nav className={classes.nav}>
            {navItems.map(({ link }, i) => {
              return <CMSLink key={i} {...link} />
            })}
          </nav>
        )}
      </HeaderBar>
    </div>
  )
}
