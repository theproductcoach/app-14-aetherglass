"use client";

import { FC } from "react";
import styles from "../app/page.module.css";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>

        <h3>Join the Waitlist</h3>
        <p className={styles.modalDescription}>
          Be among the first to experience the future of augmented reality. Join
          the waitlist for early access and exclusive updates.
        </p>

        <form onSubmit={handleSubmit} className={styles.waitlistForm}>
          <div className={styles.formGroup}>
            <input
              type="text"
              placeholder="Full Name"
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="email"
              placeholder="Email Address"
              required
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Join Waitlist
          </button>
          <p className={styles.disclaimer}>
            Your email will be used exclusively for AetherGlass updates and
            notifications.
          </p>
        </form>
      </div>
    </div>
  );
};

export default WaitlistModal;
