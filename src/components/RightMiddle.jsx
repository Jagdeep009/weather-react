import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

export default function RightMiddle({info}){
    return (
        <div className="mb-md-5 px-4 middle color-grey col-md-12 col-6">
            <ul>
                <li><span className='fw-500'><AirOutlinedIcon className='me-2'/>{info.wind}kmph</span><span className='ms-2 fst-italic'>Wind</span></li>
                <li><span className='fw-500'><WaterDropOutlinedIcon className='me-2'/>{info.humidity}%</span><span className='ms-2 fst-italic'>Humidity </span></li>
                <li><span className='fw-500'><VisibilityOutlinedIcon className='me-2'/>{info.visibility/1000}km</span><span className='ms-2 fst-italic'>Visibility </span></li>
            </ul>
            <p className='fw-500 let-sp-2'>Feels like <span className='fw-600'>{info.feelsLike}&deg;</span></p>
            <h3 className='fw-400 text-capitalize d-md-block d-none'>{info.weather}</h3>
        </div>
    );
}