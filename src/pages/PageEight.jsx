// File: PageTwo.jsx
import ContentPageTemplate from './ContentPageTemplate';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import contentImg1 from '../assets/change.png';
import contentImg2 from '../assets/gyroscope.jpg';
function PageEight() {
  const contentProps = {
    title: "Rocket Parts",
    header: "The Guidance System",
    paragraphs: [
      "The rocket’s guidance system is like its brain, packed with sensors, computers, radar, and communication tools. During launch, it has two main jobs: first, to keep the rocket steady as it rises, and second, to steer it along the right path as it soars through the sky. It’s the system that ensures the rocket stays on course, no matter what. ",
      "<b>Gyroscopes, sensors, and how rockets stay on course</b>",
      "Gyroscopes are one type of motion sensing device. They are capable of sensing movements that are difficult for humans to detect, such as rotation and changes in orientation.",
      {
        src: contentImg1,
        size: 'half',
        alt: "Change in Angle"
      },
      "Gyro sensors, also known as angular velocity sensors, can detect changes in rotation angle per unit of time. This makes it possible to detect quantities such as the direction of rotation, rotation angle, and vibration. Gyro sensors are found in smartphones, digital cameras, game consoles, car navigation systems, robots, industrial equipment, and wherever else features such as vibration detection, camera shake correction, and attitude control are needed.",
      "<b>What Did the V-2 Use?</b>",
      {
        src: contentImg2,
        size: 'half',
        alt: "Gyroscope"
      },
      "Let me tell you how the V-2 rocket knew where to go. Hidden inside was a small but powerful piece of technology—a gyroscope, part of its guidance system developed by German engineers during World War II. As the rocket launched, the gyroscope tracked its acceleration, calculating how fast it was moving. Then, at just the right speed, the system sent a signal to shut off the engine. From that moment, the V-2 coasted silently through the sky, following a ballistic path all the way to its target—guided by momentum and early ingenuity."
],
    references: [
      {
        url: "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/guidance-system/",
        text: "NASA Glenn Research Center. (n.d.). Guidance system. NASA.",
      },
      {
        url: "https://corporate.epson/en/technology/search-by-products/microdevice/gyro-sensor.html​",
        text: "Seiko Epson Corporation. (n.d.). Gyro sensors."
      },
      {
        url: "https://airandspace.si.edu/collection-objects/accelerometer-gyroscopic-v-2/nasm_A19880369000",
        text: "Smithsonian National Air and Space Museum. (n.d.). Accelerometer, gyroscopic V-2. National Air and Space Museum."
      },
    ],
    images: [img6, img5],
        imagePositions: {
          img1: 'top-left',
          img2: 'bottom-right'
        }
  };

  return <ContentPageTemplate {...contentProps} />;
}

export default PageEight;
