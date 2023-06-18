import Link from 'next/link';
import Image from 'next/image';
export default function Header() {
    return (
      <div className="Header">
       
          <a href="./">
             <Image src="/yocho.svg" width={150} height={155} alt="Jeffery Agyepong logo" id='logo'/>
            
        </a>
          <section className="top-nav">
   
                    <input id="menu-toggle" type="checkbox" />
                 
    <label className='menu-button-container' htmlFor="menu-toggle">
                        <div className='menu-button'></div>
                    
                         
                    
  </label>
                    <ul className="menu">
            <li><Link href={"/mentorship"} className="salmon-mobile">Menu today</Link></li>
            <li><Link href={"/sayhello"} className="salmon-mobile">Reservations</Link></li>
            <li><Link href={"/sayhello"} className="salmon-mobile">Purchace gift cards and coupons</Link></li>
                                    <li><Link  href={"/sayhello"}  className="salmon-mobile">Order Meal</Link></li>


    </ul>
  </section>
        
   

      </div>
  

  );
}
