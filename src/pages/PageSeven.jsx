// File: PageTwo.jsx
import ContentPageTemplate from './ContentPageTemplate';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';

function PageSeven() {
  const contentProps = {
    title: "Rocket Parts",
    header: "The Payload System",
    paragraphs: [
      "Rockets have always carried payloads based on their mission. In the beginning, they launched fireworks to celebrate special occasions, and ideas like booster staging came from trying to send them higher. But during World War II, fireworks turned into deadly explosives, like those used in the German V-2 rocket.",
      "After the war, rockets shifted once again. Countries started creating guided missiles with nuclear warheads as their payloads. But soon, the same technology was repurposed for peaceful purposes—launching satellites into space for communication, weather monitoring, exploration, and more. What was once a weapon became a tool for discovery.",
      "<b>Function and Connection to Meteorology, Satellites, and Data Collection</b>",
       {
    type: 'list',
    ordered: true,
    items: [
      "Payload includes instruments and devices intended to operate in space such as <b>satellites</b>. These devices orbit the Earth and are used for communication, weather monitoring, and navigation. Rockets must be designed to carry these heavy and often delicate instruments safely into orbit.",
      "Satellite monitors severe weather events like hurricanes and wildfires, contributing to disaster preparedness and response, like the GOES-19, Launched by NOAA.",
      "The satellite constellation, called <b>Cosmic (for Constellation Observing System for Meteorology, Ionosphere and Climate)</b>, uses available GPS radio signals to collect data on atmospheric temperature, water vapor and electron density.",
      "<b>Satellite data</b> enables efficient mapping and monitoring of the Earth’s resources, ecosystems, and events. The information can be used for various scientific, administrative and commercial applications."
    ]
  }
],
    references: [
      {
        url: "https://www.wired.com/2007/01/tiny-satellites-watch-earth-warm/",
        text: "Hudson, J. (2007, January 11). Tiny satellites watch Earth warm. WIRED.",
      },
      {
        url: "https://www.iceye.com/satellite-data",
        text: "ICEYE. (n.d.). How to use satellite data for better decision making"
      },
      {
        url: "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/payload-systems/",
        text: "National Aeronautics and Space Administration. (2023, November 20). Payload systems. NASA Glenn Research Center."
      },
      {
        url: "https://www.thetimes.com/uk/environment/article/spacex-satellite-will-help-us-prepare-for-natural-disasters-t9wxkfctw?utm_source=chatgpt.com&region=global",
        text: "Plester, J. (2024, July 20). SpaceX satellite will help us prepare for natural disasters. The Times."
      },
      {
        url: "https://www.bookbaker.com/en/v/Rockets-Exploring-the-Wonders-of-Space-Parts-of-a-Rocket/8a719fa1-ece2-4030-8ac6-8985799c96cc/4http://heroicrelics.org/info/v-2/v-2-cut-away/v-2-iwm-cut-away.jpg",
        text: "Unknown. (n.d.). Parts of a rocket (Chap. 4). In Rockets: Exploring the wonders of space. BookBaker."
      }
    ],
    images: [img4, img3],
        imagePositions: {
          img1: 'top-right',
          img2: 'bottom-left'
        }
  };

  return <ContentPageTemplate {...contentProps} />;
}

export default PageSeven;
