import Button from 'react-bootstrap/Button';
import "./contact.css"
export default function contact(){
    return(
        <div>
            <div className='info'>
                <div>
                    <h1>HQ ADDRESS</h1>
                    <p>2721 Prosperity Ave. Suite 300<br></br>
                    Fairfax, VA 22031 , U.S.A.</p>
                </div>
                <div>
                    <h1>Other Locations</h1>
                    <p>Ramallah, West Bank<br></br>
                        Rabat, Morocco<br></br>
                        Kiev, Ukraine</p>
                </div>
                <div>
                    <h1>PHONE</h1>
                    <p>1 703.560.0021</p>
                    <h1>Fax</h1>
                    <p>1 703.560.0021</p>
                </div>
            </div>
            <div className='contact'>
                <h1 className='text-center'>CONTACT</h1>
                <div>
                    <div className='contact-inpt'>
                        <div>
                            <h3>Full Name</h3>
                            <input type="text" />
                        </div>
                        <div>
                            <h3>Title</h3>
                            <input type="text" />
                        </div>
                    </div>
                    <div className='contact-inpt'>
                    <div>
                        <h3>Phone</h3>
                        <input type="number" />
                    </div>
                    <div>
                        <h3>Email</h3>
                        <input type="email" />
                    </div>
                    </div>
                    <div>
                        <h3 className='text-center'>Tell us what you're looking for.</h3>
                        <textarea/>
                    </div>
                </div>
                <Button variant="success" className='btn'>Success</Button>
            </div>
        </div>
    )
}