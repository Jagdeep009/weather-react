import LeftBottom from "./components/LeftBottom";
import LeftMiddle from "./components/LeftMiddle";
import LeftTop from "./components/LeftTop";
import "./Left.css";

export default function Left() {
    
    return (
        <div className="col-xl-9 col-md-8 col-12 Left p-3 px-xl-2 px-sm-5 px-3 p-sm-5">
            <LeftTop/>
            <LeftBottom />
            <LeftMiddle/>
        </div>
    )
}