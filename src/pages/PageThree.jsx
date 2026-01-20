// File: PageTwo.jsx
import ContentPageTemplate from './ContentPageTemplate';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';

function PageThree() {
  const contentProps = {
    title: "The V-2 Rocket",
    header: "Birth of Modern Rocketry",
    paragraphs: [
      "In 1923, a visionary named <b>Hermann Oberth</b> penned a book titled <i>The Rocket into Interplanetary Space</i>. It wasn’t just a collection of theories—it became a spark that lit imaginations across the globe. Young dreamers and amateur rocketeers devoured its pages, launching a wave of rocket societies in garages, clubs, and fields.",
      "One of those societies, <b>Verein für Raumschiffahrt—</b>the Society for Space Travel—sprang up in Germany. Their early tinkering, guided by Oberth’s wisdom, would evolve into something far more powerful. By <b>1937</b>, a team of Germany’s top engineers and scientists, including Oberth himself, gathered at <b>Peenemünde</b>, a quiet base on the shores of the Baltic Sea. Under the direction of <b>Wernher von Braun</b>, they built the most advanced rocket of the time: the <b>V-2</b>, also known as the <b>A-4</b>.",
      "The V-2 wasn’t massive by today’s standards, but it was a marvel of engineering. Fueled by <b>liquid oxygen and alcohol</b>, its thin metal skin inflated when filled with fuel. Once launched, it roared skyward, soaring <b>50 miles high</b> and striking targets <b>hundreds of miles away</b> with a <b>one-ton warhead</b>. Its power was enough to flatten entire city blocks—London felt the brunt of its force in the final years of <b>World War II</b>.",
      "Luckily for the Allies, the V-2 came too late to alter the course of the war. But the ideas behind it—ideas first imagined in Oberth’s book—were just beginning to take flight. As Germany fell, <b>unused V-2 rockets</b> and their blueprints were seized by the victors. The scientists behind them? Divided. Some were taken by the <b>Soviet Union</b>. Others, including <b>von Braun</b> and <b>Georg von Tiesenhausen</b>, came to the <b>United States—</b>and were stunned by the progress made by American rocketry pioneer <b>Robert Goddard</b>.",
      "Now, rockets became more than weapons. They were keys to the sky. At <b>Redstone Arsenal in Huntsville, Alabama</b>, von Braun and his team began building America’s future in space. They started small, with <b>sounding rockets</b> to study the atmosphere—an idea Goddard once had. But the dreams grew bigger. Soon, <b>intercontinental ballistic missiles</b> like the <b>Redstone, Atlas, and Titan</b> weren’t just aimed at Earth-bound enemies—they launched the first Americans into orbit.",
      "And just like that, from the pages of a book to the silence of space, the rocket had found its destiny."
    ],
    references: [
      {
        url: "https://www.grc.nasa.gov/www/k-12/rocket/BottleRocket/20thBeyond.htm",
        text: "NASA Glenn Research Center. (n.d.). Rocket history – 20th century and beyond. NASA. "
      },
    ],
    images: [img5, img6],
    imagePositions: {
      img1: 'top-left',
      img2: 'bottom-right'
    }
  };

  return <ContentPageTemplate {...contentProps} />;
}

export default PageThree;
