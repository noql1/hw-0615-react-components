import { ReactComponent as StarWarsLogoSVG } from "../assets/starwarslogo.svg";
import { ReactComponent as IconSearchSVG } from "../../assets/icon-search.svg";
import { ReactComponent as FacebookLogoSVG } from "../../assets/facebook.svg";
import { ReactComponent as InstagramLogoSVG } from "../../assets/instagram.svg";
import { ReactComponent as TwitterLogoSVG } from "../../assets/twitter.svg";
import { ReactComponent as YoutubeLogoSVG } from "../../assets/youtube.svg";

export const Header =()=> {
  return (
  <header>
    <div className="links-layout">

      <a
        className="link"
        href="https://www.facebook.com/StarWars"
        target="_blank"
        alt="facebook_logo"
        rel="noreferrer"
      >
        <FacebookLogoSVG />
                  </a>

      <a
        className="link"
        href="https://www.instagram.com/starwars/"
        target="_blank"
        alt="instagram_logo"
        rel="noreferrer"
      >
        <InstagramLogoSVG />
      </a>
      <a
        className="link"
        href="https://twitter.com/starwars"
        target="_blank"
        alt="facebook_logo"
        rel="noreferrer"
      >
        <TwitterLogoSVG />
      </a>
      <a
        className="link"
        href="https://www.youtube.com/user/starwars"
        target="_blank"
        alt="facebook_logo"
        rel="noreferrer"
      >
        <YoutubeLogoSVG />
      </a>
    </div>
    <StarWarsLogoSVG />
    <div className="search-layout">
      <IconSearchSVG className="search-icon" />
      <input placeholder="Search Star Wars" type="text" />
      <div style={{ color: "white", paddingTop: "1rem" }}>I am fan of:</div>
    </div>
  </header>
  )
}