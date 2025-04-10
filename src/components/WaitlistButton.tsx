"use client";

import { FC, useState } from "react";
import styles from "../app/page.module.css";
import WaitlistModal from "./WaitlistModal";

const WaitlistButton: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button className={styles.button} onClick={() => setIsModalOpen(true)}>
        Join the Waitlist
      </button>
      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default WaitlistButton;
