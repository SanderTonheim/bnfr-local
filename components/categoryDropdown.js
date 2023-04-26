import { useState } from "react";

import s from "../styles/modal.module.css";

export default function CategoryDropdown() {
  const [isModal, setIsModal] = useState(false);
  const contentClassname = isModal
    ? s.modalWrapper
    : `${s["hidden"]} ${s.modalWrapper}`;
  return (
    <>
      <section className={s.subFilter}>
        <button className={s.subBtn} onClick={() => setIsModal(!isModal)}>
          Kategoriar
        </button>
        <div className={`${s.modalWrapper} ${contentClassname}`}>
          <section className={s.modalFlex}>
            <section className={s.categoriesList}>
              <a className={s.categoriesBtn}>Advokattjenestar</a>
              <a className={s.categoriesBtn}>Bygg & Anlegg</a>
              <a className={s.categoriesBtn}>Handel & Service</a>
              <a className={s.categoriesBtn}>Havbruk</a>
              <a className={s.categoriesBtn}>Helse & Trening</a>
              <a className={s.categoriesBtn}>IKT</a>
              <a className={s.categoriesBtn}>Industri</a>
              <a className={s.categoriesBtn}>Infrastruktur & Eigendom</a>
              <a className={s.categoriesBtn}>Kultur</a>
              <a className={s.categoriesBtn}>Kunst & Handverk</a>
              <a className={s.categoriesBtn}>Maritim</a>
              <a className={s.categoriesBtn}>Matproduksjon</a>
              <a className={s.categoriesBtn}>Media & Kommunikasjon</a>
              <a className={s.categoriesBtn}>Offentleg</a>
              <a className={s.categoriesBtn}>Olje & Gass</a>
              <a className={s.categoriesBtn}>Reiseliv</a>
              <a className={s.categoriesBtn}>Rådgjevning</a>
              <a className={s.categoriesBtn}>Transport</a>
              <a className={s.categoriesBtn}>Utdanning</a>
              <a className={s.categoriesBtn}>Økonomi & Investering</a>
            </section>
          </section>
        </div>
      </section>
    </>
  );
}
