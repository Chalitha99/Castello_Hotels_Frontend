
'use client';

import { Rating } from 'flowbite-react';
import Navigationbar from '../components/Navigationbar';
import Footerbar from '../components/Footerbar';
import Ratingcard from '../components/Ratingcard';
import "../css/ratingpage.css";

function Ratings() {
    return (
        <>
            <Navigationbar />
            <div className="background-photo">
                <div className="flex">
                    <Ratingcard />
                    <Ratingcard />
                    <Ratingcard />
                    <Ratingcard />
                    <Ratingcard />
                </div>

                <Rating.Advanced percentFilled={70} className="mb-2">
                    5 star
                </Rating.Advanced>
                <Rating.Advanced percentFilled={2} className="mb-2">
                    4 star
                </Rating.Advanced>
                <Rating.Advanced percentFilled={8} className="mb-2">
                    3 star
                </Rating.Advanced>
                <Rating.Advanced percentFilled={4} className="mb-2">
                    2 star
                </Rating.Advanced>
                <Rating.Advanced percentFilled={1}>1 star</Rating.Advanced>

                <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
                <Footerbar />
            </div>

        </>
    );
}
export default Ratings;