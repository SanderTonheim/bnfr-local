import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import s from "../styles/sponsors.module.css";
import urlFor from "../lib/sanity";
import Link from "next/link";

export default function SecondarySponsors() {
  const [data, setData] = useState([]);
  const URL =
    "https://8rpris03.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22medlem%22%20%26%26%20SecondarySponsor%20%3D%3D%20true%5D%7BSecondarySponsor%2C%20%20slug%2CSecondarysponsorCardText%2C%20name%2C%20%20%20_id%2C%20%20logo%2Ctext%2Ctag%5B%5D-%3E%7B%20'icon'%3Aicon.asset._ref%2C%20'name'%3A%20Name%7D%20%2C%20%20certifications%5B%5D-%3E%2Cconnections%5B%5D-%3E%7BName%2C%20'icon'%3A%20icon.asset._ref%7D%7D";
  const GetMainSponsors = () => {
    axios.get(URL).then((res) => {
      return setData(res.data.result);
    });
  };
  useEffect(() => {
    GetMainSponsors();
  }, []);
  return (
    <>
      <div className={s.container}>
        {data.map((item) => {
          return (
            <Link
              href={"/profile/" + item.slug.current}
              className={s.card}
              key={item._id}
            >
              <img
                className={`${s.logo} ${s.logoSecondary}`}
                src={urlFor(item.logo.asset._ref)}
                alt='item logo'
              />
              {/* <div className={s.text}>{item.SecondarysponsorCardText}</div> */}
            </Link>
          );
        })}
      </div>
      <div className={s.membersButton}>
        <Link className={s.button} href={"/profile"}>
          <button>Se alle medlemmer</button>
        </Link>
      </div>
    </>
  );
}
