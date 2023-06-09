import { SignOut } from "../../components/AuthButtons";

export default ({ name }: { name: string }) => (
  <span className="text-sm">
    Commenting as {name}{" "}
    <span className="whitespace-nowrap">
      (<SignOut />)
    </span>
  </span>
);
