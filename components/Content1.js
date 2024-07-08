import Link from "next/link";
import Image from "next/image";
export default function Content1() {
  return (
    <div className="content-1">
      
        <Image src={"/yo.png"} width={300} height={300} />
    
    
      <h5>Updated May 7th, 2023</h5>
   
      <h2>NOW ACCEPTING INQUIRIES FOR PRIVATE EVENTS & HOLIDAY PARTIES!</h2>
  
      <p>
        We are now accepting all inquiries for full buyouts for private events
        and holiday parties, any day of the week, day or night. Our restaurant
        can accommodate up to 45 guests and potentially more. We can work with
        you on the menu, and curate beverages, beer, wine, and sake as well.
        Please{" "}
        <a href="mailto:jefferyagyepongdev@gmail.com">Contact us here </a>
        to inquire!
      </p>{" "}
     
      <h2>DINNER RESERVATIONS!</h2>
    
      <p>
        We are open for dinner service Thursday through Sunday! We'll be
        accepting limited walk-ins and reservations. For brunch, we still do not
        take reservationsas we seat guests on first come first serve basis.
      </p>{" "}
    
      <h2>BUSINESS HOURS</h2>
  
      <p>BRUNCH: Thursday through Monday 9:00am - 2:30pm</p>
      <p>DINNER: Thursday through Sunday 5:00pm - 9:00pm</p>
      <p>CLOSED: Tuesdays & Wednesdays</p>
      <p>Dine-in, takeout, and delivery available</p>
    </div>
  );
}
