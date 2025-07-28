import Link from "next/link";
export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Pages/JobPage"> Find Job</Link>
        </li>
        <li>
          <Link href="/Components/Pricing"> Pricing plans</Link>
        </li>
        <li>
          <Link href="/Components/CustomerSupport">Customer Support</Link>
        </li>
        <li>
          <Link href="/ContactPage">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
