// File: PageTwo.jsx
import ContentPageTemplate from './ContentPageTemplate';
import img1 from '../assets/img3.png';
import img2 from '../assets/img4.png';
function PageTwelve() {
  const contentProps = {
    title: "Structural System",
    header: "Materials in Rockets",
    paragraphs: [
      "In the world of rockets, materials play a vital role in determining their efficiency, strength, and longevity. Every component, from the fuel tank to the engine, is designed with carefully selected materials that can withstand extreme conditions. Let’s take a journey through the materials that help rockets defy gravity and venture into the unknown.",
      {
        type: 'list',
        ordered: true,
        items: [
            "<b>Titanium Alloys</b><br>Titanium alloys are like the unsung heroes of rocket construction. With their perfect balance of strength and lightness, they are used in critical parts like airframes, engines, and fuel tanks. Imagine the pressure a rocket faces during launch—the heat, the vibrations, the weight. Titanium steps in, keeping everything together, while also being resistant to corrosion. Its high melting point makes it a tough player, ready to face the intense stresses of space travel.",
            "<b>Carbon-Carbon Composites</b><br>Now, for the parts that face the hottest challenges: enter carbon-carbon composites. These materials are built for the extreme heat rockets encounter, especially during re-entry or in rocket engines. Created by reinforcing carbon fiber with graphite, they can endure temperatures over 3000°C without losing their strength. Think of them as the ultimate heat-resistant shield for rocket nozzles and heat shields, ensuring everything stays intact as the rocket burns through the atmosphere.",
            "<b>Inconel (Nickel-based Alloys)</b><br>Next up is Inconel, a family of nickel-based superalloys. If a rocket component needs to operate under extreme heat and pressure—like the combustion chamber or turbine blades—Inconel is the material of choice. With its resistance to thermal expansion and oxidation, Inconel keeps working even when temperatures soar, ensuring rocket engines perform without faltering.",
            "<b>Aluminum-Lithium Alloys</b><br>Weight matters in rocket design, and that's where aluminum-lithium alloys come in. These alloys are lighter than traditional aluminum but offer extra strength and stiffness, making them perfect for rocket structures like fuselages and propellant tanks. By reducing weight without compromising strength, aluminum-lithium alloys help rockets carry more fuel and payload, giving them the fuel efficiency needed to reach faraway destinations.",
            "<b>Ceramic Matrix Composites (CMCs)</b><br>Ceramic matrix composites (CMCs) are the ultimate protectors in thermal environments. These materials endure mind-blowing temperatures while keeping their integrity intact, making them perfect for rocket nozzles, nose cones, and heat shields. Resistant to oxidation, CMCs thrive in the harshest re-entry or engine conditions, ensuring rockets don’t melt under pressure.",
            "<b>Ablative Materials</b><br>Sometimes, protecting a rocket is all about controlled erosion. Ablative materials are designed to gradually burn away, absorbing heat as they go. These materials are a rocket’s first line of defense during re-entry, where temperatures can skyrocket to 2000°C. As the ablative material erodes, it carries the heat away, protecting the rest of the rocket from the intense heat.",
            "<b>Graphene Composites</b><br>In the world of cutting-edge technology, graphene is making waves. This single layer of carbon atoms is incredibly strong, lightweight, and a great conductor of heat. Researchers are exploring how graphene composites can boost the structural integrity of rockets, especially in areas like fuel tanks and heat shields. It's the material of the future, potentially revolutionizing rocket design and efficiency.",
            "<b>Niobium-Based Superalloys</b><br>For those high-temperature areas where durability is essential, niobium-based superalloys shine. These materials are designed for rocket nozzles and thrust chambers, capable of handling temperatures above 1000°C. Their resistance to oxidation makes them crucial for long-duration missions, especially when rockets venture into deep space.",
            "<b>Reinforced Polymers</b><br>Sometimes, rocket parts need to be both flexible and strong. That’s where reinforced polymers come in. These advanced materials are used in insulation, seals, and structural components, providing a balance of strength and lightness. They resist chemical corrosion from rocket fuels, making them perfect for specific applications where durability is key.",
            "<b>Hydrogen-Resistant Alloys</b><br>Cryogenic fuels, like liquid hydrogen, can be tough on materials, causing them to become brittle in extreme cold. But hydrogen-resistant alloys, such as certain stainless steel or nickel-based alloys, can withstand these extreme conditions without losing strength. These alloys are essential for parts that store or transport cryogenic propellants, ensuring that the rocket’s fuel system remains intact under freezing temperatures.<br>Each of these materials plays a unique and critical role in rocket design, allowing spacecraft to endure extreme conditions, defy gravity, and embark on missions beyond our world. Whether it’s withstanding the heat of re-entry, the cold of space, or the stresses of launch, these materials are the backbone of every successful mission.",
        ]
      },
      "<b>The V-2 Rocket: Numbers Forged in Steel and Fire</b>",
      "In the 1940s, the V-2 rocket soared as the world’s first long-range guided missile—a terrifying feat of engineering wrapped in steel and smoke. Standing <b>46 feet tall</b> with a <b>5.5-foot diameter</b>, the V-2 launched at a hefty <b>13,000 kg</b>. Its frame was built from <b>steel</b>, guided by <b>graphite jet vanes</b>, and even used <b>wood</b> in parts of the fuselage—a mix of strength and wartime ingenuity. Surprisingly, <b>aluminum tanks weren’t used</b>, relying instead on heavier but reliable metals. Fueled by <b>8,179 pounds of ethyl alcohol</b> and <b>10,802 pounds of liquid oxygen</b>, the V-2 burned through <b>286 pounds of fuel every second. Hydrogen peroxide, sodium permanganate, and nitrogen gas</b> played key supporting roles—pressurizing tanks and triggering ignition systems. At launch, it produced <b>55,100 pounds of thrust</b>, accelerating with <b>0.9 g</b> of force. Its engine blazed at <b>2,650°C</b>, reaching a <b>top speed of 5,400 km/h</b> and an altitude of <b>96 km</b>. The <b>65-second burn</b> powered a deadly payload: a <b>738 kg warhead</b>, just <b>7.5%</b> of its total weight, but enough to change history. The V-2 was more than a missile—it was the prototype for spaceflight. Its materials and stats told a story of ambition, power, and a future written in fire."
    ],
    references: [
      {
        url: "https://www.v2rocket.com/start/makeup/design.html​",
        text: "Dungan, T. (n.d.). A-4/V-2 makeup: Tech data & markings. V2ROCKET.COM",
      },
      {
        url: "https://airandspace.si.edu/collection-objects/missile-surface-surface-v-2-4/nasm_A19600342000​",
        text: "National Air and Space Museum. (n.d.). Missile, surface-to-surface, V-2 (A-4). Smithsonian Institution. ",
      }
    ],
    images: [img1, img2],
        imagePositions: {
          img1: 'top-right',
          img2: 'bottom-left'
        }
  };

  return <ContentPageTemplate {...contentProps} />;
}

export default PageTwelve;
