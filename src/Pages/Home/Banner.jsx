import bannerImage from '../../assets/banner-photo.jpg'

const Banner = () => {
    return (
        <div className='relative'>
            <div><img src={bannerImage} alt="" /></div>
            <div className='absolute top-[30%] left-[4%]'>
                <h1 className='text-white left-10 text-[43px] font-extrabold'>Lakhs of <br />
                Happy Marriages</h1>
                <button className='mt-5 px-3 rounded-md py-4 uppercase bg-[#ff9902] font-white font-bold text-[22px] text-white'>register free</button>
            </div>
        </div>
    );
};

export default Banner;