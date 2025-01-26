import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="text-xl font-semibold text-logofBlue">
      <span className="font-bold">Accounting</span>
    </Link>
  );
}
