// File: PageTwo.jsx
import ContentPageTemplate from './ContentPageTemplate';
import img9 from '../assets/img9.png';
import img10 from '../assets/img10.png';
function PageTen() {
  const contentProps = {
    title: "Rocket Parts",
    header: "Chemistry in Combustion",
    paragraphs: [
      "<b>Types of Rocket Engines (Liquid, Solid, Hybrid)</b>",
      {
        type: 'list',
        ordered: true,
        items: [
            "<b>Solid</b><br>In a solid fuel rocket, the fuel and oxidizer are already mixed and packed as a solid inside the combustion chamber—this solid is called the propellant grain. How fast it burns depends on the type of fuel and how much surface area is exposed. To control this, the center of the grain is usually hollow. A star-shaped hollow is often used to expose more surface and keep the burn steady, ensuring a smooth and even thrust as the rocket fires.",
            "<b>Liquid</b><br>Liquid propellant rocket engines work by storing liquid fuel—like liquid hydrogen or kerosene—and a liquid oxidizer, such as liquid oxygen, in separate tanks. When it’s time to fire, both are pumped into the combustion chamber through special injection nozzles. There, they mix quickly, react, and create the fiery force that propels the rocket. One big advantage of this setup? Control. By adjusting how fast the fuel flows into the chamber, engineers can control the amount of thrust the engine produces—giving rockets a level of flexibility that solid fuel systems can't match.",
            "<b>Hybrid</b><br>In a hybrid propellant system, the setup is a mix of both solid and liquid fuel technologies. The fuel is stored as a solid inside the combustion chamber, while the oxidizer—kept in liquid form—is stored separately in a pressurized tank. When it’s time to launch, a valve opens, releasing the oxidizer into the chamber. As it flows in, it reacts with the solid fuel, creating the thrust needed to propel the rocket forward. It’s a simpler and often safer alternative, combining the stability of solid fuel with the control of liquid systems."
        ]
      },
      "<b>What Did the V-2 Use?</b>",
      {
        type: 'list',
        ordered: true,
        items: [
            "V-2 Rocket used large liquid rocket engines. ",
            "The V-2 rocket used steam-powered turbopumps—one for liquid oxygen, one for alcohol—driven by a chemical reaction between sodium permanganate and hydrogen peroxide. Producing 580 horsepower at 3,800 RPM, the pumps delivered 128 pounds of alcohol and 159 pounds of liquid oxygen to the combustion chamber every second.",
        ]
      },
    ],
    references: [
      {
        url: "https://www.sciencelearn.org.nz/resources/393-types-of-chemical-rocket-engines",
        text: "Science Learning Hub. (2015, May 20). Types of chemical rocket engines. The University of Waikato.",
      },
    ],
    images: [img10, img9],
        imagePositions: {
          img1: 'top-left',
          img2: 'bottom-right'
        }
  };

  return <ContentPageTemplate {...contentProps} />;
}

export default PageTen;
