import React, { useState, useEffect } from 'react';
import { connect } from  'react-redux';
import aos from "aos";

import TestCard from './TestCard';
import { testTypeSectionLang } from '../../langs/testsPageLang';

const TestTypeSection = ({ type, position, tests, history, userLang }) => {
  const [pagination, setPagination] = useState({
    current: 0,
    max: (tests.length - tests.length % 4) / 4 - (tests.length % 4 === 0 ? 1 : 0),
    pages: new Array((tests.length - tests.length % 4) / 4 + 1).fill(1),
  });

  useEffect(() => {
    aos.init({duration: 1500});
  }, []);

  const setRowClass = (pageIndex) => {
    let oddSide = 'Right';
    let evenSide = 'Left';
    let oddColor = 'light';
    let evenColor = 'dark';

    if (position % 2 === 0) {
      oddSide = 'Left';
      evenSide = 'Right';
      oddColor = 'dark';
      evenColor = 'light';
    }

    let rowClass = 'testsPageMain__listWrap';
    if (pageIndex % 2 === 0) {
      rowClass += ` testsPageMain__listWrap--trapez${oddSide}`;
      rowClass += ` glass glass--${oddColor}`;
    } else {
      rowClass += ` testsPageMain__listWrap--trapez${evenSide}`;
      rowClass += ` glass glass--${evenColor}`;
    }

    return rowClass;
  }

  return (
    <section className="testsPageMain__section">
      <div className="testsPageMain__title" data-aos="fade">
        {testTypeSectionLang[type][userLang]}
      </div>
      {pagination.pages
      .filter((page, pageIndex) => pageIndex <= pagination.current)
      .map((page, pageIndex) => (
        <div 
          key={`${type}Page${pageIndex}`} 
          className={setRowClass(pageIndex)}
          data-aos="fade-up"
        >
          {(pagination.current !== 0 && pagination.current === pageIndex)
          && <button
            className="testsPageMain__button testsPageMain__button--less"
            onClick={(event) => {event.preventDefault(); setPagination({...pagination, current: pagination.current - 1})}}
          >
            {testTypeSectionLang.show_less[userLang]}
          </button>
          }
          <div className="testsPageMain__list">
            {tests
            .filter((test, index) => (index - (index % 4)) / 4 === pageIndex)
            .map((test, index) => (
              <div key={test.id} data-aos="fade-left" data-aos-delay={`${(index % 4) * 200}`}>
                <TestCard 
                  test={test}
                  history={ history }
                />
              </div>
            ))}
          </div>
          {(pagination.current < pagination.max && pagination.current === pageIndex)
          && <button
            className="testsPageMain__button testsPageMain__button--more"
            onClick={(event) => {event.preventDefault(); setPagination({...pagination, current: pagination.current + 1})}}
          >
            {testTypeSectionLang.show_more[userLang]}
          </button>
          }
        </div>
      ))}
    </section>
  )
}

const mapStateToProps = (state) => ({
  userLang : state.userLang,
})

export default connect(mapStateToProps)(TestTypeSection);