import Link from "next/link";
import s from "../styles/footer.module.css";
import azets from "../assets/mainSponsorsLogo/azets.svg";
import ecit from "../assets/mainSponsorsLogo/ECIT.svg";
import framo from "../assets/mainSponsorsLogo/FRAMO.svg";
import spv from "../assets/mainSponsorsLogo/SPV.svg";
import sands from "../assets/mainSponsorsLogo/sands.svg";

export default function Footer() {
  const mainSponsorsLogo = [azets, ecit, framo, spv, sands];
  return (
    <div className={s.footer}>
      <h2>Meld deg på vårt nyhetsbrev</h2>
      <div className={s.newsLetter}>
        <input type="text" placeholder="Fornavn" />
        <input type="text" placeholder="Etternavn" />
        <input type="text" placeholder="Epost*" />
        <input type="text" placeholder="Firma" />
        <button>Abonner</button>
      </div>
      <h1>Våre samarbeidspartnere</h1>
      <div className={s.logos}>
        {mainSponsorsLogo.map((item) => {
          return <img key={item.src} src={item.src} alt="logo" />;
        })}
      </div>

      <ul className={s.contactInfo}>
        <li>Mobil: 94150169</li>
        <li>Email: synnove@bjornafjordennaringsrad.no</li>
        <li>
          Nettside:{" "}
          <a href="https://www.bjornafjordennaringsrad.no">
            bjornafjordennaringsrad.no
          </a>
        </li>
      </ul>
    </div>
  );
}
