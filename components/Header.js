import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <header>
      <Link href={"./"}>
        <Image
          src="/yocho.svg"
          width={60}
          height={75}
          alt="Jeffery Agyepong logo"
       
        />
      </Link>

      <section className="top-nav">
        <input id="menu-toggle" type="checkbox" />

        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          <li>
            <Link href={"/"} >
              Menu today
            </Link>
          </li>
          <li>
            <Link href={"/reservation"}>
              Reservations
            </Link>
          </li>
          <li>
            <Link href={"/"} >
              Purchace gift cards and coupons
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              Order Meal
            </Link>
          </li>
        </ul>
      </section>
    </header>
  );
}
