// File: PageTwo.jsx
import ContentPageTemplate from './ContentPageTemplate';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';

function PageFour() {
  const contentProps = {
    title: "The V-2 Rocket",
    header: "V-2 to Sputnik: The Rocket That Launched a Race",
    paragraphs: [
      "The story of space exploration began not with peace, but with war. During World War II, Nazi Germany unveiled the <b>V-2 rocket</b>, the world’s first long-range ballistic missile. Created by <b>Wernher von Braun</b>, it marked a leap in technology—reaching the edge of space before crashing down on cities.",
      "When the war ended, both the <b>United States</b> and the <b>Soviet Union</b> rushed to claim Germany’s rocket secrets. Under <b>Operation Paperclip</b>, von Braun and his team were brought to the U.S., where they would later help launch America’s space program. Meanwhile, in the U.S.S.R., a brilliant engineer named <b>Sergei Korolev</b> led the development of their own rockets, based partly on captured German tech.",
      "Then, on <b>October 4, 1957</b>, the world changed forever. The Soviet Union launched <b>Sputnik</b>, the first artificial satellite, into orbit. It beeped from above every 96 minutes, proving the Soviets had taken the lead in the new <b>Space Race</b>. The Cold War had reached space.",
      "The U.S. responded with <b>Explorer 1</b> in January 1958, using a rocket designed by von Braun’s team. It discovered the <b>Van Allen radiation belts</b>, marking America’s first scientific achievement in orbit.",
      "But behind these breakthroughs lay a complicated past. Von Braun and others had once worked for the Nazi regime, and the U.S. quietly downplayed their history to gain a technological edge. At the same time, lesser-known heroes like <b>Katherine Johnson, Josephine Jue</b>, and others—women and people of color—were doing the critical calculations that powered spaceflight forward.",
      "The V-2 may have started as a weapon, but it became the blueprint for the rockets that would carry humanity to the stars. From war to wonder, it lit the path from Earth to orbit—and beyond."
    ],
    references: [
      {
        url: "https://education.nationalgeographic.org/resource/history-space-exploration/",
        text: "National Geographic Education. (n.d.). The history of the space race."
      },
    ],
    images: [img7, img8],
    imagePositions: {
      img1: 'top-right',
      img2: 'bottom-left'
    }
  };

  return <ContentPageTemplate {...contentProps} />;
}

export default PageFour;
