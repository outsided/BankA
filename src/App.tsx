import React from 'react';

import styles from "./styles.module.css";
//import {useState} from 'react'
//import {Count} from './models'

function App() {


//   const [count, setCount] = useState({id:1,discription: 'описание', else: 'что то еще'})
//  function sum() {
//     setCount(() => count.id + 1 )
//  }
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
            </div>
          </div>
          <div className={styles.header_seccond}>

          </div>
          <span className={styles.logo_header}><img className={styles.img_logo} src='imges/logo.jpg' alt='logo'></img></span>
          {/* <div>{count.id}</div>
          <div>{count.discription}</div>
          <div>{count.else}</div>
          <button className='but' onClick={sum}>{count.id}</button> */}
        </div>
        <div className={styles.Content}>
           <ul className={styles.c_first}>
            <li><b>365 дней без %</b><br/>на покупки без процента</li>
            <li><b>До 50 000 ₽ наличными</b><br/>без комиссии каждый месяц</li>
            <li><b>0 ₽ за обслуживание</b><br/>и так будет всегда</li>
            <li><b>Суперкэшбэк каждый месяц</b><br/>до 100% на случайную категорию</li>
           </ul>
          <div className={styles.c_second}></div>
          <div className={styles.c_thirt}></div>
        </div>
        <div className={styles.overFooter}>
          <div className={styles.ofContent}>
            <h2 className={styles.HeadOverFooter}>Не нашли, что искали?</h2>
            <a href='' className={styles.footerSpan}>Кредиты</a>
            <a href='' className={styles.footerSpan}>Вклады</a>
            <a href='' className={styles.footerSpan}>Эквайринг</a>
            <a href='' className={styles.footerSpan}>Открытие и ведение счёта</a>
            <div>dasdasda</div>
            <div>two</div>
          </div>
        </div>
        <div>dddddddddd</div>
        <div className={styles.Footer}>
          <div>Footer</div>
        </div>
      </div>
    </div>
  );
}

export default App;
