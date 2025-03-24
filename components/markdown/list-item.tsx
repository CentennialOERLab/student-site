import Image from "next/image";
import { PropsWithChildren } from "react";

type ListItemProps = PropsWithChildren & {
  text?: string;
  image?: string;
  alt?: string;
  width?: number;
};

export default function ListItem({
  text,
  image,
  alt,
  width = 500,
}: ListItemProps) {
  return (
    <li>
      <div>
        <p>{text}</p>
        {image && (
          <Image
            src={image}
            alt={alt || "Step image"}
            width={width}
            height={300}
            className="my-4"
          />
        )}
      </div>
    </li>
  );
}
