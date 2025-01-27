import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="text-xl font-semibold text-logofBlue">
      <Image alt="" src="/logo.png" className="rounded-full " width={100} height={100} />

    </Link>
  );
}
