// File: PageTwo.jsx
import ContentPageTemplate from './ContentPageTemplate';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import contentImg from '../assets/germanrocket.jpg'
function PageSix() {
  const contentProps = {
    title: "The V-2 Rocket",
    header: "Inside the V-2: Anatomy of the World’s First Long-Range Guided Missile",
    paragraphs: [
      "Explore the inner workings of the V-2 rocket, Nazi Germany’s groundbreaking wartime innovation and the precursor to modern space exploration. This detailed cutaway diagram reveals the complex systems—from the alcohol-fueled engine to the gyroscopic guidance and warhead control—that made the V-2 the first man-made object to reach the edge of space.",
        {
        src: contentImg,
        alt: "German Rocket",
      },
    ],
    references: [
      {
        url: "http://heroicrelics.org/info/v-2/v-2-cut-away/v-2-iwm-cut-away.jpg",
        text: "Heroic Relics. (n.d.). V-2 cut-away (Imperial War Museum) [Image]. HeroicRelics.org."
      },
    ],
    images: [img2, img1],
    imagePositions: {
      img1: 'top-right',
      img2: 'bottom-left'
    }
  };

  return <ContentPageTemplate {...contentProps} />;
}

export default PageSix;
