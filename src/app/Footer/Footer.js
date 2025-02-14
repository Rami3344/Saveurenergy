import "./Footer.css"
export default function footer(){
    return(
        <div className="footer">
            <div className="container flex justify-between">
            <div className="quick-links">
                <h1>QUICK LINKS</h1>
                <ul>
                    <li>Quote Request</li>
                    <li>Become a Supplier</li>
                    <li>Contact US21</li>
                    <li>Customer Support</li>
                    <li>Online Catalog</li>
                </ul>
            </div>
            <div className="quick-links">
                <h1>PRODUCTS & SOLUTIONS</h1>
                <ul>
                    <li>Quote Request</li>
                    <li>Become a Supplier</li>
                    <li>Contact US21</li>
                    <li>Customer Support</li>
                    <li>Online Catalog</li>
                </ul>
            </div>
            <div className="quick-links">
                <h1>SERVICES</h1>
                <ul>
                    <li>Quote Request</li>
                    <li>Become a Supplier</li>
                    <li>Contact US21</li>
                    <li>Customer Support</li>
                    <li>Online Catalog</li>
                </ul>
            </div>
            <div>
            <img src="media/logo.png" className="text-danger w-16 text-2xl mx-10 mt-2"></img>
                <p className="text-center">
                2721 Prosperity Ave.<br></br>
                Suite 300.<br></br>
                Fairfax, VA 22031 , U.S.A.<br></br>
                <br></br>
                Tel : 999999999<br></br>
                Fax: 99999999999<br></br>
                </p>
            </div>
            </div>
            <hr></hr>
            <p>US21, Inc. is certified to ISO 9001:2015 Quality Management System<br></br>

@ 2021 US21, Inc. All rights reserved. Unauthorized use and/or duplication of this material without express and written permission is prohibited. | Privacy Policy</p>
        </div>
    )
}