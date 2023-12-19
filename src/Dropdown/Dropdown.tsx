import { type ComponentPropsWithoutRef } from "react";

export function Dropdown({ ...props }: ComponentPropsWithoutRef<"div">) {
  return <div {...props}>{props.children}</div>;
}
