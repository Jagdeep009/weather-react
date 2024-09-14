import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useState } from 'react';
import useInfo from "../Context/InfoContext"

export default function LeftBottom() {
    const [curDate, setCurDate] = useState(getDate);

function getDate() {
    const c = new Date();
    const year = c.getFullYear();
    const month = c.getMonth()+1;
    const date = c.getDate();
    return `${date < 10 ? `0${date}` : date}.${month < 10 ? `0${month}` : month}.${year}`;
}
getDate();
const {info} = useInfo()

    return (
        <div className="d-flex justify-content-xl-around mb-10 justify-content-between">
            <span className='d-flex align-items-center'><LocationOnIcon className="me-2" />{info.city}</span>
            <span className='d-flex align-items-center'><CalendarMonthIcon className="me-2" />{curDate}</span>
        </div>
    )
}