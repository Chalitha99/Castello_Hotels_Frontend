
'use client';

import { Rating } from 'flowbite-react';
import Navigationbar from '../components/Navigationbar';
import Footerbar from '../components/Footerbar';
import Ratingcard from '../components/Ratingcard';
import "../css/ratingpage.css";
import Paginationforrating from '../components/Paginationforrating';

function Ratings() {
    return (
        <>
            <Navigationbar />
            <div className="background-photo h-screen h-[100%]">
                <div className='middle-content'>
                    <div className="flex">
                        <Ratingcard />
                        <Ratingcard />
                        <Ratingcard />
                        <Ratingcard />
                        <Ratingcard />
                    </div>
                    <Paginationforrating />
                    <div className="starrating">
                        <Rating.Advanced percentFilled={50} className="mb-2">
                            5 star
                        </Rating.Advanced>
                        <Rating.Advanced percentFilled={37} className="mb-2">
                            4 star
                        </Rating.Advanced>
                        <Rating.Advanced percentFilled={8} className="mb-2">
                            3 star
                        </Rating.Advanced>
                        <Rating.Advanced percentFilled={4} className="mb-2">
                            2 star
                        </Rating.Advanced>
                        <Rating.Advanced percentFilled={1}>1 star</Rating.Advanced>
                        <p className="globle_rating">1,745 Global Ratings</p>
                    </div>

                </div>

                <Footerbar />
            </div>

        </>
    );
}
export default Ratings;