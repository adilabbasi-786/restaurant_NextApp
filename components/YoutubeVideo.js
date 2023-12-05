import Image from "next/image";
import videoImg from "../images/about-video.jpg";
const YoutubeVideo = () => {
  const videoId = "8PJ3_p7VqHw"; // Extracted from the YouTube video URL

  return (
    <div className="about__video set-bg" data-setbg="img/about-video.jpg">
      <Image src={videoImg} />

      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
        title="YouTube Video"
      ></iframe>
    </div>
  );
};

export default YoutubeVideo;
