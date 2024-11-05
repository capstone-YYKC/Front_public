import { useMemo } from "react";
import styles from "./Day1Icon.module.css";
import React, {useState, useCallback, useEffect} from "react";
import DiaryCheckPopup from "../components/DiaryCheckPopup_1";
import PortalPopup from "../components/PortalPopup";

const Day1Icon = ({ propTop, propLeft, diaryStatus, diaryContent, diaryConsolation, diarySummary, diaryDay }) => {
  const [isDiaryCheckPopupOpen, setDiaryCheckPopupOpen] = useState(false);
  const openDiaryCheckPopup = useCallback(() => {
    setDiaryCheckPopupOpen(true);
  }, []);
  const closeDiaryCheckPopup = useCallback(() => {
    setDiaryCheckPopupOpen(false);
  }, []);
  const day1IconStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const [imageSrc, setImageSrc]=useState('/day1.svg');
  //1: 슬픔, 2: 기쁨, 3: 화남
  useEffect(() => {
    switch(diaryStatus){
      case '슬픔':
        setImageSrc('/day110.svg');
        break;
      case '행복':
        setImageSrc('/day112.svg');
        break;
      case '화남':
        setImageSrc('/day114.svg');
        break;
      default:
        setImageSrc('/day1.svg');
    }
  }, [diaryStatus]);

  return (
    <>
      <img
        className={styles.day1Icon}
        alt=""
        src={imageSrc}
        style={day1IconStyle}
        onClick={openDiaryCheckPopup}
      />
      {isDiaryCheckPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDiaryCheckPopup}
        >
          <DiaryCheckPopup onClose={closeDiaryCheckPopup}diaryContent={diaryContent} diaryConsolation={diaryConsolation} diarySummary={diarySummary} diaryDay={diaryDay}/>
        </PortalPopup>
      )}
    </>
  );
};

export default Day1Icon;
