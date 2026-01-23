// File: PageTwo.jsx
import ContentPageTemplate from './ContentPageTemplate';
import img1 from '../assets/img9.png';
import img2 from '../assets/img10.png';
function PageFifteen() {
  const contentProps = {
    title: "Gravity and Rocket Flight",
    header: "The Dance Between Rocket and Gravity",
    paragraphs: [
        "Imagine standing at the base of a massive launchpad. The countdown reaches zero. With a thunderous roar, a rocket surges upward, trailing fire and smoke behind it like a fiery arrow aimed at the heavens. But if you look closely, you’ll notice something strange. The rocket doesn’t go straight up forever. Slowly, it starts to curve, bending its path like a graceful dancer leaning into the rhythm of space. Why? This is where the real story begins—a tale of <b>gravity, motion,</b> and a clever maneuver known as the <b>gravity turn</b>.",
        "<b>Once Upon Liftoff</b>",
        "The rocket starts its journey <b>vertically</b>, piercing through the thickest part of Earth’s atmosphere. This part is like pushing through the strongest winds and resistance—it takes power, and it takes precision. But going straight up is only the first act. Very soon after liftoff, the rocket makes its <b>first move—</b>a tiny tilt. It begins to <b>gimbal its engines</b>, slowly rotating itself to face the direction it ultimately wants to go. This tilt marks the start of the <b>gravity turn</b>, one of the smartest tricks in spaceflight.",
        "Instead of forcing the rocket to turn on its own—wasting precious fuel—it lets <b>Earth do some of the work</b>.",
        "<b>Gravity Becomes the Dance Partner</b>",
        "Now here’s where things get really clever. As the rocket speeds up and tilts, <b>Earth’s gravity begins to pull on it</b>, gently tugging it from a straight path into a curve. It’s like the rocket and gravity are in a dance. The rocket leans into the pull, letting gravity guide it into a smoother, more horizontal path.",
        "This is the <b>gravity turn—</b>a maneuver that uses <b>gravity’s natural pull</b> to curve the rocket’s flight path, instead of fighting against it.",
        "Why curve at all? Because rockets don’t want to just go up—they want to go around the Earth. To stay in orbit, a spacecraft must travel sideways, at speeds over <b>28,000 kilometers per hour!</b> That sideways speed keeps it from falling back down. If it only went straight up, it would come right back down again.",
        "By the time the rocket has arched into a horizontal path, it’s already slipping into space, balanced between its incredible speed and Earth’s pull. If it goes fast enough, it <b>never falls back down</b>—it just keeps orbiting, like the Moon around the Earth.",
        "The gravity turn was the secret ingredient. It let gravity lend a helping hand, saving fuel and guiding the rocket with the natural curve of the Earth. In a way, it’s like a slingshot—gravity pulling, the rocket steering, and both moving in perfect harmony.",
        "And that’s how a simple tilt, a graceful curve, and a little help from gravity turn a fiery launch into an orbital ballet."
    ],
    references: [
      {
        url: "https://www.grc.nasa.gov/www/k-12/rocket/TRCRocket/rocket_principles.html​",
        text: "Benson, T. (2021, May 13). Rocket principles. Glenn Research Center, NASA.",
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

export default PageFifteen;
