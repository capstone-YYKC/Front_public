import styles from "./DiaryCheckPopup_1.module.css";
import axios from 'axios';
import React, {useState, useEffect, useCallback} from 'react';
const DiaryCheckPopup = ({diaryContent, diaryDay}) => {



  const [results, setResults] = useState([]);
  const [response1, setResponse1] = useState([]);
  const [loading1, setLoading1] = useState([]);
  const [response2, setResponse2] = useState('');
  const [loading2, setLoading2] = useState([]); 

  const ex_diary = diaryContent;
  const apiKey = ''


  useEffect(() => {
    const fetchData1 = async () => {
      if(ex_diary=='') {
        setResponse1('너의 하루를 들으면 편지를 전해주고 싶어져 :▷');
        return;
      }

      const prompt1 = `일기 내용: ${ex_diary}\n너는 일기를 녹음하는 일기 인형 곰곰이야. 사용자가 오늘 너를 통해 일기를 작성했어. 다정한 친구처럼 반말로 오늘 일기에 대한 편지340자를 심리학적으로 도움이 되게 생성해줘. 이모지도 한두 개 넣어줘.`;

      setLoading1(true);

      try {
          const result1 = await axios.post(
              'https://api.openai.com/v1/chat/completions',
              {
                  model: 'gpt-4o', // 사용하려는 모델
                  messages: [{ role: 'user', content: prompt1 }],
                  max_tokens: null, // 생성할 텍스트의 길이
              },
              {
                  headers: {
                      'Content-Type': 'application/json',
                      Authorization: `Bearer ${apiKey}`, // API 키를 헤더에 포함
                  },
              }
          );

          setResponse1(result1.data.choices[0].message.content.trim());
      } catch (error) {
              console.error('Error calling OpenAI API:', error.response ? error.response.data : error.message);
              setResponse1('Error occurred while generating text.');
      } finally {
          setLoading1(false);
      }
    };


    fetchData1();

}, []);

useEffect(() => {
  const fetchData2 = async () => {
    if(ex_diary=='') {
      setResponse2('오늘 하루에 도움될만한 걸 추천해줄게 :)');
      return;
    }

    const prompt2 = `일기 내용: ${ex_diary}\n너는 일기를 녹음하는 일기 인형 곰곰이야. 사용자가 오늘 너를 통해 일기를 작성했어.\n다정한 친구처럼 반말로 오늘 일기에 대한 문화 생활(책, 영화, 음악, 음식)을 심리학적으로 도움이 되게 1개씩 추천해줘.\n형식은 다음과 같아. 글자 수 맞추고 줄바꿈도 형식에 맞춰서 꼭 써줘. 형식은 같은데 안에 내용은 일기에 맞춰 바꿔야 해.[]안에는 최대 20자이고 내용은 200자야. [달리기를 말할 때 내가 하고 싶은 이야기]\n하루키가 마라톤을 통해 자신의 생각을 정리하는 과정을 담은 에세이야. 오늘처럼 피곤한 하루를 보내고 마음을 정리할 때 읽으면 좋을 것 같아.\n\n[윌터의 상상은 현실이 된다(The Secret Life of Walter Mitty, 2013)]\n윌터가 일상에서 벗어나 모험을 떠나는 이야기를 다룬 영화야. 오늘처럼 지친 날에 보면 영감을 줄 수 있고, 마음에 따뜻한 위로를 줄거야.\n\n[Billie Eilish - everything I wanted]\n몽환적인 분위기와 편안한 멜로디가 마음을 차분하게 해줘. 슬플 때 들으면 감정을 달래주는 느낌이 들거야.\n\n[따뜻한 스프]\n오늘은 피곤하고 마음이 좀 지쳤으니까, 따뜻하고 부드러운 크림 스프나 미소 된장국 같은 걸로 몸과 마음을 편안하게 해주면 좋을 것 같아, 배도 든든하게 채우고 마음도 안정시켜줘!`;

    setLoading2(true);

    try {
        const result2 = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-4o', // 사용하려는 모델
                messages: [{ role: 'user', content: prompt2 }],
                max_tokens: null, // 생성할 텍스트의 길이
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${apiKey}`, // API 키를 헤더에 포함
                },
            }
        );

        setResponse2(result2.data.choices[0].message.content.trim());
    } catch (error) {
        console.error('Error calling OpenAI API:', error.response ? error.response.data : error.message);
        setResponse2('Error occurred while generating text: ' + (error.response ? error.response.data : error.message));
    } finally {
        setLoading2(false);
    }
  };


  fetchData2();

}, []);

useEffect(() => {
  if(response2){
    const items = response2.match(/(\[[^\]]+\]\s*[^[]+)/g);

    if(items) {
      const P_results = items.map(item => {
        const title = item.match(/(\[[^\]]+\])/)[0]; // 제목 추출
        const content = item.replace(/(\[[^\]]+\]\s*)/, '').trim(); // 내용 추출
        return {title, content};
      });
      setResults(P_results);
    }
  }
}, [response2]);




  return (
    <div className={styles.diaryCheckPopup}>
      <div className={styles.title1}>{diaryDay}</div>
      <div className={styles.title2}>곰곰이의 편지</div>
      <div className={styles.title3}>곰곰이의 추천!</div>
      <div className={styles.diaryCheckPopupChild1}></div>
      <div className={styles.diaryCheckPopupChild1_content}>{diaryContent}</div>
      <div className={styles.diaryCheckPopupChild2}></div>
      <div className={styles.diaryCheckPopupChild2_content}>{loading1 ? 'loading...' : response1}</div>
      <div className={styles.diaryCheckPopupChild3}></div>
      <div className={styles.diaryCheckPopupChild3_content}></div>
      <div className={styles.content}>{diaryContent}</div>
      <img className={styles.gomgom} alt="" src="/-1@2x.png" />
      <img className={styles.gomgom_book} alt="" src="/book_gomgom 1.png" />
      <img className={styles.gomgom_music} alt="" src="/music_gomgom 1.png" />
      <img className={styles.gomgom_movie} alt="" src="/movie_gomgom 1.png" />
      <img className={styles.gomgom_food} alt="" src="/food_gomgom 1.png" />
      <div className={styles.book}>책</div>
      <div className={styles.movie}>영화</div>
      <div className={styles.music}>음악</div>
      <div className={styles.food}>음식</div>
      <div>
        {!results || results.length === 0 ? (
          <div className={styles.loading}>loading...</div>
        ) : (
          <div>

                <div className={styles.book_title}>{results[0].title}</div>
                <div className={styles.book_content}>{results[0].content}</div>
                <div className={styles.movie_title}>{results[1].title}</div>
                <div className={styles.movie_content}>{results[1].content}</div>
                <div className={styles.music_title}>{results[2].title}</div>
                <div className={styles.music_content}>{results[2].content}</div>
                <div className={styles.food_title}>{results[3].title}</div>
                <div className={styles.food_content}>{results[3].content}</div>

          </div>
        )}
      </div>
    </div>
  );
};

export default DiaryCheckPopup;
