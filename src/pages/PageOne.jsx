// File: PageOne.jsx
import ContentPageTemplate from './ContentPageTemplate';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';

function PageOne() {
  const contentProps = {
    title: "Who Made the Rocket?",
    header: "Wernher von Braun: Visionary or Villain?",
    paragraphs: [
      "Let me tell you the story of <b>Dr. Wernher von Braun</b>, a pioneer of space exploration. As a young boy, he was inspired by Hermann Oberth's book The Rocket into Interplanetary Space. Eager to understand rocket science, he taught himself calculus and trigonometry. By 1928, he joined the German Society for Space Travel, and in 1932, he began working with the German army to develop liquid-fueled rockets. His research earned him a doctorate in physics in 1934.",
      "However, his story also has a darker side—he joined an SS equestrian unit in the early 1930s, became a Nazi Party member in 1937, and a junior SS officer by 1940. Driven by his dream to reach the stars, von Braun's life was a mix of scientific brilliance and complex moral choices."
    ],
    references: [
      {
        url: "https://www.nasa.gov/people/wernher-von-braun/",
        text: "NASA. (n.d.). Wernher von Braun. NASA."
      }
    ],
    images: [img1, img2],
    imagePositions: {
      img1: 'top-left',
      img2: 'bottom-right'
    }
  };

  return <ContentPageTemplate {...contentProps} />;
}

export default PageOne;
