import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { congratPageLang } from '../../langs/createTestLang';

const CongratPage = ({setStage, userLang}) => {
  return (
    <div className="congrat">
      <p className="congrat__primaryInscription">
        {congratPageLang.congratulation[userLang]}
      </p>
      <div className="congrat__secondaryInscription">
        <p>{congratPageLang.save_success[userLang]}</p>
        <p>{congratPageLang.visible_after_check[userLang]}</p>
      </div>
      <nav className="congrat__controls">
        <Link 
          to='/createtest' 
          className="congrat__btn glass glass--mate" 
          onClick={(event) => {event.preventDefault(); setStage(1);}}
        >
          {congratPageLang.create_test[userLang]}
        </Link>
        <Link to='/mytests' className="congrat__btn glass glass--mate">
          {congratPageLang.my_tests[userLang]}
        </Link>
        <Link to='/' className="congrat__btn glass glass--mate">
          {congratPageLang.homepage[userLang]}
        </Link>
      </nav>
    </div>
  )
}

const mapStateToProps = (state) => ({
  userLang : state.userLang,
})

export default connect(mapStateToProps)(CongratPage);