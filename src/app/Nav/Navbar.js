import "./NavBar.css";


export default function navBar() {
    return (
        <div className="nav fixed z-10 h-24 flex items-center w-full">
            <img src="media/logo.png" className="text-danger w-16 text-2xl mx-10"></img>
            <ul className="flex justify-end items-center w-3/4 pr-4">
                <li className="text-white text-2xl mx-10"><a href="/">Home</a></li>
                <li className="text-white text-2xl mx-10"><a href="/About">About</a></li>
                <li className="text-white text-2xl mx-10"><a href="/Services">Services</a></li>
                <li className="text-white text-2xl mx-10"><a href="/Contact">Contact Us</a></li>
            </ul>
            
        </div>
    );
}