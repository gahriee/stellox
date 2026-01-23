// File: PageFourteen.jsx
import ContentPageTemplate from './ContentPageTemplate';
import img1 from '../assets/img7.png';
import img2 from '../assets/img8.png';

function PageFourteen() {
  const contentProps = {
    title: "V-2 Rocket",
    header: "The First Strike of a New Era in Warfare",
    paragraphs: [
        "<center>Come check out this video, it’s a blast!</center>",
        // Add the video object here:
        {
            type: 'video',
            src: "https://www.youtube.com/embed/VY9YlEpxCJY", 
            title: "V-2 Rocket Launch Footage"
        },
        
    ],
    references: [
        {
            url: "https://youtu.be/Au7yzMAgXks",
            text: "YouTube. (2019, January 1). V2 Rocket Launch 1440p 48fps [Video]."

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

export default PageFourteen;