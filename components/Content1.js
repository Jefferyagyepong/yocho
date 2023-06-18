import Link from 'next/link';
import Image from 'next/image';
export default function Content1() {
    return (
        <div className='content-1'>
            <div className='background'>
             <Image src={"/menu.svg"} width={300} height={300}/>
            
    
</div>
            <hr /><br/><br/>
            <h5 className='head'>Updated May 7th, 2023</h5>
            <h2>NOW ACCEPTING INQUIRIES FOR PRIVATE EVENTS & HOLIDAY PARTIES!</h2>
            <p className='para-1'>We are now accepting all inquiries for full buyouts 
                for private events and holiday parties, any day of the week,
                day or night. Our restaurant can accommodate up to 45 guests and 
                potentially more. We can work with you on the menu, and curate beverages,
                beer, wine, and sake as well. Please <a href="mailto:jefferyagyepongdev@gmail.com">Contact us here </a>
                 to inquire!
            </p>
            <br/><br/><br/>

            <h2>DINNER RESERVATIONS!</h2>
            <p className='para-1'>We are open for dinner service Thursday through Sunday! We'll 
                be accepting limited walk-ins and reservations.
                For brunch, we still do not take reservationsas we seat guests on first 
                come first serve basis. 



            </p>

                     <br/><br/><br/>

            <h2>BUSINESS HOURS</h2>
            <p className='para-1'>
                BRUNCH: Thursday through Monday 
                9:00am - 2:30pm

                
            </p>
            <p className='para-1'>
                DINNER: Thursday through Sunday 
                5:00pm - 9:00pm

                
            </p>
             <p className='para-1'>
                CLOSED: Tuesdays & Wednesdays 
          

                
            </p>
             <p className='para-1'>
                Dine-in, takeout, and delivery available
                
            </p>



   </div>
  

  );
}
