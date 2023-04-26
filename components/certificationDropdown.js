import { useState } from "react";

import s from "../styles/modal.module.css";

export default function CertificationsDropdown() {
  const [isModal, setIsModal] = useState(false);
  const contentClassname = isModal
    ? s.modalWrapper
    : `${s["hidden"]} ${s.modalWrapper}`;
  return (
    <>
      <section className={s.subFilter}>
        <button className={s.subBtn} onClick={() => setIsModal(!isModal)}>
          Sertifiseringar
        </button>
        <div className={`${s.modalWrapper} ${contentClassname}`}>
          <section className={s.modalFlex}>
            <section className={s.categoriesList}>
              <a className={s.categoriesBtn}>ISO</a>
              <a className={s.categoriesBtn}>Svanemerket</a>
              <a className={s.categoriesBtn}>Miljøfyrtårn</a>
            </section>
          </section>
        </div>
      </section>
    </>
  );
}
