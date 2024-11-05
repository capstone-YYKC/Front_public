import { useMemo } from "react";
import styles from "./Day9Icon.module.css";
import React, {useState, useCallback, useEffect} from "react";
import DiaryCheckPopup from "../components/DiaryCheckPopup_1";
import PortalPopup from "../components/PortalPopup";

const Day9Icon = ({ propTop, propLeft, diaryStatus, diaryContent, diaryConsolation, diarySummary, diaryDay }) => {
  const [isDiaryCheckPopupOpen, setDiaryCheckPopupOpen] = useState(false);
  const openDiaryCheckPopup = useCallback(() => {
    setDiaryCheckPopupOpen(true);
  }, []);
  const closeDiaryCheckPopup = useCallback(() => {
    setDiaryCheckPopupOpen(false);
  }, []);
  const day9IconStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const [imageSrc, setImageSrc]=useState('/day9.svg');
  //1: 슬픔, 2: 기쁨, 3: 화남
  useEffect(() => {
    switch(diaryStatus){
      case '슬픔':
        setImageSrc('/day91.svg');
        break;
      case '행복':
        setImageSrc('/day92.svg');
        break;
      case '화남':
        setImageSrc('/day93.svg');
        break;
      default:
        setImageSrc('/day9.svg');
    }
  }, [diaryStatus]);

  return (
    <>
      <img
        className={styles.day9Icon}
        alt=""
        src={imageSrc}
        style={day9IconStyle}
        onClick={openDiaryCheckPopup}
        
    />
      {isDiaryCheckPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDiaryCheckPopup}
        >
          <DiaryCheckPopup onClose={closeDiaryCheckPopup}diaryContent={diaryContent} diaryConsolation={diaryConsolation} diarySummary={diarySummary} diaryDay={diaryDay} />
        </PortalPopup>
      )}
    </>
  );
};

export default Day9Icon;
