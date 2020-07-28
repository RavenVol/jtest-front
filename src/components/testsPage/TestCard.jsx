import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { langsCodes } from '../../langs/langs';
import { testCardLang, andMore } from '../../langs/testCardLang';

import '../../styles/css/testCard.css';

const bgcolors = ['gold-hotpink', 'green-gold', 'coral-cornflowerblue', 'blueviolet-coral', 'velvet-azure', 'red-yellow', 'brown-green', 'chery-olive', 'sky-magenta', 'crimson-skyblue'];

const TestCard = ({userLang, test, history}) => {
  const large = window.innerWidth >= 751;

  const [mouseOver, setMouseOver] = useState(large ? false : true);
  const [testLangs, setTestLangs] = useState([]);
  const [totalLangs, setTotalLangs] = useState(0);

  useEffect(() => {
    setTestLangs(test.langs.filter((lang, index) => index < 3));
    setTotalLangs(test.langs.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="testCardWrap">
      <div className="testCardWrap__hoverShield"/>
      <div 
        className="testCardWrap__hoverZone"
        onMouseOver={() => large && setMouseOver(true)}
        onMouseLeave={() => large && setMouseOver(false)}
        onClick={() => history.push(`/test${test.id}`)}
      >
        <div className="testCard glass glass--light">
          <p className="testCard__author">
            {`${testCardLang.by[userLang]} ${test.author}`}
          </p>
          <h3 className="testCard__testName">
            {test.name[test.langs.includes(userLang) 
              ? userLang 
              : test.langs.includes('en')
                ? 'en'
                : test.langs[0]
            ]}
          </h3>
          <div className="testCard__summary summary">
            <p className="summary__typeLabel">{testCardLang.type[userLang]}</p>
            <p className="summary__typeValue">{testCardLang[test.type][userLang]}</p>
            <p className="summary__questionLabel">{testCardLang.questions[userLang]}</p>
            <p className="summary__questionValue">{test.question_qtty}</p>
            <p className="summary__timeLabel">{testCardLang.time[userLang]}</p>
            <p className="summary__timeValue">{`${test.time} ${testCardLang.minutes[userLang]}`}</p>
            <p className="summary__retryLabel">{testCardLang.retry_after[userLang]}</p>
            <p className="summary__retryValue">{+test.retry < 0
              ? testCardLang.never[userLang]
              : +test.retry === 0
                ? testCardLang.anytime[userLang]
                : `${test.retry} ${testCardLang.days[userLang]}`}
            </p>
          </div>
          <div className={`testCard__bottom BGcolors--${bgcolors[+test.color]}`}>
            {testCardLang.go_for_it[userLang]}
          </div>
        </div>

        <div className={`cardDecoration cardDecoration__${mouseOver ? 'string' : 'list'} BGcolors--${bgcolors[+test.color]}`}>
          {mouseOver 
          ? <> 
            <p className="cardDecoration__langString">
              {`${testLangs.join(', ')}`}
            </p>
            
            {totalLangs > 3
            && <p className="cardDecoration__langString">
              {andMore(userLang, totalLangs-3)}
            </p>}
          </>
          : <>
            <h4 className="cardDecoration__title">
              {testCardLang.available_languages[userLang]}
            </h4>
            {testLangs.map(lang => (
              <p 
                key={lang} 
                className="cardDecoration__langList"
              >
                {langsCodes[lang][userLang]}
              </p>
            ))}
            {totalLangs > 3 
            && <p className="cardDecoration__langList">
              {andMore(userLang, totalLangs-3)}
            </p>}
          </>}
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = (state) => ({
  userLang : state.userLang,
})

export default connect(mapStateToProps)(TestCard); 