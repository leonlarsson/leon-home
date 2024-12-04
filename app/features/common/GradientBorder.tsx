export const GradientBorder = ({
  rounded = "4px",
  padding = "1px",
  style = {},
  hoverable = false,
  from = "#ec4899",
  via = "#ef4444",
  to = "#eab308",
  hoverFrom = "#eab308",
  hoverVia = "#16a34a",
  hoverTo = "#2563eb",
  duration = "10s",
  hoverDuration = "2s",
  children,
}: Props) => {
  return (
    <div
      style={
        {
          "--gradient-degree": "-45deg",
          "--gradient-anim-duration": duration ?? "10s",
          "--gradient-hover-anim-duration": hoverable ? hoverDuration : duration,

          // Default colors
          "--gradient-from": from,
          "--gradient-via": via,
          "--gradient-to": to,

          // Hover colors
          "--gradient-hover-from": hoverable ? hoverFrom : from,
          "--gradient-hover-via": hoverable ? hoverVia : via,
          "--gradient-hover-to": hoverable ? hoverTo : to,

          borderRadius: rounded,
          padding: padding,
          ...style,
        } as React.CSSProperties
      }
      className={"gradient-border select-none hover:drop-shadow-md"}
    >
      {children}
    </div>
  );
};

type Props = {
  /** To achieve peak roundness, set this to (padding px + rounding px of inner element). Defaults to "4px".
   *
   * https://twitter.com/aleksliving/status/1687889580555407361
   */
  rounded?: string;
  /** Defaults to "1px". */
  padding?: string;
  /** Extra styles to add to the div. */
  style?: React.CSSProperties;
  /** Whether the div should have a hover effect. Defaults to false. */
  hoverable?: boolean;
  /** Override the gradient "from" color. */
  from?: string;
  /** Override the gradient "via" color. */
  via?: string;
  /** Override the gradient "to" color. */
  to?: string;
  /** Override the gradient "from" color on hover. */
  hoverFrom?: string;
  /** Override the gradient "via" color on hover. */
  hoverVia?: string;
  /** Override the gradient "to" color on hover. */
  hoverTo?: string;
  /** Animation duration. Defaults to 10s */
  duration?: string;
  /** Hover animation duration. Defaults to 2s */
  hoverDuration?: string;
  /** The children of the div. */
  children: React.ReactNode;
};
