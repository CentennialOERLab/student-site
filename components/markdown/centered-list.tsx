import { PropsWithChildren } from "react";

export default function CenteredList({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-center">
      <ol className="text-left max-w-xl space-y-4">{children}</ol>
    </div>
  );
}
