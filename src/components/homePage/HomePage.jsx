import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import aos from 'aos';

import { API_URL } from '../../misc/conf';
import Wave from '../helpers/Wave';
import SearchBar from '../helpers/SearchBar';
import Footer from '../footer/Footer';
import { logo2, firework, pencil } from '../../misc/svgImages';
import { homePageLang } from '../../langs/homePageLang';

import '../../styles/css/HomePage.css';
import 'aos/dist/aos.css';

const HomePage = ({ userLang }) => {
  useEffect(() => {
    aos.init({ duration: 500});
  }, []);
  
  // const monitor = window.innerWidth >= 1024;

  return (
    <div className="homePage">
      <header className="homePage__header colorSchema--dark homeHeader">
        <div className="homeHeader__welcome">
          {homePageLang.welcome[userLang]}
          <p className="homeHeader__jtestInscription">jTest!</p>
        </div>

        <div className="homeHeader__logo">
          <svg
            x="0px" y="0px" viewBox="0 0 1000 1000"
          >
            {logo2}
          </svg>
        </div>

        <div className="homeHeader__slogan">
          {homePageLang.your_tool_for_testing[userLang]}
        </div>
      </header>

      <main className="homePage__main homeMain">
        <div className="homeMain__waveWrap">
          <Wave rotate="180deg"/>
        </div>

        <div className="homeMain__search">
          <SearchBar size="big" color="light" />
        </div>

        <div className="homeMain__losung" data-aos="fade" data-aos-duration="500">
          {homePageLang.create_anytime_everywhere[userLang]}
        </div>

        <div className="homeMain__section homeMain__section--1">
          <div className="homeMain__wrapTrapez--1 homeMain__wrapTrapez--for3left" data-aos="fade-right">
            <div className="homeMain__trapezLeft homeMain__trapezLeft--top colorSchema--dark">
              <p className="homeMain__title homeMain__title--1">{homePageLang.exams[userLang]}</p>
              <p className="homeMain__titleadd homeMain__titleadd--1">{homePageLang.for_your_students[userLang]}<br/>{homePageLang.job_seekers_staff[userLang]}</p>
              <div className="homeMain__text homeMain__text--1">
                <p>{homePageLang.available_anytime_anywhere[userLang]}</p>
                <p>{homePageLang.automatical_results[userLang]}</p>
                <p>{homePageLang.full_data_answers[userLang]}</p>
              </div>
            </div>
            <img 
              className="homeMain__illustration homeMain__illustration--1"
              src={`${API_URL}/api/pic/picScreen2.png`}
              alt="screenshot of examination test" 
            />
          </div>

          <div className="homeMain__wrapTrapez--1 homeMain__wrapTrapez--for3center" data-aos="fade">
            <div className="homeMain__trapezCenter colorSchema--light">
              <p className="homeMain__title homeMain__title--2">{homePageLang.social[userLang]}</p>
              <p className="homeMain__titleadd homeMain__titleadd--2">{homePageLang.online_polls[userLang]}</p>
              <div className="homeMain__text homeMain__text--2">
                <p>{homePageLang.online_research[userLang]}</p>
                <p>{homePageLang.results_in_graphs[userLang]}</p>
                <p>{homePageLang.safe_interviewees[userLang]}</p>
              </div>
            </div>
            <img 
              className="homeMain__illustration homeMain__illustration--2"
              src={`${API_URL}/api/pic/picScreen3.png`}
              alt="screenshot of sicial test graph" 
            />
          </div>

          <div className="homeMain__wrapTrapez--1 homeMain__wrapTrapez--for3right" data-aos="fade-left">
            <div className="homeMain__trapezRight homeMain__trapezRight--bottom colorSchema--dark">
              <p className="homeMain__title homeMain__title--3">{homePageLang.education[userLang]}</p>
              <p className="homeMain__titleadd homeMain__titleadd--3">{homePageLang.learn_online[userLang]}</p>
              <div className="homeMain__text homeMain__text--3">
                <p>{homePageLang.study_through_tests[userLang]}</p>
                <p>{homePageLang.control_mistakes[userLang]}</p>
                <p>{homePageLang.play_with_children[userLang]} </p>
              </div>
            </div>
            <img 
              className="homeMain__illustration homeMain__illustration--3"
              src={`${API_URL}/api/pic/picScreen1.png`}
              alt="screenshot of education test" 
            />
          </div>
        </div>

        <div className="homeMain__losung" data-aos="fade" data-aos-duration="500">
          {homePageLang.do_polls_online[userLang]}
        </div>

        <div className="homeMain__section homeMain__section--2">
          <div className="homeMain__wrapTrapez--2 homeMain__wrapTrapez--for5center">
            <div className="homeMain__diamond colorSchema--light">
              <p className="homeMain__title homeMain__title--center">{homePageLang.for_you[userLang]}</p>
            </div>
          </div>
          <div className="homeMain__wrapTrapez--2 homeMain__wrapTrapez--for5upleft" data-aos="fade-down-right">
            <div className="homeMain__trapezLeft homeMain__trapezLeft--parallelogramm colorSchema--dark homeMain__title--animate">
              <p className="homeMain__title homeMain__title--top homeMain__title--left colorSchema--light">{homePageLang.for_teachers[userLang]}</p>
              <p className="homeMain__title homeMain__title--bottom homeMain__title--right colorSchema--light">{homePageLang.and_students[userLang]}</p>
              <img className="homeMain__illustration homeMain__illustration--6" src={`${API_URL}/api/pic/picexam.png`} alt="students" />
            </div>
          </div>
          <div className="homeMain__wrapTrapez--2 homeMain__wrapTrapez--for5downleft" data-aos="fade-up-right">
            <div className="homeMain__trapezRight homeMain__trapezRight--parallelogramm colorSchema--dark homeMain__title--animate">
              <p className="homeMain__title homeMain__title--top homeMain__title--right colorSchema--light">{homePageLang.for_polls[userLang]}</p>
              <p className="homeMain__title homeMain__title--bottom homeMain__title--left colorSchema--light">{homePageLang.and_interview[userLang]}</p>
              <img className="homeMain__illustration homeMain__illustration--6" src={`${API_URL}/api/pic/picpoll.png`} alt="poll" />
            </div>
          </div>
          <div className="homeMain__wrapTrapez--2 homeMain__wrapTrapez--for5upright" data-aos="fade-down-left">
            <div className="homeMain__trapezRight homeMain__trapezRight--parallelogramm colorSchema--dark homeMain__title--animate">
              <p className="homeMain__title homeMain__title--top homeMain__title--right colorSchema--light">{homePageLang.for_HRs[userLang]}</p>
              <p className="homeMain__title homeMain__title--bottom homeMain__title--left colorSchema--light">{homePageLang.and_job_seekers[userLang]}</p>
              <img className="homeMain__illustration homeMain__illustration--6" src={`${API_URL}/api/pic/picinterview.png`} alt="interview" />
            </div>
          </div>
          <div className="homeMain__wrapTrapez--2 homeMain__wrapTrapez--for5downright" data-aos="fade-up-left">
            <div className="homeMain__trapezLeft homeMain__trapezLeft--parallelogramm colorSchema--dark homeMain__title--animate">
              <p className="homeMain__title homeMain__title--top homeMain__title--left colorSchema--light">{homePageLang.for_parents[userLang]}</p>
              <p className="homeMain__title homeMain__title--bottom homeMain__title--right colorSchema--light">{homePageLang.and_children[userLang]}</p>
              <img className="homeMain__illustration homeMain__illustration--6" src={`${API_URL}/api/pic/picfamily.png`} alt="family" />
            </div>
          </div>
        </div>

        <div className="homeMain__losung" data-aos="fade" data-aos-duration="500">
          {homePageLang.easy_as_game[userLang]}
        </div>

        <div className="homeMain__section homeMain__section--3">
          <div className="homeMain__wrapTrapez--3 homeMain__wrapTrapez--for2left" data-aos="fade-right">
            <div className="homeMain__trapezLeft homeMain__trapezLeft--top colorSchema--dark">
              <p className="homeMain__title homeMain__title--4">{homePageLang.easy_to_create[userLang]}</p>
              <div className="homeMain__text homeMain__text--4">
                <p>{homePageLang.multilingual_support[userLang]}</p>
                <p>{homePageLang.clear_interface[userLang]}</p>
                <p>{homePageLang.different_questions[userLang]}</p>
                <p>{homePageLang.different_behavior[userLang]}</p>
              </div>
            </div>
            <Link className="homeMain__link homeMain__link--1" to="/createtest">
              <button className="homeMain__button BtnColors--blue">
                {homePageLang.try_now[userLang]}
              </button>
            </Link>
            <div className="homeMain__illustration homeMain__illustration--4">
              <svg viewBox="0 0 1000 1000">
                {firework}
              </svg>
            </div>
            <div className="shadow" style={{width: '79%'}}/>
          </div>

          <div className="homeMain__wrapTrapez--3 homeMain__wrapTrapez--for2right" data-aos="fade-left">
            <div className="homeMain__trapezRight  homeMain__trapezRight--bottom colorSchema--light">
              <p className="homeMain__title homeMain__title--5">{homePageLang.easy_to_pass[userLang]}</p>
              <div className="homeMain__text homeMain__text--5">
                <p>{homePageLang.immediate_results[userLang]}</p>
                <p>{homePageLang.intuitive_interface[userLang]}</p>
                <p>{homePageLang.share_results[userLang]}</p>
                <p>{homePageLang.challenge_for_brains[userLang]}</p>
              </div>
            </div>
            <Link className="homeMain__link homeMain__link--2" to="/tests">
              <button className="homeMain__button BtnColors--blue">
                {homePageLang.try_now[userLang]}
              </button>
            </Link>
            <div className="homeMain__illustration homeMain__illustration--5">
              <svg viewBox="0 0 1000 1000">
                {pencil}
              </svg>
            </div>
            <div className="shadow" />
          </div>
        </div>
      
        <div className="homeMain__losung" data-aos="fade" data-aos-duration="500">
          {homePageLang.thank_you[userLang]}
          <p className="homeMain__losung--jtestInscription">jTest!</p>
        </div>
      </main>

      <footer className="homePage__footer">
        <Footer />
      </footer> 
    </div>
  )
}

const mapStateToProps = (state) => ({
  userLang: state.userLang,
});

export default connect(mapStateToProps)(HomePage);