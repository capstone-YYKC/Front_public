import { useMemo } from "react";
import styles from "./Day21Icon.module.css";
import React, {memo, useState, useCallback, useEffect} from "react";
import DiaryCheckPopup from "../components/DiaryCheckPopup_1";
import PortalPopup from "../components/PortalPopup";

const Day21Icon = memo(({ propTop, propLeft, diaryStatus, diaryContent, diaryConsolation, diarySummary, diaryDay }) => {
  const [isDiaryCheckPopupOpen, setDiaryCheckPopupOpen] = useState(false);
  const openDiaryCheckPopup = useCallback(() => {
    setDiaryCheckPopupOpen(true);
  }, []);
  const closeDiaryCheckPopup = useCallback(() => {
    setDiaryCheckPopupOpen(false);
  }, []);

  const [imageSrc, setImageSrc]=useState('/day21.svg');


  
  const day21IconStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);


  //1: 슬픔, 2: 기쁨, 3: 화남
  useEffect(() => {
    switch(diaryStatus){
      case '슬픔':
        setImageSrc('/day211.svg');
        break;
      case '행복':
        setImageSrc('/day212.svg');
        break;
      case '화남':
        setImageSrc('/day214.svg');
        break;
      default:
        setImageSrc('/day21.svg');
    }
  }, [diaryStatus]);

  return (
    <>
      <img
        className={styles.day21Icon}
        alt=""
        src={imageSrc}
        style={day21IconStyle}
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

export default Day21Icon;
