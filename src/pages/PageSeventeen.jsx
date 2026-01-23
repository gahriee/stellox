// File: PageTwo.jsx
import ContentPageTemplate from './ContentPageTemplate';
import img1 from '../assets/img3.png';
import img2 from '../assets/img4.png';
function PageSeventeen() {
  const contentProps = {
    title: "Orbit, Trajectory, and Reentry",
    header: "How do rockets achieve orbit?",
    paragraphs: [
        "Rockets achieve orbit by following the same basic principles of motion described in Isaac Newton's thought experiments with a cannon on a tall mountain. These ideas form the foundation of orbital mechanics.",
        "To reach orbit, a rocket must do two things: rise high enough above Earth's surface to escape most of the atmosphere, and accelerate fast enough so that as it falls toward Earth due to gravity, it keeps missing it—essentially falling around the planet.",
        "Newton imagined firing a cannonball horizontally from a tall mountain. If the cannonball is fired slowly, it travels a short distance before gravity pulls it down to Earth. With more speed (energy), it travels farther. If given enough speed, the cannonball will fall at the same rate Earth curves away beneath it, never hitting the ground. This is what we call orbit.",
        "In real life, rockets launch upward first to escape the thickest parts of the atmosphere. Then, they tilt sideways and accelerate horizontally. At around 150 kilometers altitude, the air is thin enough to allow stable orbit, and a speed of about 28,000 to 30,000 kilometers per hour (about 17,000 to 19,000 miles per hour) is required to stay in orbit.",
        "Once in orbit, a spacecraft continues to fall toward Earth but never hits it because the surface curves away underneath. It's essentially in free fall. This is why astronauts feel weightless.",
        "Orbits can be adjusted by firing onboard thrusters. Speeding up at the lowest point in orbit (periapsis) raises the highest point (apoapsis), and vice versa. This allows spacecraft to change orbits or even travel between planets. In some missions, aerobraking—a controlled dip into a planet's atmosphere—is used to slow down without using much fuel."
     ],
    references: [
      {
        url: "https://science.nasa.gov/learn/basics-of-space-flight/chapter3-4/​",
        text: "NASA Science. (n.d.). Chapter 3: Gravity & Mechanics. NASA.",
      }
    ],
    images: [img2, img1],
        imagePositions: {
          img1: 'top-left',
          img2: 'bottom-right'
        }
  };

  return <ContentPageTemplate {...contentProps} />;
}

export default PageSeventeen;
