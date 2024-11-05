import styles from "./SummaryModal.module.css";
import axios from 'axios';
import React, {useState, useEffect} from 'react';

const SummaryModal = ({diarySummary}) => {
  return (
    <div className={styles.SummaryModal}>
      <div className={styles.div}>{diarySummary}</div>

    </div>
  );
};

export default SummaryModal;
