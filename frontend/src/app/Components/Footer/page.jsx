import Link from "next/link";
export default function Footer() {
  return (
    <div>
      <div>
        <h1>JobPilot</h1>
        <ul>
          <li>
            Call Now: <b>+1-202-555-0178</b>
          </li>
          <li>Silicon Valley</li>
        </ul>
      </div>
      <div>
        <h1>Quick Link</h1>
        <ul>
          <li>
            <Link href="/Components/About">About</Link>
          </li>
          <li>
            <Link href="/Components/ContactPage">Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <h1>
          <Link href="/Components/CustomerSupport">Support</Link>
        </h1>
        <ul>
          <li>
            <Link href="/Components/Faqs">Faqs</Link>
          </li>
          <li>
            <Link href="/Components/PrivacyPolicy">Privacy Policy</Link>
          </li>
          <li>Terms and conditions</li>
        </ul>
      </div>
      <h5>2025 JobPilot-Job portal. All Rights Reserved</h5>
    </div>
  );
}
