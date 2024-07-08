import Link from "next/link.js";

export default function Footer() {
  return (
    <footer>
      <h3>Quick Links</h3>
      <ul>
        <li>
          {" "}
          <Link href="#"> Purchase gift item and coupons</Link>
        </li>
        <li>
          {" "}
          <Link href="#"> Order Meal</Link>
        </li>
        <li>
          {" "}
          <Link href="#"> Reservations</Link>
        </li>
        <li>
          {" "}
          <Link href="#"> Menu today</Link>
        </li>
        <li>
          {" "}
          <Link href="#"> Careers</Link>
        </li>
      </ul>

      <h3>Follow us on social media</h3>
      <ul>
        <li>
          {" "}
          <Link href="#" className="icon" target="_blank"></Link>
        </li>
        <li>
          {" "}
          <Link href="#" className="icon" target="_blank"></Link>
        </li>

        <li>
          {" "}
          <Link href="#" className="icon" target="_blank"></Link>
        </li>
        <li>
          {" "}
          <Link href="#" className="icon" target="_blank"></Link>
        </li>
      </ul>

      <h3>Contact</h3>
      <address>📍 7 Minetti ST Ak-7174856, Atonsu Kumasi, GH</address><br/>

      <Link href="tel:+233244736420" className="white">
        📞 (233) 244736420
      </Link><br/>
    
      <Link href="mailto:yochorestaurant@gmail.com" className="white">
       📧 yochorestaurant@gmail.com
      </Link><br/>

      <h6>
        Yo cho incoporated all rights reserved &copy; {new Date().getFullYear()}
      </h6>
    </footer>
  );
}
