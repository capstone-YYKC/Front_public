import styles from "./DiaryCheckPopup_4.module.css";
import axios from 'axios';
import React, {useState, useEffect} from 'react';

const DiaryCheckPopup = () => {
  return (
    <div className={styles.diaryCheckPopup}>
      <div className={styles.div}>5월 22일 일기</div>
      <div className={styles.diaryCheckPopupChild} />
      <div className={styles.diaryCheckPopupItem} />
      <div className={styles.diaryCheckPopupInner} />
      <div className={styles.div1}>요약</div>
      <img className={styles.polygonIcon} alt="" src="/polygon-7.svg" />
      <div className={styles.div2}>{`곰곰이: `}</div>
      <img className={styles.icon} alt="" src="/-1@2x.png" />
    </div>
  );
};

export default DiaryCheckPopup;
