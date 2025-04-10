import styles from "./page.module.css";
import Image from "next/image";
import Navbar from "../components/Navbar";
import WaitlistButton from "../components/WaitlistButton";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className={`${styles.section} ${styles.heroSection}`}>
        <div className={styles.sectionContent}>
          <h1 className={styles.heading}>AETHERGLASS</h1>
          <p className={styles.description}>
            Explore the world with clarity. Real-time translation, contextual
            guidance, and immersive direction — all through a single lens.
          </p>

          <div className={styles.imageContainer}>
            <Image
              src="/homepage-hero.png"
              alt="AETHERGLASS smart glasses in use"
              width={900}
              height={506}
              className={styles.heroImage}
              priority
            />
          </div>

          <WaitlistButton />
        </div>
      </section>

      {/* Use Cases Section */}
      <section
        id="use-cases"
        className={`${styles.section} ${styles.useCasesSection}`}
      >
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionHeading}>Endless Possibilities</h2>
          <p className={styles.sectionSubtitle}>
            See more. Understand more. Do more.
          </p>

          {/* Travel & Navigation Use Case */}
          <div className={styles.useCaseFeatured}>
            <div className={styles.useCaseImageContainer}>
              <Image
                src="/travel-navigation.png"
                alt="AetherGlass in Tokyo guiding a traveller with AR directions"
                width={800}
                height={533}
                className={styles.useCaseImage}
              />
            </div>

            <div className={styles.useCaseContent}>
              <h3>Travel & Navigation</h3>
              <p>
                Navigate unfamiliar cities with confidence as AETHERGLASS
                provides real-time translation and contextual directions that
                adapt to your surroundings.
              </p>

              <div className={styles.useCaseFeatures}>
                <div className={styles.useCaseFeature}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span>Real-time navigation with AR overlays</span>
                </div>

                <div className={styles.useCaseFeature}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
                  </svg>
                  <span>Instant translation of signs and menus</span>
                </div>

                <div className={styles.useCaseFeature}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <span>Contextual information about landmarks</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Use Case */}
          <div className={`${styles.useCaseFeatured} ${styles.reversed}`}>
            <div className={styles.useCaseImageContainer}>
              <Image
                src="/professional-case.png"
                alt="Professional using AETHERGLASS in a business meeting with AR data overlays"
                width={800}
                height={533}
                className={styles.useCaseImage}
              />
            </div>

            <div className={styles.useCaseContent}>
              <h3>Innovation for Industry</h3>
              <p>
                Enhance your professional capabilities with real-time data
                access and seamless information overlay during meetings,
                presentations, and networking events.
              </p>

              <div className={styles.useCaseFeatures}>
                <div className={styles.useCaseFeature}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                  <span>Real-time meeting notes and summaries</span>
                </div>

                <div className={styles.useCaseFeature}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                  <span>Instant participant information</span>
                </div>

                <div className={styles.useCaseFeature}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                    <path d="M7 12h2v5H7zm4-3h2v8h-2zm4-3h2v11h-2z" />
                  </svg>
                  <span>Live data visualisation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Educational Use Case */}
          <div className={styles.useCaseFeatured}>
            <div className={styles.useCaseImageContainer}>
              <Image
                src="/educational-case.png"
                alt="Student using AETHERGLASS to learn with interactive AR educational content"
                width={800}
                height={533}
                className={styles.useCaseImage}
              />
            </div>

            <div className={styles.useCaseContent}>
              <h3>Learning Reimagined</h3>
              <p>
                Transform any environment into an interactive learning space
                with rich, contextual information and immersive educational
                experiences.
              </p>

              <div className={styles.useCaseFeatures}>
                <div className={styles.useCaseFeature}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                  </svg>
                  <span>Interactive 3D learning models</span>
                </div>

                <div className={styles.useCaseFeature}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                  </svg>
                  <span>Real-time code visualization</span>
                </div>

                <div className={styles.useCaseFeature}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 5h-3.2L15 3H9L7.2 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14h-16V7h4.2l1.8-2h4l1.8 2H20v12zM12 17c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3z" />
                  </svg>
                  <span>AR lab experiments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section id="tech" className={`${styles.section} ${styles.techSection}`}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionHeading}>Visionary Tech</h2>
          <p className={styles.sectionSubtitle}>
            Where innovation meets intuition.
          </p>

          <div className={styles.useCaseFeatured}>
            <div className={styles.useCaseImageContainer}>
              <Image
                src="/advanced-optics.png"
                alt="AETHERGLASS advanced optics system with crystal clear display"
                width={800}
                height={533}
                className={styles.useCaseImage}
              />
            </div>

            <div className={styles.useCaseContent}>
              <h3>Advanced Optics</h3>
              <p>
                Experience crystal clear display technology that seamlessly
                blends digital information with your natural vision, providing
                unparalleled visual clarity and comfort.
              </p>

              <div className={styles.useCaseFeatures}>
                <div className={styles.useCaseFeature}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                  </svg>
                  <span>Ultra-HD Resolution Display</span>
                </div>

                <div className={styles.useCaseFeature}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
                  </svg>
                  <span>Adaptive Brightness Control</span>
                </div>

                <div className={styles.useCaseFeature}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34-3-3-3z" />
                    <path d="M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
                  </svg>
                  <span>Anti-glare Coating</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.useCaseFeatured} ${styles.reversed}`}>
            <div className={styles.useCaseImageContainer}>
              <Image
                src="/ai-processing.png"
                alt="AETHERGLASS AI processing visualization"
                width={800}
                height={533}
                className={styles.useCaseImage}
              />
            </div>

            <div className={styles.useCaseContent}>
              <h3>Real-Time AI</h3>
              <p>
                Powered by cutting-edge neural processing units, AETHERGLASS
                delivers real-time analysis and insights while ensuring your
                data stays private and secure.
              </p>

              <div className={styles.useCaseFeatures}>
                <div className={styles.useCaseFeature}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z" />
                  </svg>
                  <span>On-device Neural Processing</span>
                </div>

                <div className={styles.useCaseFeature}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                  </svg>
                  <span>Enhanced Privacy Protection</span>
                </div>

                <div className={styles.useCaseFeature}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z" />
                  </svg>
                  <span>Real-time Processing</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.useCaseFeatured}>
            <div className={styles.useCaseImageContainer}>
              <Image
                src="/ergonomic-design.png"
                alt="AETHERGLASS ergonomic design showcase"
                width={800}
                height={533}
                className={styles.useCaseImage}
              />
            </div>

            <div className={styles.useCaseContent}>
              <h3>Designed for You</h3>
              <p>
                Meticulously crafted for all-day comfort, AETHERGLASS combines
                lightweight materials with customizable fit options to ensure a
                perfect experience for every user.
              </p>

              <div className={styles.useCaseFeatures}>
                <div className={styles.useCaseFeature}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z" />
                  </svg>
                  <span>Lightweight Construction</span>
                </div>

                <div className={styles.useCaseFeature}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
                  </svg>
                  <span>Adjustable Fit System</span>
                </div>

                <div className={styles.useCaseFeature}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
                  </svg>
                  <span>Premium Materials</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preorder Section */}
      <section
        id="preorder"
        className={`${styles.section} ${styles.preorderSection}`}
      >
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionHeading}>Join the Future</h2>
          <p className={styles.sectionSubtitle}>
            Be among the first to experience the future
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="/preorder.png"
              alt="AETHERGLASS preorder preview"
              width={800}
              height={533}
              className={styles.preorderImage}
            />
          </div>
          <WaitlistButton />
          <p className={styles.finePrint}>
            *Limited spots available for early access.
          </p>
        </div>
      </section>
    </main>
  );
}
