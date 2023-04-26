import s from "../styles/searchBtn.module.css";

// ----- Tilknytninger ----- //

export function ConnectionsBtn() {
  return <button className={s.filterBtn}>Tilknytningar</button>;
}

// ----- Tags/Kategorier ----- //

export function TagsBtn() {
  return <button className={s.filterBtn}>Kategoriar</button>;
}

// ----- Sertifiseringer ----- //

export function CertificationsBtn() {
  return <button className={s.filterBtn}>Sertifiseringar</button>;
}
