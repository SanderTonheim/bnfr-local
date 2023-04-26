import s from "../styles/home.module.css";
import Search from "../components/search";
import MainSponsors from "../components/mainSponsors";
import arrow from "../assets/arrow.svg";
import Image from "next/image";
import { Autocomplete } from "@react-google-maps/api";
import figure from "../assets/frontPageFigure.png";
import SecondarySponsors from "../components/secondarySponsors";
import icons from "../assets/icons";

const Home = () => {
  return (
    <main className={s.mainContainer}>
      <section className={s.section_1}>
        <div className={s.content}>
          <p className={s.header}>Våre samarbeidspartnare</p>
          <img className={s.figure} src={figure.src} alt='figure' />
        </div>
      </section>

      <section className={s.section_2}>
        <div className={s.arrow}>
          <Image src={arrow} width={100} alt='site illustration' />
        </div>
        <Search />

        <div className={s.sponsorHeading}>
          <h2>Hovudsamarbeidspartnare</h2>
          <img src={icons.mainSponsor.src} alt='Main Sponsors' />
        </div>
        <div>
          <MainSponsors />
        </div>
        <div className={s.sponsorHeading}>
          <h2>Samarbeidspartnare</h2>
          <img src={icons.secondarySponsor.src} alt='Main Sponsors' />
        </div>
        <div>
          <SecondarySponsors />
        </div>
      </section>
    </main>
  );
};

export default Home;
