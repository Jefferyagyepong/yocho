
import { faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link.js";


export default function Footer() {
 


    return (

      
      <footer className="footer">
          <div className="container-footer">
            <div className="row">
              <div className="footer-col">
                <h4>Quick Links</h4>
                <ul>
              
                       <li>   <Link href="#"  > Purchase gift item and coupons</Link></li>
                <li> <Link href="#"  > Order Meal</Link></li>
                <li> <Link href="#"  > Reservations</Link></li>
                <li> <Link href="#"  > Menu today</Link></li>
                                       <li> <Link href="#"  > Careers</Link></li>
  
                    
                </ul>
                
              </div>
               <div className="footer-col">
                <h4>Follow us on social media</h4>
                <ul>
                  <li></li>
                       <li>            <Link
              href="#"
           className="icon"
              target="_blank"
            ><FontAwesomeIcon icon={faTwitter} width={20} height={20} style={{color:"blue"}} /></Link></li>
                       <li>          <Link
              href="#"
            className="icon"
              target="_blank"
            ><FontAwesomeIcon icon={faEnvelope} width={20} height={20}/></Link></li>
  
                       <li>  <Link
              href="#"
               className="icon"
              target="_blank"
            ><FontAwesomeIcon icon={faLinkedin} width={20} height={20} style={{color:"red"}}/></Link></li>
                  <li> <Link
              href="#"
        className="icon"
              target="_blank"
            ><FontAwesomeIcon icon={faInstagram} width={20} height={20} style={{color:"orange"}}/></Link></li>
                </ul>
                
              </div>
              <div className="footer-col">
                        <h4>Contact</h4>
                   <address>   
                7 Minetti ST Ak-7174856, Atonsu Kumasi, GH
              </address>
              <br/>
                <Link  href="tel:+233244736420" className="white">(233) 244736420</Link><br/><br/>
                   <Link  href="mailto:yochorestaurant@gmail.com"  className="white">yochorestaurant@gmail.com</Link>
              </div>
         
              
            </div>
            
          </div>
        <div className="footer-bottom">
        
            <p   className="copyright">
                
          Yo cho incoporated  all rights reserved {' '}   &copy;   {new Date().getFullYear()}
          </p>
  
          </div>
          
      </footer>
   
   
   
  );
}


