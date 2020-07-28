export const testCardLang = {
  by: {
    be : 'ад:', 
    en : 'by:', 
    pl : 'od:', 
    ru : 'от:', 
    ua : 'від:',
  },

  type: {
    be : 'Тип :', 
    en : 'Type :', 
    pl : 'Typ :', 
    ru : 'Тип :', 
    ua : 'Тип :',
  },

  questions: {
    be : 'Пытанняў :', 
    en : 'Questions :', 
    pl : 'Pytań :', 
    ru : 'Вопросов :', 
    ua : 'Питань :',
  },

  time: {
    be : 'Час :', 
    en : 'Time :',
    pl : 'Czas :', 
    ru : 'Время :', 
    ua : 'Час :',
  },

  minutes: {
    be : 'хв.', 
    en : 'min.',
    pl : 'min.', 
    ru : 'мин.', 
    ua : 'хв.',
  },

  retry_after: {
    be : 'Паўтор цераз :', 
    en : 'Retry After :',
    pl : 'Ponownie po :', 
    ru : 'Повтор через :', 
    ua : 'Повтор через :',
  },

  days: {
    be : 'дзён', 
    en : 'days',
    pl : 'dni', 
    ru : 'дней', 
    ua : 'днів',
  },

  go_for_it: {
    be : 'ВПЕРЁД !', 
    en : 'GO FOR IT !',
    pl : 'NAPRZÓD !', 
    ru : 'ВПЕРЕД !', 
    ua : 'ВПЕРЕД !',
  },

  available_languages: {
    be : 'Мовы :', 
    en : 'Languages :',
    pl : 'Języki :', 
    ru : 'Языки :', 
    ua : 'Мови :',
  },

  examination: {
    be : 'Экзамен', 
    en : 'Exam',
    pl : 'Egzamin', 
    ru : 'Экзамен', 
    ua : 'Екзамен',
  },

  education: {
    be : 'Навучальны', 
    en : 'Education',
    pl : 'Oświatowy', 
    ru : 'Учебный', 
    ua : 'Навчальний',
  },

  social: {
    be : 'Апытанне', 
    en : 'Poll',
    pl : 'Ankieta', 
    ru : 'Опрос', 
    ua : 'Опитування',
  },

  never : { 
    be : 'ніколі', 
    en : 'never',
    pl : 'nigdy', 
    ru : 'никогда', 
    ua : 'ніколи',
  },

  anytime : { 
    be : 'у любы час', 
    en : 'anytime',
    pl : 'zawsze', 
    ru : 'когда угодно', 
    ua : 'будь-коли',
  },
}

export const andMore = (userLang, count) => {
  switch (userLang) {
    case 'by' :
      return `і яшчэ ${count}`;
    case 'en' :
      return `and ${count} more`;
    case 'pl' :
      return `i jeszcze ${count}`;
    case 'ru' :
      return `и еще ${count}`;
    case 'ua' :
      return `та ще ${count}`;
    default : break;
  }
}