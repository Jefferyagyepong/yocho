import Link from 'next/link';
import Image from 'next/image';
export default function Location() {
    return (
        <div className='location'>

            <h2>L O C A T I O N</h2>
            <address >
                     7 Minetti St
            Atonsu, AK-717-5846
            </address>
            <br/><br/>
            <p>Here  are directions to our location.
                We hope to see you soon!
            </p>
            <Link href={"#"}>
                   <p className='underline'>Get directions</p>
            </Link>
             <Link href={"#"}>
                   <p className='underline'>Parking Information</p>
            </Link>
         
          


   </div>
  

  );
}
