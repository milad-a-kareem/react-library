import { type ComponentPropsWithoutRef } from 'react';

export function Button({ ...props }: ComponentPropsWithoutRef<'button'>) {
  return <button {...props}>{props.children}</button>;
}
