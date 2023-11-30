import { useLoaderData } from "react-router-dom";


const Details = () => {
    const loadBiodata = useLoaderData();

    const { Name, BiodataID, _id, ProfileImage, PermanentDivision, Age, Occupation, BiodataType } = loadBiodata[0];
   
    return (
        <div>
            <div className="max-w-screen-xl mx-auto">
            <div className="flex gap-10">
                <div><img className="max-w-[400px] h-[400px]" src={ProfileImage} alt="" /></div>
                <div>
                    <p className="text-[30px] font-bold my-2">Name:{Name}</p>
                    <p className="text-[20px] font-semibold">Gender:{BiodataType}</p>
                    <p className="text-[20px] font-semibold  my-2">Age:{Age}</p>
                    <p className="text-[20px] font-semibold">Profession:{Occupation}</p>
                    <p className="text-[20px] font-semibold  my-2">Division:{PermanentDivision}</p>
                    <p className="text-[20px] font-semibold">Languages:English,Bangla,Hindi</p>
                    <p className="text-[20px] font-semibold  my-2">Favorite Food: Fuska, badam, chotpoti, jhalmuri, pizza, burger etc.</p>
                </div>
            </div>
            <div className="my-10"><p className="tex-[16px] font-semibold text-justify">Meet Jasper Thornfield, a dazzling enigma wrapped in a cloak of mystery. With iridescent eyes that seem to hold secrets of distant galaxies, Jasper is a time traveler disguised as a modern-day wanderer. Sporting a wardrobe straight out of a fantasy novel, this individual seamlessly blends steampunk aesthetics with futuristic flair.

                Jasper's hair, a cascade of shimmering strands reminiscent of a unicorn's mane, changes colors with every passing emotion, creating a mesmerizing spectacle. Legend has it that Jasper possesses the ability to communicate with plants, convincing them to burst into bloom at a mere whisper.

                A polymath of the highest order, Jasper is said to have mastered forgotten languages, unlocking the wisdom of ancient civilizations. Rumors swirl that they have an uncanny knack for predicting the future, predicting events with an accuracy that defies logic.

                Despite their enigmatic nature, Jasper is known for their eccentric generosity, showering friends with ethereal gifts that seem to materialize out of thin air. Whether it's a potion brewed under a full moon or a personalized constellation map, Jasper Thornfield is the epitome of a cosmic enchanter, weaving magic into the fabric of everyday life.</p></div>
        </div>
        </div>
    );
};

export default Details;