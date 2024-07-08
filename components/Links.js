import Link from "next/link";
import Image from "next/image";
export default function Links() {
  return (
    <div className="content-1">
      <Link href={"#"} className="content-link">
        ORDER ONLINE
      </Link>
      <br />
      <br />

      <Link href={"#"} className="content-link">
        CAREERS - SEND US A RESUME OR SHORT MESSAGE!
      </Link>
    </div>
  );
}
