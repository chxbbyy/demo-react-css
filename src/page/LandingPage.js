import { useNavigate } from "react-router-dom";
import eiei from "../assets/images/eiei.jpg";

function LandingPage() {
    const navigate = useNavigate();
    const handleToDetail = () => {
        navigate("/details")

    };

    return (
        <div className="text-center font-mono">
            <p className="text-2xl font-bold uppercase text-white">About Me</p>
            <div className="flex justify-center">
                <img

                    src={eiei}

                    alt="eiei"

                    className="w-[20%] my-3 rounded-full p-6" />

            </div>

            <p className="text-md mt-2 font-bold text-white mx-36">

            kuyy

            </p>

            <br />

            <button className="text-white underline" onClick={() => handleToDetail()}>NEXT</button>

        </div>

    );

 

}

 

export default LandingPage;