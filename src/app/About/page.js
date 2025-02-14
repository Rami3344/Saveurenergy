import Card from "./card"
import "./about.css"
export default function about(){
    return(
        <div className="about">
            <h1>ABOUT</h1>
            <h1>YOUR MISSION – OUR PLEDGE</h1>
            <h3>Our proud history of past performance will lead to your future success.</h3>
            <div className="cards">
                <Card title="MISSION" desc="We are driven to provide critical pragmatic products, services & solutions, that exceed the expectations of our US government partners." />
                <Card title="VISION" desc="Utilize our integrity, perseverance and experienced personnel to become a leading government partner that offers procurement and logistic solutions globally." />
                <Card title="VALUES" desc="ACCOUNTABILITY – QUALITY – FAIRNESS – INTEGRITY – PROFESSIONALISM" />
            </div>
            <h1>A PARTNER YOU CAN TRUST</h1>
            <h3>A long history of serving as the partner of choice for supporting government programs and critical missions worldwide.</h3>
            <div>
                <p>US21 is your trusted partner to design, develop and deliver the right solutions for your programs mission. Our team, that includes numerous retired US Air Force, US Army & US Marines understands the stakes very well. We strive to work with every customer to exceed their expectations and meet the specific requirement of every mission.</p>
                <p>You can always rely on our team’s quick response and trust that you can push forward with any mission on schedule. With hundreds of different customers and programs served over 20 years, we pride ourselves on acting as the trusted partner for supporting programs and missions globally.</p>
            </div>
            <div>
                <h3>PROTECTING THOSE WHO SERVE.</h3>
            </div>
            <h1>GLOBAL MISSION SUPPORT</h1>
            <h3>Global missions are the ones with the highest stakes. You will find us right there beside you.</h3>
            <p>Our team is ready to support your mission in today’s rapidly evolving political environment to guarantee that military, law enforcement and emergency response teams are equipped with the right equipment to optimize mission success. Our dedicated and experienced team or professionals is prepared to support your efforts against the toughest challenges that government agencies face while operating abroad.</p>
            <div>
                <h3>TRUSTED SUPPORT. WHEREVER YOU NEED IT.</h3>
            </div>
        </div>
    )
}