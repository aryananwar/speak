import { Link } from "react-router-dom";
import { ChartSquareBarIcon, MicrophoneIcon, AdjustmentsIcon, ClipboardCheckIcon } from "@heroicons/react/solid";
import "../Styles/Navigation.css";

function Navigation() {
    return (
        <div className="Content">
            <Link to="/">
                <ChartSquareBarIcon fill="white" className="h-5 w-5" />
            </Link>
            <br />
            <Link to="/practice">
                <MicrophoneIcon fill="white" className="h-5 w-5" />
            </Link>
            <br />
            <Link to="/Review">
                <ClipboardCheckIcon fill="white" className="h-5 w-5" />
            </Link>
            <br />
            <Link to="/Settings">
                <AdjustmentsIcon fill="white" className="h-5 w-5" />
            </Link>
        </div>
    )
}

export default Navigation;