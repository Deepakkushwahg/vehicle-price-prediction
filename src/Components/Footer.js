import React from 'react'
import '../Constants/Css/Footer.css'
import playstore from '../Constants/Images/miniplay.png';
import insta from '../Constants/Images/insta.png';
import linkedin from '../Constants/Images/linkedin.png';
import twitter from '../Constants/Images/twitter.png';
import facebook from '../Constants/Images/facebook.png';
import map from '../Constants/Images/map.png';
import ios from '../Constants/Images/iosdownload.png'

export default function footer() {
    return (
        <div id="footer">
            <div id="marginwala">
                <div id="directions">
                <h3 id="headingfoot">Direction</h3>
                <span id="add">NH 2 Mathura Highway, <br></br>UP 282006 </span><br></br><br></br>
                <img id="directionimg" src={map} alt='map.png'/>
                </div>
                <div id="leftfooter">
                    <div className='footer_contentrightlinks_title'>
                        <h3 id="headingfoot">Our Company</h3>
                    </div>
                    <div className='footer_contentrightlinks_list'>
                        <ul>
                            <li className="li"><a className="ul" href='/about'>About Us</a></li>
                            <li className="li"><a className="ul" href='/contact'>Contact Us</a></li>
                            <li className="li"><a className="ul" href='/'>Privacy Policy</a></li>
                            <li className="li"><a className="ul" href='/'>Terms & Conditions</a></li>
                            <li className="li"><a className="ul" href='/'>Sitemap</a></li>
                        </ul>
                    </div>
                </div>
                <div id="centrefooter">
                    <h3 id="headingfoot">Other Car Companies</h3>
                    <div className='footer_contentrightlinks_list'>
                        <ul >
                            <li className="li"><a className="ul" href="https://www.marutisuzuki.com/">Maruti Suzuki Cars</a></li>
                            <li className="li"><a className="ul" href="https://www.hyundai.com/in/en">Hyundai Cars</a></li>
                            <li className="li"><a className="ul" href="https://www.hondacarindia.com/">Honda Cars</a></li>
                            <li className="li"><a className="ul" href="https://www.toyotabharat.com/">Toyota Cars</a></li>
                            <li className="li"><a className="ul" href="https://www.mahindra.com/">Mahindra Cars</a></li>
                            <li className="li"><a className="ul" href="https://www.tatamotors.com/">Tata Cars</a></li>
                        </ul>
                    </div>
                </div>
                <div id="rightfooter">
                    <div>
                        <span id="footbutton">Download Our Application</span><br></br><br></br>
                        <a href="https://play.google.com/store/apps?utm_source=apac_med&utm_medium=hasem&utm_content=Feb0221&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-ap-Evergreen-Feb0221-Text_Search_BKWS-BKWS%7cONSEM_kwid_43700065205026376_creativeid_535350509651_device_c&gclid=Cj0KCQiAveebBhD_ARIsAFaAvrElwkDXns3t26zEydm0q-n-_Vq8qgyHnkQ7wm3OcJkaxxGfw56kTDcaAjd_EALw_wcB&gclsrc=aw.ds"><img className="footplay" src={playstore} alt='playstore.png' /></a>
                        <a href="https://www.apple.com/in/app-store/"><img className="footplay" src={ios} alt='ios.png' /></a>
                    </div>
                    <br></br>
                    <div id="logosfoot">
                        <span id="followus">Follow Us :  </span>
                        <a href="https://www.instagram.com/"><img className="footerlogo" src={insta} alt='insta.png' /></a>
                        <a href="https://www.facebook.com/"><img className="footerlogo" src={facebook} alt='facebook.png'/></a>
                        <a href="https://twitter.com/"><img className="footerlogo" src={twitter} alt='twitter.png'/></a>
                        <a href="https://www.linkedin.com/"><img className="footerlogo" src={linkedin} alt='linkedin.png'/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
