import { useMemo } from "react";
import styles from "./Day25Icon.module.css";
import React, {memo, useState, useCallback, useEffect} from "react";
import DiaryCheckPopup from "../components/DiaryCheckPopup_1";
import PortalPopup from "../components/PortalPopup";

const Day25Icon = memo(({ propTop, propLeft, diaryStatus, diaryConsolation, diaryContent, diarySummary, diaryDay }) => {
  const [isDiaryCheckPopupOpen, setDiaryCheckPopupOpen] = useState(false);
  const openDiaryCheckPopup = useCallback(() => {
    setDiaryCheckPopupOpen(true);
  }, []);
  const closeDiaryCheckPopup = useCallback(() => {
    setDiaryCheckPopupOpen(false);
  }, []);

  const [imageSrc, setImageSrc]=useState('/day25.svg');


  
  const day25IconStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);


  //1: 슬픔, 2: 기쁨, 3: 화남
  useEffect(() => {
    switch(diaryStatus){
      case '슬픔':
        setImageSrc('/day251.svg');
        break;
      case '행복':
        setImageSrc('/day252.svg');
        break;
      case '화남':
        setImageSrc('/day253.svg');
        break;
      default:
        setImageSrc('/day25.svg');
    }
  }, [diaryStatus]);

  return (
    <>
      <img
        className={styles.day25Icon}
        alt=""
        src={imageSrc}
        style={day25IconStyle}
        onClick={openDiaryCheckPopup}
      />
      {isDiaryCheckPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDiaryCheckPopup}
        >
          <DiaryCheckPopup onClose={closeDiaryCheckPopup}  diaryContent={diaryContent} diaryConsolation={diaryConsolation} diarySummary={diarySummary} diaryDay={diaryDay}/>
        </PortalPopup>
      )}
    </>
  );
});

export default Day25Icon;
