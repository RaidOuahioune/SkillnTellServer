import { Teamswiper } from "../Swiper/swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Wave from "react-wavify";
import "./footer.css";

export function Footer() {
  return (
    <footer className="flex flex-column justify-content-center">
      <div className="flex flex-col text-center justify-center md:flex-row">
        <div className="flex flex-column">
          <div class="text-block">
            <h1>Meet our team</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis, esse provident adipisci magni consequuntur quibusdam
              sit reprehende.
            </p>

          </div>
          <button id="join"> Join our Events</button>
        </div>

        <Teamswiper></Teamswiper>
      </div>

      <FooterWave pageName={"home"}></FooterWave>
    </footer>
  );
}

export const FooterWave = ({ pageName }) => {
  return (
    <div className="wave-wrapper">
      <Wave
        fill="#FF9100"
        id="wave"
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.1,
          points: 2,
        }}
      />
      {/*<div className="flex flex-column">*/}
      <div
        className={`social flex justify-content-center ${
          pageName === "event" ? "pt-5" : ""
        } `}
      >
        <a href="https://discord.gg/SSQWgXTtHb" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faDiscord} size="2x" className="mx-3 md:mx-5" />
        </a>
        <a href="https://www.instagram.com/skillntell.club/?hl=en" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            className="mx-3 md:mx-5"
          ></FontAwesomeIcon>
        </a>
        <a href="https://www.linkedin.com/in/skill-and-tell-club-b5a051251/"  target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            className="mx-3 md:mx-5"
          ></FontAwesomeIcon>
        </a>
      </div>
    </div>
  );

  {
    /*<div className="footer-paragraph">
      <p>Copyright</p>
      </div>*/
  }
};
