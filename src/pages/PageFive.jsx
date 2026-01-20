// File: PageTwo.jsx
import ContentPageTemplate from './ContentPageTemplate';
import img9 from '../assets/img9.png';
import img10 from '../assets/img10.png';

function PageFive() {
  const contentProps = {
    title: "The V-2 Rocket",
    header: "V-2’s Impact on Post-War Science",
    paragraphs: [
      "The V-2 rocket greatly aided U.S. development of nuclear missiles and space boosters. After WWII, captured V-2s and over 100 German engineers, including Wernher von Braun, were brought to the U.S. for Project Hermes at White Sands, New Mexico. Through 70 test launches, the U.S. gained valuable experience in rocket ballistics and atmospheric studies, paving the way for advanced missiles, satellites, and human spaceflight to the moon.",
    ],
    references: [
      {
        url: "https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/196637/post-war-testing-and-development/",
        text: "National Museum of the U.S. Air Force. (2015, May 1). Post-war testing and development. U.S. Air Force."
      },
    ],
    images: [img9, img10],
    imagePositions: {
      img1: 'top-left',
      img2: 'bottom-right'
    }
  };

  return <ContentPageTemplate {...contentProps} />;
}

export default PageFive;
