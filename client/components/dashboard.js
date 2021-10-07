import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <div id="title">Dashboard</div>
        <Head title="Hello" />
        <Link to="/dashboard/profile/623d9c1b-82e8-47c2-8571-a4cae64f987c" className="block">Go To Profile</Link>
        <Link to="/dashboard/main" className="block">Go To Main</Link>
    </div>
  )
}

const DashboardMain = () => {
  return (
    <div>
        <Head title="Hello" />
        <div id="title">Main</div>
          <Link to="/dashboard/profile/623d9c1b-82e8-47c2-8571-a4cae64f987c" className="block">Go To Profile</Link>
          <Link to="/dashboard" className="block">Go To Root</Link>
    </div>
  )
}

const DashboardProfile = () => {
  const { user } = useParams()
  return (
    <div>
      <Head title="Hello" />
        <div id="title">Profile</div>
          <Link to="/dashboard" className="block">Go To Root</Link>
          <Link to="/dashboard/main" className="block">Go To Main</Link>
        <div id="username">{user}</div>
    </div>
  )
}

Dashboard.propTypes = {}
DashboardMain.propTypes = {}
DashboardProfile.propTypes = {}

export { Dashboard, DashboardMain, DashboardProfile }
