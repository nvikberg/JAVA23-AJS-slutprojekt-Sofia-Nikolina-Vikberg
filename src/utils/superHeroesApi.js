async function getHeroesImage(){

    const url = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/63-batgirl.jpg`;

    const res = await fetch (url);
    // const heroData = await res.json();

    return url;
}

export {getHeroesImage}