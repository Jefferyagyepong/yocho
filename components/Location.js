import Link from "next/link";
import Image from "next/image";
export default function Location() {
  return (
    <div className="content-1">
      <h2>L O C A T I O N</h2>

      <address>📍 7 Minetti St Atonsu, AK-717-5846</address>

      <p>Here are directions to our location. We hope to see you soon!</p><br/>
      <Link href={"#"} className="content-link">
        Get directions
      </Link><br/>
      <Link href={"#"} className="content-link">
        Parking Information
      </Link>
    </div>
  );
}
