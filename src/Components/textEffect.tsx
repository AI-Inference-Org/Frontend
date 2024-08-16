import styles from "../styles/landing.module.css";

const Landing = () => {
  return (
    <div className="space-y-12 pb-6 pt-[4rem] lg:pt-[12rem]  text-[#062056]">
      <div className="font-heading text-2xl font-bold">
        Services offered
        <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden text-6xl">
          <span
            className={`${styles.animate_word} col-span-full row-span-full`}
          >
            Inference Deployments
          </span>
          <span
            className={`${styles.animate_word_delay_1} col-span-full row-span-full`}
          >
            Auto Web Apps
          </span>
          <span
            className={`${styles.animate_word_delay_2} col-span-full row-span-full`}
          >
            REST API Integration
          </span>
          <span
            className={`${styles.animate_word_delay_3} col-span-full row-span-full`}
          >
            Plugin Generation
          </span>
          <span
            className={`${styles.animate_word_delay_4} col-span-full row-span-full`}
          >
            Compute Bidding
          </span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
