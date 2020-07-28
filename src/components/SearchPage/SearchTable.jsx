import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchTableLang } from '../../langs/searchLang';

const SearchTable = ({ data, title, userLang }) => {
  const [opened, setOpened] = useState(true);
  const [sortedData, setSortedData] = useState([...data]);
  const [prevSortField, setPrevSortField] = useState();

  useEffect(() => {
    setSortedData([...data]);
  }, [data])

  const handleSort = (field) => {
    if (field === prevSortField) {
      setSortedData([...sortedData.reverse()]);
    } else {
      const newSort = [...data];
      switch (field) {
        case 'id' :
          newSort.sort((t1, t2) => t1.id.localeCompare(t2.id));
          break;
        case 'name' :
          newSort.sort((t1, t2) => t1.test_name[t1.test_name.hasOwnProperty(userLang) 
            ? userLang 
            : t1.test_name.hasOwnProperty('en')
              ? 'en'
              : Object.keys(t1.test_name)[0]]
          .localeCompare(t2.test_name[t2.test_name.hasOwnProperty(userLang)
            ? userLang
            : t2.test_name.hasOwnProperty('en')
              ? 'en'
              : Object.keys(t2.test_name)[0]])
          );
          break;
        case 'type' :
          newSort.sort((t1, t2) => searchTableLang[t1.type][userLang].localeCompare(searchTableLang[t2.type][userLang]));
          break;
        case 'user' :
          newSort.sort((t1, t2) => t1.user.localeCompare(t2.user));
          break;
        case 'author' :
          newSort.sort((t1, t2) => t1.author.localeCompare(t2.author));
          break;
        case 'date' :
          newSort.sort((t1, t2) => t1.date - t2.date);
          break;
        case 'result' :
          newSort.sort((t1, t2) => t1.result - t2.result);
          break;
        case 'completed' :
          newSort.sort((t1, t2) => t1.completed.localeCompare(t2.completed));
          break;
        default :
          newSort.sort((t1, t2) => t1[field].localeCompare(t2[field]));
      }

      setSortedData(newSort);
      setPrevSortField(field);
    }
  }

  if (!sortedData[0]) {
    return <div />
  }

  return (
    <div className="searchTable">
      <div className="searchTable__top glass glass--blue-deep" onClick={() => setOpened(!opened)}>
        {searchTableLang[title][userLang]}
      </div>
      { opened 
      && <div className="searchTable__main searchTableMain glass glass--dark">
        <div className={`searchTableMain__header searchTableMain__header--${title}`}>
          
          {title === 'test' && <Fragment>
            <p className="searchTableMain__test--id" onClick={() => sortedData.some(item => item.id !== sortedData[0].id) && handleSort('id')}>{searchTableLang.id[userLang]}</p>
            <p className="searchTableMain__test--tname" onClick={() => sortedData.some(item => item.test_name !== sortedData[0].test_name) && handleSort('name')}>{searchTableLang.test_name[userLang]}</p>
            <p className="searchTableMain__test--type" onClick={() => sortedData.some(item => item.type !== sortedData[0].type) && handleSort('type')}>{searchTableLang.test_type[userLang]}</p>
            <p className="searchTableMain__test--aname" onClick={() => sortedData.some(item => item.author !== sortedData[0].author) && handleSort('author')}>{searchTableLang.test_author[userLang]}</p>
          </Fragment>}

          {title === 'author'
          && <Fragment>
            <p className="searchTableMain__author--id" onClick={() => sortedData.some(item => item.id !== sortedData[0].id) && handleSort('id')}>{searchTableLang.id[userLang]}</p>
            <p className="searchTableMain__author--tname" onClick={() => sortedData.some(item => item.test_name !== sortedData[0].test_name) && handleSort('name')}>{searchTableLang.test_name[userLang]}</p>
            <p className="searchTableMain__author--type" onClick={() => sortedData.some(item => item.type !== sortedData[0].type) && handleSort('type')}>{searchTableLang.test_type[userLang]}</p>
            <p className="searchTableMain__author--aname" onClick={() => sortedData.some(item => item.author !== sortedData[0].author) && handleSort('author')}>{searchTableLang.test_author[userLang]}</p>
          </Fragment>}

          {title === 'result'
          && <Fragment>
            <p className="searchTableMain__resault--id" onClick={() => sortedData.some(item => item.id !== sortedData[0].id) && handleSort('id')}>{searchTableLang.id[userLang]}</p>
            <p className="searchTableMain__resault--tname" onClick={() => sortedData.some(item => item.test_name !== sortedData[0].test_name) && handleSort('name')}>{searchTableLang.test_name[userLang]}</p>
            <p className="searchTableMain__resault--uname" onClick={() => sortedData.some(item => item.user !== sortedData[0].user) && handleSort('user')}>{searchTableLang.user_name[userLang]}</p>
            <p className="searchTableMain__resault--date" onClick={() => sortedData.some(item => item.date !== sortedData[0].date) && handleSort('date')}>{searchTableLang.date[userLang]}</p>
            <p className="searchTableMain__resault--res" onClick={() => sortedData.some(item => item.result !== sortedData[0].result) && handleSort('result')}>{searchTableLang.user_result[userLang]}</p>
          </Fragment>}
        </div>
        {sortedData.map(item => (
          <Link 
            key={`${title}${item.id}`} 
            className={`searchTableMain__row searchTableMain__row--${title}`}
            to={`/${title === 'author' ? 'test': title}${item.id}`}
          >
            {title === 'test'
            && <Fragment>
              <p className="searchTableMain__row--id searchTableMain__test--id">{item.id}</p>
              <p className="searchTableMain__row--name searchTableMain__test--tname">
                {item.test_name[item.test_name.hasOwnProperty(userLang)
                  ? userLang
                  : item.test_name.hasOwnProperty('en')
                    ? 'en'
                    : Object.keys(item.test_name)[0]]}
              </p>
              <p className="searchTableMain__row--type searchTableMain__test--type">{searchTableLang[item.type][userLang]}</p>
              <p className="searchTableMain__row--author searchTableMain__test--aname">{item.author}</p>
            </Fragment>} 
            
            {title === 'author' 
            && <Fragment>
              <p className="searchTableMain__row--id searchTableMain__author--id">{item.id}</p>
              <p className="searchTableMain__row--name searchTableMain__author--tname">
                {item.test_name[item.test_name.hasOwnProperty(userLang)
                  ? userLang
                  : item.test_name.hasOwnProperty('en')
                    ? 'en'
                    : Object.keys(item.test_name)[0]]}
              </p>
              <p className="searchTableMain__row--type searchTableMain__author--type">{searchTableLang[item.type][userLang]}</p>
              <p className="searchTableMain__row--author searchTableMain__author--aname">{item.author}</p>
            </Fragment>}

            {title === 'result'
            && <Fragment>
              <p className="searchTableMain__row--id searchTableMain__resault--id">{item.id}</p>
              <p className="searchTableMain__row--name searchTableMain__resault--tname">
                {item.test_name[item.test_name.hasOwnProperty(userLang)
                  ? userLang
                  : item.test_name.hasOwnProperty('en')
                    ? 'en'
                    : Object.keys(item.test_name)[0]]}
              </p>
              <p className="searchTableMain__row--author searchTableMain__resault--user">{item.user}</p>
              <p className="searchTableMain__row--date searchTableMain__resault--date">{new Date(item.date).toLocaleDateString(userLang === 'ua' || userLang === 'be' ? 'ru' : userLang)}</p>
              <p className="searchTableMain__row--result searchTableMain__resault--res">{item.result/100}%</p>
            </Fragment>}
          </Link>
        ))}
      </div>}
    </div>
  )
}

const mapStateToProps = (state) => ({
  userLang: state.userLang,
})

export default connect(mapStateToProps)(SearchTable);