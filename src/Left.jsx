import LeftBottom from "./components/LeftBottom";
import LeftMiddle from "./components/LeftMiddle";
import LeftTop from "./components/LeftTop";
import "./Left.css";

export default function Left({updateInfo,info}) {
    return (
        <div className="col-xl-9 col-md-8 col-12 Left p-5 px-xl-2 px-5">
            <LeftTop info={info.city} />
            <LeftBottom updateInfo={updateInfo}/>
            <LeftMiddle info={info} />
        </div>
    )
}