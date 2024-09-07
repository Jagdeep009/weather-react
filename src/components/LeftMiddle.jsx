

export default function LeftMiddle({info} ) {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <h1>{info.temp}&deg;</h1>
            <h2 className='text-capitalize ms-md-0 ms-3'>{info.weather}</h2>
        </div>
    )
}