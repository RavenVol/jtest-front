import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import postFormToServer from '../../data/postFormToServer';
import Wave from '../helpers/Wave';
import Footer from '../footer/Footer'
import SearchBar from '../helpers/SearchBar';
import SearchTable from './SearchTable';

import { searchPageLang } from '../../langs/searchLang';
import '../../styles/css/SearchPage.css';

const SearchPage = ({ match, userLang }) => {
  const [message, setMessage] = useState();
  const [tests, setTests] = useState([]);
  const [results, setResults] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const form = new FormData();
    form.append('searchQuery', match.params.searchQuery);
    postFormToServer('search/barquery', form)
    .then(response => {
      if (response.message === 'OK') {
        setTests(response.tests);
        setResults(response.results);
        setAuthors(response.authors);
        setMessage('');
      } else if (response.message === 'min') {
        setMessage(searchPageLang.minimum_length[userLang]);
      } else {
        setMessage(searchPageLang.nothing_found[userLang]);
      }
    })
    .catch(error => alert(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.searchQuery]);

  return (
    <div className="searchPage">
      <header className="searchPage__header">
        <Wave rotate="180deg"/>
      </header>

      <main className="searchPage__main searchPageMain">
        <div className="searchPageMain__search">
          <SearchBar size="big" color="light" initialValue={match.params.searchQuery}/>
        </div>

        <section className="searchPageMain__section glass colorSchema--light">
          <div className="searchPageMain__title">
            <h2 className="windowTitle">{searchPageLang.your_search_results[userLang]}</h2>
          </div>
          {message
          ? <div className="searchPageMain__nothing">
              {message}
            </div>
          : <div className="searchPageMain__results">
              {tests && <SearchTable data={tests} title="test"/>}
              {results && <SearchTable data={results} title="result"/>}
              {authors && <SearchTable data={authors} title="author"/>}
            </div>}

        </section>
      </main>

      <footer className="searchPage__footer">
        <Footer />
      </footer>
    </div>
  )
}

const mapStateToProps = (state) => ({
  userLang: state.userLang,
});

export default connect(mapStateToProps)(SearchPage);