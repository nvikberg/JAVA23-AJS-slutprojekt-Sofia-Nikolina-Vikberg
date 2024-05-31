import HeroesPic from "./HeroesPic";

function HeroesCard({superHero}) {

    const { imgUrl } = superHero;

    return (
        <div>
            <HeroesPic imgUrl={imgUrl} />
        </div>
    )


}


export default HeroesCard;