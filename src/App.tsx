import React from 'react';
import styles from "./styles.module.css";
import {useState} from 'react'

function App() {
  const [state,setState] = useState('Anya')


  return (
    <div className={styles.App}>
      
      <div className={styles.App_header}>
        <div className={styles.Header}>
          <div className={styles.header_first}>
            <div  className={styles.headerContent}>
              <span className={styles.span_header}>Кредитная карта с целым годом без %</span>
              <span className={styles.span1_header}>Бесплатная навсегда и суперкэшбэк каждый месяц</span>
              <button className={styles.but_head}>Получить карту</button> 
            </div>

            <div  className={styles.headerContent1}>
                  <img src='imges/main.jpg'></img>
                  <input className={styles.inp} placeholder={state} value={state} onChange={e => setState(p => p = e.target.value)}></input>   
                  <div>{state}</div>           
            </div>
          </div>
          <div className={styles.header_seccond}>

          </div>
          <span className={styles.logo_header}><img className={styles.img_logo} src='imges/logo.jpg' alt='logo'></img></span>
        </div>
        <div className={styles.Content}>
           <ul className={styles.c_first}>
            <li className={styles.c_first_li}><b>365 дней без %</b><br/>на покупки без процента</li>
            <li className={styles.c_first_li}><b>До 50 000 ₽ наличными</b><br/>без комиссии каждый месяц</li>
            <li className={styles.c_first_li}><b>0 ₽ за обслуживание</b><br/>и так будет всегда</li>
            <li className={styles.c_first_li}><b>Суперкэшбэк каждый месяц</b><br/>до 100% на случайную категорию</li>
           </ul>
          <div className={styles.c_second}></div>
          <div className={styles.c_thirt}></div>
        </div>
        <div className={styles.c_middle}>
          <div className={styles.c_middle_card}>
            <h3 className={styles.c_middle_card_h2}>Кэшбэк за любые покупки по кредитке</h3>
            <span>Каждый месяц получайте:</span>
            <ul>
              <li className={styles.c_card_li}><span>до 100% в барабане суперкэшбэка</span></li>
              <li className={styles.c_card_li}><span>5% в 3 категориях на выбор: супермаркеты, такси, рестораны и другие</span></li>
              <li className={styles.c_card_li}><span>1% за все остальные покупки</span></li>  
            </ul>
            <button className={styles.c_middle_buttone}>Хочу кещбек</button>
          </div>
          <div className={styles.c_middle_card}>
            <h3 className={styles.c_middle_card_h2}>Вечное бесплатное обслуживание</h3>
            <span>Закажите нашу лучшую кредитку до 31 января и получите бесплатное обслуживание навсегда и без условий</span>
            <button className={styles.c_middle_butt}>Получить карту</button>

          </div>
        </div>
        <div className={styles.overFooter}>
          <div className={styles.ofContent}>
            <h2 className={styles.HeadOverFooter}>Не нашли, что искали?</h2>
            <a href='' className={styles.footerSpan}>Кредиты</a>
            <a href='' className={styles.footerSpan}>Вклады</a>
            <a href='' className={styles.footerSpan}>Эквайринг</a>
            <a href='' className={styles.footerSpan}>Открытие и ведение счёта</a>
          </div>
        </div>
        
        <div className={styles.Footer}>
          <div>Footer</div>
        </div>
      </div>
    </div>
  );
}

export default App;
