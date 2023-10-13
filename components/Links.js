import Link from "next/link";
import Image from "next/image";
export default function Links() {
  return (
    <div className="content-1">
      <Link href={"#"}>
        <h4 className="border-black"> ORDER ONLINE</h4>
      </Link>
      <br />
      <br />

      <Link href={"#"}>
        <h4 className="border-black">
          CAREERS - SEND US A RESUME OR SHORT MESSAGE!
        </h4>
      </Link>
    </div>
  );
}
