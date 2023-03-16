import { PayloadAdminBarProps, PayloadMeUser } from 'payload-admin-bar'
import React from 'react'

import { Gutter } from '../../Gutter'

import classes from './index.module.scss'

export const AdminBar: React.FC<{
  adminBarProps?: PayloadAdminBarProps
  user?: PayloadMeUser
  setUser?: (user: PayloadMeUser) => void // eslint-disable-line no-unused-vars
}> = props => {
  const { adminBarProps, user, setUser } = props

  return (
    <div className={[classes.adminBar, user && classes.show].filter(Boolean).join(' ')}>
      <Gutter className={classes.container}>
        {/* <PayloadAdminBar
          {...adminBarProps}
          cmsURL={process.env.NEXT_PUBLIC_SITE_URL}
          onAuthChange={setUser}
          className={classes.payloadAdminBar}
          classNames={{
            user: classes.user,
            logo: classes.logo,
            controls: classes.controls,
          }}
          style={{
            position: 'relative',
            zIndex: 'unset',
            padding: 0,
            backgroundColor: 'transparent',
          }}
        /> */}
      </Gutter>
    </div>
  )
}
