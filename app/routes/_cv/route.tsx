import { Outlet, createFileRoute } from "@tanstack/react-router";
import * as React from "react";

export const Route = createFileRoute("/_cv")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      I am cv layout
      <br />
      <Outlet />
    </div>
  );
}
