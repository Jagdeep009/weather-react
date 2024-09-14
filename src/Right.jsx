import RightBottom from "./components/RightBottom";
import RightMiddle from "./components/RightMiddle";
import RightTop from "./components/RightTop";
import "./Right.css";

export default function Right() {
    return (
        <div className="col-xl-3 col-md-4 col-12 Right p-xl-5 p-sm-4 py-4 px-3 text-center d-flex flex-md-column flex-wrap">
            <RightTop />
            <RightMiddle />
            <RightBottom />
        </div>
    )
}