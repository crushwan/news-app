import Link from "next/link";

type Props = {
  category: string;
  isActive: boolean;
}

function NavLink({category, isActive}: Props) {
  return (
    <Link
      href={`/news/${category}`}
      className={`navLink ${isActive && "text-green-700 font-bold text-lg"}`}
    >
      {category}
    </Link>
  )
}

export default NavLink