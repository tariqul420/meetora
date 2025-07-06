import { ChildrenProps } from '@/types';

export default function AuthLayout({ children }: ChildrenProps) {
  return <main className="flex min-h-screen w-full items-center justify-center">{children}</main>;
}
