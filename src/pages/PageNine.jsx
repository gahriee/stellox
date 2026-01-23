// File: PageTwo.jsx
import ContentPageTemplate from './ContentPageTemplate';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import contentImg1 from '../assets/math10.png';
function PageNine() {
  const contentProps = {
    title: "Rocket Parts",
    header: "The Propulsion System",
    paragraphs: [
      "Imagine a rocket getting ready to launch—all its parts working together in perfect sync. At its heart is the propulsion system—fuel tanks, pumps, propellants, and the rocket nozzle—all designed for one purpose: to create thrust.",
      "Thrust is the force that lifts the rocket off the ground and carries it into space. It’s all thanks to Newton’s third law: for every action, there’s an equal and opposite reaction. As the engine pushes gas out at high speed, the rocket is pushed in the opposite direction. The faster and more gas it ejects, the stronger the thrust. It’s a powerful chain reaction that turns fuel into flight.",
      "<b>Types of Rocket Propulsion</b>",
      {
        type: 'list',
        ordered: true,
        items: [
            "<b>Liquid-fuel chemical propulsion –</b> Uses liquid fuel and oxidizer stored in separate tanks.",
            "<b>Solid fuel chemical propulsion –</b> Fuel and oxidizer are mixed together in solid form.",
            "<b>Cold-gas chemical propulsion –</b> Releases compressed gas through a nozzle to create thrust.",
            "<b>Ion propulsion –</b> Uses electric fields to accelerate charged particles, offering efficient, long-term thrust."
        ]
      },
      "<b>Understanding Rocket Acceleration – The Basics</b>",
      "The acceleration of a rocket can be described with this formula:",
      {
        src: contentImg1,
        size: "half",
        alt: "Formula"
      },
      "<b>What Affects a Rocket’s Acceleration?</b>",
      {
        type: 'list',
        ordered: true,
        items: [
            "Higher exhaust velocity (ve) leads to greater thrust.",
            "Faster fuel consumption (higher Δm/Δt) means stronger acceleration.",
            "Decreasing mass (as fuel burns) lets the rocket accelerate more easily over time.",
        ]
      },
    ],
    references: [
      {
        url: "https://byjus.com/physics/rocket-propulsion/",
        text: "BYJU’S. (n.d.). Rocket propulsion – Definition, diagram, types, example.",
      },
      {
        url: "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/propulsion-system/",
        text: "NASA Glenn Research Center. (n.d.). Propulsion system. NASA."
      },
    ],
    images: [img8, img7],
        imagePositions: {
          img1: 'top-right',
          img2: 'bottom-left'
        }
  };

  return <ContentPageTemplate {...contentProps} />;
}

export default PageNine;
