import * as React from 'react'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_cv')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      I am cv layout
      <br />
      <Outlet />
    </div>
  )
}
