import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_cv/resume")({
  beforeLoad: () => {
    throw redirect({ to: "/$locale/cv", params: { locale: "en" } });
  },
});
