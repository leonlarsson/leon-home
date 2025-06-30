import { redirect, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_cv/cv")({
  beforeLoad: () => {
    throw redirect({ to: "/$locale/cv", params: { locale: "en" } });
  },
});
