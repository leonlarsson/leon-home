import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";

export const Route = createFileRoute("/_cv/cv")({
  component: RouteComponent,
});

function RouteComponent() {
  return "I am /cv";
}
