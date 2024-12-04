import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_cv/cv')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'I am /cv'
}
