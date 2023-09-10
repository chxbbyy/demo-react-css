import logo from "../assets/icons/profile.png"
import instagram from "../assets/icons/instagram.png";
import line from "../assets/icons/line.png";
import Facebook from "../assets/icons/social.png"

const Navber = () => {
    return(
        <div className="flex justify-between items-center">
            <img src={logo} alt="logo" width={50} className="cursor-pointer" />
            <ul className="hidden md:flex">
                <li className="px-2">
                    <a href="https://www.facebook.com/" target="_blank">
                        <img src={Facebook} alt="facebook" width={30}  />

                    </a>
                </li>
                <li className="px-2">
                    <a href="https://line.me/th/" target="_blank">
                    <img src={line} alt="line" width={30} />
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://www.instagram.com/" target="_blank">
                    <img src={instagram} alt="instagram" width={30} />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navber;