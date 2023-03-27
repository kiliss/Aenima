import "./Footer.css";
import InstagramIcon from "../Svgs/InstagramIcon/InstagramIcon";
import FacebookIcon from "../Svgs/FacebookIcon/FacebookIcon";
import Logo from "../Svgs/LogoViajesBlanco/Logo";

function Footer() {
  return (
    <footer className="footer">
      <div className="Logo">
        <Logo />
      </div>
      <div className="Icons">
        <InstagramIcon />
        <FacebookIcon />
      </div>
    </footer>
  );
}

export default Footer;
