// File: PageTwo.jsx
import ContentPageTemplate from './ContentPageTemplate';
import img1 from '../assets/img5.png';
import img2 from '../assets/img6.png';
function PageEighteen() {
  const contentProps = {
    title: "Rocket Facts",
    header: "Famous Successes and Explosions that Shaped Innovation",
    paragraphs: [
        {
            type: "list",
            ordered: true,
            items: [
                "<b>The Apollo 11 mission</b><br>Apollo 11 showcased the United States' technological prowess during the Cold War era. The mission's success demonstrated the feasibility of human space travel and lunar exploration, paving the way for future advancements in space technology and exploration.<br>The success of Apollo 11 led to subsequent lunar missions and laid the groundwork for ongoing exploration initiatives, such as NASA's Artemis program, which aims to return humans to the Moon and eventually journey to Mars. The mission's legacy continues to influence space policy and exploration strategies today.",
                "<b>The Apollo 1 Mission</b><br>On January 27, 1967, a pre-launch test for the Apollo 1 mission ended in disaster. Astronauts Gus Grissom, Ed White, and Roger B. Chaffee were conducting a routine test when a fire broke out in the command module. The pure oxygen environment inside the spacecraft caused the fire to spread rapidly, and the astronauts were unable to escape. The investigation revealed numerous design flaws, including faulty wiring and flammable materials.<br>This tragedy led to significant design and safety overhauls in the Apollo program, ultimately contributing to the success of future missions."
            ]
        }
     ],
    references: [
      {
        url: "https://timesofindia.indiatimes.com/etimes/trending/7-epic-failures-of-nasa-in-history/photostory/113017626.cms​",
        text: "TOI Lifestyle Desk. (2024, September 3). 7 epic failures of NASA in history. The Times of India.",
      }
    ],
    images: [img2, img1],
        imagePositions: {
          img1: 'top-right',
          img2: 'bottom-left'
        }
  };

  return <ContentPageTemplate {...contentProps} />;
}

export default PageEighteen;
