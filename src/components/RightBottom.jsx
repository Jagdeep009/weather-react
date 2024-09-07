import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';

export default function RightBottom() {
    return (
        <div className='d-flex flex-md-column align-items-center gap-md-0 gap-5 pt-md-0 pt-4 res-bor px-md-0 px-3'>
            <h4 className="fw-300 color-grey mb-0 mb-md-4">More from Jagdeep</h4>
            <div className="d-flex flex-wrap gap-2 projects">
                <a href="">
                    <AccountCircleOutlinedIcon />
                    <p className='mt-2 mb-0 let-sp-2'>Portfolio</p>
                </a>
                <a href="">
                    <NewspaperOutlinedIcon />
                    <p className='mt-2 mb-0 let-sp-2'>NewsLetter</p>
                </a>
                <a href="">
                    <WebOutlinedIcon />
                    <p className='mt-2 mb-0 let-sp-2'>Blog Manager</p>
                </a>
                <a href="">
                    <LibraryMusicOutlinedIcon />
                    <p className='mt-2 mb-0 let-sp-2'>Sangeet</p>
                </a>
            </div>
        </div>
    );
}