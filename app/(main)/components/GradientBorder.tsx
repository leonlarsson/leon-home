export default ({
  rounded = "rounded",
  padding = "p-px",
  extraClasses = "",
  hoverable = false,
  from,
  via,
  to,
  hoverFrom,
  hoverVia,
  hoverTo,
  children,
}: Props) => {
  return (
    <div
      className={`select-none hover:drop-shadow-md ${rounded} bg-gradient-to-r ${
        from ?? "from-pink-500"
      } ${via ?? "via-red-500"} ${to ?? "to-yellow-500"} ${padding} ${
        hoverable
          ? `${hoverFrom ?? "hover:from-yellow-500"} ${
              hoverVia ?? "hover:via-green-600"
            } ${hoverTo ?? "hover:to-blue-600"}`
          : ""
      } ${extraClasses}`}
    >
      {children}
    </div>
  );
};

type Props = {
  /** Tailwind rounded class. To achieve peak roundness, set this to (padding px + rounding px of inner element). Defaults to "rounded (4px)".
   *
   * https://twitter.com/aleksliving/status/1687889580555407361
   */
  rounded?: string;
  /** Tailwind padding class. Defaults to "p-px (1px)". */
  padding?: string;
  /** Extra classes to add to the div. */
  extraClasses?: string;
  /** Whether the div should have a hover effect. Defaults to false. */
  hoverable?: boolean;
  /** Override the gradient "from" class. The entire name. */
  from?: string;
  /** Override the gradient "via" class. The entire name. */
  via?: string;
  /** Override the gradient "to" class. The entire name. */
  to?: string;
  /** Override the gradient "hover:from" class. The entire name, including "hover:". */
  hoverFrom?: string;
  /** Override the gradient "hover:via" class. The entire name, including "hover:". */
  hoverVia?: string;
  /** Override the gradient "hover:to" class. The entire name, including "hover:". */
  hoverTo?: string;
  /** The children of the div. */
  children: React.ReactNode;
};
