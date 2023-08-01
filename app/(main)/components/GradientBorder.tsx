export default ({ rounded = "rounded", padding = "p-px", extraClasses = "", hoverable = false, from, via, to, children }: Props) => {
  return <div className={`${rounded} bg-gradient-to-r ${from ?? "from-pink-500"} ${via ?? "via-red-500"} ${to ?? "to-yellow-500"} ${padding} ${hoverable ? "hover:from-red-500 hover:via-lime-600 hover:to-blue-400" : ""} ${extraClasses}`}>{children}</div>;
};

type Props = {
  /**
   * Tailwind rounded class. Defaults to "rounded".
   */
  rounded?: string;
  /**
   * Tailwind padding class. Defaults to "p-px".
   */
  padding?: string;
  /**
   * Extra classes to add to the div.
   */
  extraClasses?: string;
  /**
   * Whether the div should have a hover effect. Defaults to false.
   */
  hoverable?: boolean;
  /**
   * Override the gradient "from" class. The entire name.
   */
  from?: string;
  /**
   * Override the gradient "via" class. The entire name.
   */
  via?: string;
  /**
   * Override the gradient "to" class. The entire name.
   */
  to?: string;
  /**
   * The children of the div.
   */
  children: React.ReactNode;
};
