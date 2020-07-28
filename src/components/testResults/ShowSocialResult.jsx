import React, {useState, useEffect, Fragment} from 'react';
import { connect } from 'react-redux';

import StatisticsBar from '../helpers/StatisticsBar';
import GraphLegend from '../helpers/GraphLegend';
import { socialResultLang } from '../../langs/testResultLang';

import '../../styles/css/EtalonVsUser.css';

const ShowSocialResult = ({question, users_answers, number, userLang}) => {
  const [visible, setVisible] = useState(false);
  const [opened, setOpened] = useState(false);
  const [answers, setAnswers] = useState();
  const [positions, setPositions] = useState();
  const [questLang, setQuestLang] = useState(userLang);
  const total = new Set(users_answers.map(answer => answer.testing_id)).size;

  // Controlling aapearence animation on component mount
  useEffect(() => {
    const delay = setTimeout(() => {
      setVisible(true);
    }, 200 + number * 50);

    return (() => clearTimeout(delay));
  }, [number]);

  // Prepearing data for display information in graphics
  useEffect(() => {
    let modifiedAnswers = [];
    if (question.type === 'oneofmany' || question.type === 'manyofmany') {
      modifiedAnswers = question.answers.map(answer => ({
        ...answer,
        votes: users_answers.filter(every_answer => every_answer.answer_id === answer.id && every_answer.user_answer === 'true').length,
        color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.4)`,
      })).sort((a, b) => b.votes - a.votes);
    } else if (question.type === 'freeanswer') {
      const uniqueAnswers = Array.from(new Set(users_answers.map(answer => answer.user_answer)));
      const availLangs = Object.keys(question.text);
      modifiedAnswers = uniqueAnswers.map((answer, index) => {
        const text = {};
        availLangs.forEach(lang => text[lang] = answer);
        return ({
          id: `${question.id}${index}`,
          a_order: index + 1,
          text,
          votes: users_answers.filter(every_answer => every_answer.user_answer === answer).length,
          color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.4)`,
        });
      }).sort((a, b) => b.votes - a.votes);
    } else if (question.type === 'setorder') {
      modifiedAnswers = question.answers.map(answer => {
        const answerPositions = question.answers.map(answer => +answer.a_order).sort((a, b) => a - b);
        setPositions(answerPositions);
        const userAnswer_for_currentAnswer = users_answers.filter(every_answer => every_answer.answer_id === answer.id);
        const position = {};
        answerPositions.forEach(curPos => {
          position[curPos] = userAnswer_for_currentAnswer.filter(answer => +answer.user_answer === curPos).length;
        });
        return ({
          ...answer,
          votes: Math.round(userAnswer_for_currentAnswer.reduce((acc, ans) => {return (acc + Number(ans.user_answer))}, 0) / userAnswer_for_currentAnswer.length * 100) / 100,
          color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.4)`,
          position,
        });
      }).sort((a, b) => a.votes - b.votes);
    }

    const availLangs = Object.keys(question.text);
    const newLang = availLangs.includes(userLang) 
      ? userLang
      : availLangs.includes('en')
        ? 'en'
        : availLangs[0];

    setQuestLang(newLang);
    setAnswers(modifiedAnswers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question, users_answers]);

  if (!answers) return <div />;

  return (
    <div className={`EVU ${visible ? 'EVU--visible': ''} glass glass--dark`}>
      <div 
        className='EVU__preview'
        onClick={() => setOpened(!opened)}
      >
        <p>{`${socialResultLang.question[userLang]} ${number}`}</p>
      </div>

      {opened
      && <div className='EVU__compare'>
        <div 
          className="EVU__question glass glass--dark withStyles"
          dangerouslySetInnerHTML={{ __html: question.text[questLang] }}
        />

        {question.type === 'setorder' 
        ? <div className="EVU__compareTitle">
            {socialResultLang.popularity_average_place[userLang]}
          </div>
        : <div className="EVU__compareTitle">
            {socialResultLang.votes_for_answer[userLang]}
          </div>}

        {answers.map((answer, index) => (
          <StatisticsBar 
            key={answer.id}
            preambula={`${socialResultLang.answer[userLang]} ${index + 1}:`}
            postambula={question.type !== 'setorder' 
              ? `${answer.votes} ${socialResultLang.votes[userLang]} (${Math.round(answer.votes / total * 100)} %)`
              : index === 0 ? `${answer.votes} (${socialResultLang.most_popular[userLang]})` : index === answers.length - 1 ? `${answer.votes} (${socialResultLang.less_popular[userLang]})` : `${answer.votes}`}
            initialSize={Math.round(answer.votes / total * 10000)/100}
            invertSize={question.type === 'setorder' ? true : false}
            color={answer.color}
            title={question.type !== 'setorder' 
              ? `${socialResultLang.answer[userLang]} ${index + 1} ${socialResultLang.was_chosen_by[userLang]} ${answer.votes} ${socialResultLang.of[userLang]} ${total} ${socialResultLang.people_answers[userLang]}`
              : `${socialResultLang.average_place[userLang]} ${answer.votes}`}
          />
        ))}

        <GraphLegend 
          answers={answers}
          lang={questLang}
        />

        {question.type === 'setorder' && <Fragment>
          <hr />
          <div className="EVU__compareTitle">
            {socialResultLang.place_votes[userLang]}
          </div>
          <div className="statsBlock">
            {positions.map(position => (
              <div 
                key={`pos${position}`}
                className="statsBlock__position" 
                style={{width: `${95 / positions.length}%`}}
              >
                <div className="statsBlock__bar">
                  {answers.map((answer, index) => (
                    <StatisticsBar 
                      key={`${answer.id}${position}`}
                      initialSize={Math.round(answer.position[position] / total * 100)}
                      color={answer.color}
                      type='column'
                      title={`${socialResultLang.on_the[userLang]} ${position} ${socialResultLang.position[userLang]} ${socialResultLang.answer[userLang]}${index + 1} ${socialResultLang.was_chosen_by[userLang]} ${answer.position[position]} ${socialResultLang.of[userLang]} ${total} ${socialResultLang.people_answers[userLang]}`}
                      scale={total / answers.reduce((acc, answer) => {
                        const maxVote = Object.values(answer.position).reduce((acc, vote) => acc < vote ? vote : acc);
                        return ( acc < maxVote ? maxVote : acc );
                      }, 0)}
                    />
                  ))}
                </div>
                <div className="statsBlock__title">
                  {position}
                </div>
              </div>
            ))}
          </div>

          <GraphLegend 
            answers={answers}
            lang={questLang}
          />
        </Fragment>}
      </div>}
    </div>
  );
}

const mapStateToProps = (state) => ({
  userLang : state.userLang,
})

export default connect(mapStateToProps)(ShowSocialResult);