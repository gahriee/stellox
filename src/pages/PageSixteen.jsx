// File: PageTwo.jsx
import ContentPageTemplate from './ContentPageTemplate';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
function PageSixteen() {
  const contentProps = {
    title: "Stages of a Rocket Launch",
    header: "Step by Step: The Anatomy of a Rocket Launch",
    paragraphs: [
        {
            type: "list",
            ordered: true,
            items: [
                "<b>The Journey Begins: Transport to the Launchpad</b><br>The rocket’s adventure starts as it’s carefully moved from its assembly site to the launchpad—sometimes vertically, but often horizontally on a transporter. Once in place, it’s lifted upright, standing proudly against the sky.",
                "<b>Powering Up the Beast</b><br>Hours before launch, the rocket is powered up. Engineers run system checks on every wire, circuit, and control—making sure the rocket is alive, healthy, and ready for what’s ahead.",
                "<b>Reading the Skies: Weather Briefing</b><br>The skies must be just right. Meteorologists provide regular updates not only for the launch site but also for the flight path and potential emergency zones. A final weather check is given minutes before launch.",
                "<b>Clearing the Area: Launch Site Evacuation</b><br>As the countdown inches closer, ground crews evacuate. Pressurized tanks, chilling systems, and volatile fuels make the area dangerous. By two to three hours before launch, only essential systems remain.",
                "<b>Fueling Up: Propellant Loading</b><br>Liquid fuel and oxidizers—like RP-1, liquid oxygen, or liquid hydrogen—are pumped into the rocket. Cryogenic fuels chill the engines. It’s a delicate and essential process that happens in phases.",
                "<b>Running on Its Own: Internal Power</b><br>At about T-5 minutes, the rocket disconnects from external power and switches to internal batteries or fuel cells. Now, it stands on its own—completely ready for flight.",
                "<b>The Final Go: Readiness Poll</b><br>The flight director checks in with all teams—engineers, weather, systems—one last time. If everyone gives the “go,” the final countdown begins.",
                "<b>Ignition and Liftoff</b><br>Engines roar to life, and at zero, the rocket rises from the Earth. Slowly at first, then faster, it pierces the sky, shedding gravity’s grip.",
                "<b>Precision in Motion: Roll and Pitch Maneuver</b><br>Within seconds of clearing the tower, the rocket performs a roll and pitch. This aligns it with its planned flight path and begins the gravity turn, setting it on the optimal arc to orbit.",
                "<b>Breaking Barriers: Supersonic Speed</b><br>Around 80 seconds after liftoff, the rocket goes supersonic, crossing the sound barrier and shaking the air around it.",
                "<b>Max Q: The Toughest Moment</b><br>At about 90 seconds, the rocket reaches Max Q—maximum aerodynamic pressure. It throttles down slightly to reduce stress, surviving the hardest moment of flight.",
                "<b>MECO: Main Engine Cut-Off</b><br>Roughly three minutes in, the first stage engines shut down—MECO. They’ve done their job and it’s time to hand over the mission.",
                "<b>First Stage Separation</b><br>With a burst from explosive bolts or a push from pneumatic pistons, the first stage detaches and falls away, making room for the next.",
                "<b>Second Stage Ignition</b><br>The second stage engine lights up, continuing the journey deeper into space. Depending on the mission, this engine may fire more than once.",
                "<b>SECO: Second Engine Cut-Off</b><br>After the burn is complete, the second engine shuts off—this is SECO. The rocket now coasts in orbit, almost weightless, with Earth far below.",
                "<b>Opening the Shell: Payload Fairing Separation</b><br>The nose cone or fairing splits and falls away, no longer needed. The rocket is now above the atmosphere, and the payload is free to face space.",
                "<b>Mission Accomplished: Payload Deployment</b><br>Finally, the rocket’s true purpose is fulfilled. The satellite, spacecraft, or probe is released into orbit—or on a path to the Moon, Mars, or beyond.",
            ]
        },
        "<b>Breakdown of the Stages of a Rocket Launch: Lift-Off, Staging, Orbital Insertion and the Physics Behind Each Step</b>",
        {
            type: "list",
            ordered: true,
            items: [
                "<b>Lift-off</b><br>More than 300 years ago, a scientist named Isaac Newton laid out three basic laws that describe the way things move. Newton’s Third Law says that for every action, there is an equal and opposite reaction. This is the most important idea behind how rockets work.<br>Exhaust is the flames, hot gases and smoke that come from burning the rocket’s propellants. The exhaust pushes out of a rocket’s engine down toward the ground. That’s the action force. In response, the rocket begins moving in the opposite direction, lifting off the ground. That’s the reaction force.",
                "<b>Staging</b><br>A space-bound rocket is typically a stack of several separate rocket stages, each stage much smaller than the previous stage. Once the first stage has used up all its fuel, the whole stage is discarded and the next rocket stage begins to operate. In this manner, the rocket behaves as though it's ejecting almost all its mass as rocket exhaust.<br>With the help of several stages and lots of fuel, rockets can travel substantially faster than their exhaust velocities and reach Earth orbit or the solar system beyond.",
                "<b>Orbital Insertion</b><br>Let’s say you want to launch a satellite that orbits Earth. The rocket will launch, and when it gets to a specific distance from Earth, it will release the satellite.<br>The satellite stays in orbit because it still has momentum—energy it picked up from the rocket—pulling it in one direction. Earth’s gravity pulls it in another direction. This balance between gravity and momentum keeps the satellite orbiting around Earth.<br>Satellites that orbit close to Earth feel a stronger tug of Earth’s gravity. To stay in orbit, they must travel faster than a satellite orbiting farther away.",   
            ]
        }
    ],
    references: [
      {
        url: "https://spaceplace.nasa.gov/launching-into-space/en/​",
        text: "NASA Space Place. (n.d.). How do we launch things into space? NASA.",
      },
      {
        url: "https://headedforspace.com/steps-in-an-rocket-launch/​",
        text: "Wessels, W. (n.d.). The steps or procedures involved in an orbital rocket launch. Headed For Space.",
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

export default PageSixteen;
