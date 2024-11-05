import styles from "./Component.module.css";

const Component = () => {
  return (
    <div className={styles.component1}>
      <div className={styles.component1Child} />
      <div className={styles.div}>주간 감정 그래프</div>
      <div className={styles.component1Item} />
      <div className={styles.component1Inner} />
      <div className={styles.lineDiv} />
      <img className={styles.lineIcon} alt="" />
      <div className={styles.div1}>0</div>
      <div className={styles.div2}>날짜</div>
      <div className={styles.div3}>
        <p className={styles.p}>기분</p>
        <p className={styles.p}>점수</p>
      </div>
      <div className={styles.component1Child1} />
      <div className={styles.component1Child2} />
      <div className={styles.component1Child3} />
      <div className={styles.component1Child4} />
      <div className={styles.component1Child5} />
      <div className={styles.component1Child6} />
      <div className={styles.component1Child7} />
    </div>
  );
};

export default Component;
