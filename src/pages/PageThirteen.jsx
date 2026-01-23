// File: PageTwo.jsx
import ContentPageTemplate from './ContentPageTemplate';
import img1 from '../assets/img5.png';
import img2 from '../assets/img6.png';
import hague from '../assets/hague.png';
function PageThirteen() {
  const contentProps = {
    title: "Blast from the Hague!",
    header: "",
    paragraphs: [
        {
            src: hague,
            alt: "Hague"
        },
        "On September 7, 1944, the first two V-2 rockets aimed at Paris failed due to early engine shutdowns. The first successful strike occurred the next morning at 8:30 a.m., landing near Porte d'Italie. Later that day, at 6:43 p.m., another rocket hit Chiswick, a suburb about six miles west of central London. Both rockets were launched from the Hague-Wassenaar area in occupied Holland. With its combat debut, the missile was officially designated the V-2. During the peak bombardment in February–March 1945, an average of 60 rockets were launched weekly at England.",
      ],
    images: [img1, img2],
        imagePositions: {
          img1: 'top-left',
          img2: 'bottom-right'
        }
  };

  return <ContentPageTemplate {...contentProps} />;
}

export default PageThirteen;
