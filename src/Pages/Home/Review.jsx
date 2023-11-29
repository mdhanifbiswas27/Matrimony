import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'



const Review = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className="max-w-screen-xl mx-auto  py-10">
            <h1 className="my-8 text-center font-medium text-[40px]">Our Website the No.1 choice for finding your life partner</h1>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper max-w-[1000px] h-[300px] flex items-center">

                {
                    review.map((item, index) => <SwiperSlide key={index}>
                        <div className="grid grid-cols-2 px-10 mx-auto  items-center max-w-[840px] ">
                            <div className=""><img className="h-[270px] w-[420px] rounded-tl-lg rounded-bl-lg" src={item.coupleImage} alt="" /></div>
                            <div className="bg-white h-[270px] w-[400px] p-5 rounded-tr-lg rounded-br-lg">
                                <p className="text-[25px] font-semibold">{item.name}</p>
                                <p className="text-[16px] font-semibold">Marriage Date:{item.marriageDate}</p>
                                
                                <p className="my-2"><Rating
                                    style={{ maxWidth: 180 }}
                                    value={item.reviewStar}
                                    readOnly
                                /></p>
                                <p className="text-[16px] font-semibold text-justify">{item.successStoryText}</p>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Review;