// import { getHeroesImage } from "../../utils/superHeroesApi";
// import { useState, useEffect } from "react";


// function HeroImage() {
//     const [heroImage, setHeroImage] = useState('');

//     useEffect(() => {
//         async function fetchHeroImage() {
//             try {
//                 const imageUrl = await getHeroesImage();
//                 setHeroImage(imageUrl);
//             } catch (error) {
//                 console.error('error fetching imgage', error)
//             }
//         }

//         fetchHeroImage();
//     }, []);

//     return (
//         <div>
//             {heroImage && <img src={heroImage} alt="Hero" />}
//         </div>
//     );
// }

// export default HeroImage;