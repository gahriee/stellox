// File: PageTwo.jsx
import ContentPageTemplate from './ContentPageTemplate';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';

function PageTwo() {
  const contentProps = {
    title: "The V-2 Rocket",
    header: "V-2 as the First Successful Long-range Guided Missile.",
    paragraphs: [
      "The V-2 missile, developed in Nazi Germany during World War II, was the world's first liquid-fueled rocket, ballistic missile, and the first object to reach space. Assembled underground by concentration camp prisoners, it carried a tragic cost—more people died building it than from its attacks.",
      "Though it failed as a weapon, the V-2 marked a major technological leap, sparking the space race between the Soviet Union and the United States. From its dark origins came the foundation for reaching the stars.",
      "During World War II, Germany developed the V-2 rocket—dubbed the \"Vengeance Weapon\"—powered by a revolutionary engine. This engine used high-speed pumps to rapidly push large amounts of fuel into the thrust chamber, making it a major technical breakthrough.",
      "Though born from war, its design didn't end there. After the conflict, the engine's technology helped shape the future of American rocketry, becoming a key part of the journey toward space exploration."
    ],
    references: [
      {
        url: "https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/195894/v-2-rocket/",
        text: "National Museum of the U.S. Air Force. (n.d.). V-2 Rocket. U.S. Air Force."
      },
      {
        url: "https://airandspace.si.edu/multimedia-gallery/rise-and-fall-vengeance-weapon-2",
        text: "Smithsonian National Air and Space Museum. (2017, August 1). The rise and fall of Vengeance Weapon 2. Smithsonian Institution."
      }
    ],
    images: [img3, img4],
    imagePositions: {
      img1: 'top-right',
      img2: 'bottom-left'
    }
  };

  return <ContentPageTemplate {...contentProps} />;
}

export default PageTwo;
