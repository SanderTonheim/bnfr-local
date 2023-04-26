import { useState } from "react";

import s from "../styles/modal.module.css";
import CategoryDropdown from "./categoryDropdown";
import CertificationsDropdown from "./certificationDropdown";
import ConnectionsDropdown from "./connectionsDropdown";

export default function MobileFilter() {
  const [isModal, setIsModal] = useState(false);
  const contentClassname = isModal
    ? s.modalWrapper
    : `${s["hidden"]} ${s.modalWrapper}`;
  return (
    <>
      <section className={s.modal}>
        <button className={s.btn} onClick={() => setIsModal(!isModal)}>
          Filter
        </button>
        <div className={`${s.modalWrapper} ${contentClassname}`}>
          <CategoryDropdown />
          <CertificationsDropdown />
          <ConnectionsDropdown />
        </div>
      </section>
    </>
  );
}
