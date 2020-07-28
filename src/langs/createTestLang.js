import React from 'react';

export const createTestPageLang = {
  create_test_menu : {
    be : 'Меню Утварэння Тэсту',
    en : 'Create Test Menu',
    pl : 'Menu Tworzenia Testu',
    ru : 'Меню Создания Теста',
    ua : 'Меню Створення Тесту',
  },

  langs : {
    be : 'Мовы',
    en : 'Languages',
    pl : 'Języki',
    ru : 'Языки',
    ua : 'Мови',
  },

  name : {
    be : 'Назва тэсту',
    en : 'Test Name',
    pl : 'Nazwa testu',
    ru : 'Название теста',
    ua : 'Назва тесту',
  },

  type : {
    be : 'Тып тэсту',
    en : 'Test Type',
    pl : 'Typ testu',
    ru : 'Тип теста',
    ua : 'Тип Тесту',
  },

  settings : {
    be : 'Налады',
    en : 'Settings',
    pl : 'Ustawienia',
    ru : 'Настройки',
    ua : 'Налаштування',
  },

  quetions : {
    be : 'Пытанні',
    en : 'Questions',
    pl : 'Pytania',
    ru : 'Вопросы',
    ua : 'Питання',
  },

  back : {
    be : 'Назад',
    en : 'Back',
    pl : 'Plecy',
    ru : 'Назад',
    ua : 'Назад',
  },

  next : {
    be : 'Далей',
    en : 'Next',
    pl : 'Kolejny',
    ru : 'Далее',
    ua : 'Далі',
  },

  add_question : {
    be : 'Дадаць пытанне',
    en : 'Add Question',
    pl : 'Dodaj pytanie',
    ru : 'Добавить вопрос',
    ua : 'Додати питання',
  },

  delete_question : {
    be : 'Выдаліць пытанне',
    en : 'Delete Question',
    pl : 'Usuń pytanie',
    ru : 'Удалить вопрос',
    ua : 'Видалити питання',
  },

  save : {
    be : 'Захаваць',
    en : 'Save',
    pl : 'Zapisać',
    ru : 'Сохранить',
    ua : 'Зберегти',
  },
}

export const languagesLang = {
  be : {
    be : 'Беларуская',
    en : 'Belarusian',
    pl : 'Białoruski',
    ru : 'Белорусский',
    ua : 'Білоруська',
  },

  de : {
    be : 'Нямецкая',
    en : 'German',
    pl : 'Niemiecki',
    ru : 'Немецкий',
    ua : 'Німецька',
  },

  en : {
    be : 'Англійская',
    en : 'English',
    pl : 'Angielski',
    ru : 'Английский',
    ua : 'Англійська',
  },

  es : {
    be : 'Іспанская',
    en : 'Spanish',
    pl : 'Hiszpański',
    ru : 'Испанский',
    ua : 'Іспанська',
  },

  fr : {
    be : 'Французкая',
    en : 'French',
    pl : 'Francuski',
    ru : 'Французский',
    ua : 'Французька',
  },

  it : {
    be : 'Італьянская',
    en : 'Italian',
    pl : 'Włoski',
    ru : 'Итальянский',
    ua : 'Італійська',
  },

  pl : {
    be : 'Польская', 
    en : 'Polish',
    pl : 'Polski', 
    ru : 'Польский', 
    ua : 'Польська',
  },

  ru : {
    be : 'Руская', 
    en : 'Russian',
    pl : 'Rosyjski', 
    ru : 'Русский', 
    ua : 'Російська',
  },

  ua : {
    be : 'Украінская', 
    en : 'Ukrainian',
    pl : 'Ukraiński', 
    ru : 'Украинский', 
    ua : 'Українська',
  },
}

export const setTestLanguageLang = {
  title : {
    be : 'Калі ласка, абярыце мовы, якія Вы хочаце падтрымліваць ў Вашым тэсце',
    en : 'Please select languages you want to support in your test',
    pl : 'Wybierz języki, które chcesz obsługiwać w teście',
    ru : 'Пожалуйста, выберите языки, которые Вы хотите поддерживать в Вашем тесте',
    ua : 'Будь ласка, виберіть мови, які Ви бажаєте підтримувати в Вашому тесті',
  },

  testLangSelection : {
    be : () => (<div>&nbsp;Калі ласка, абярыце мовы, якія Вы будзеце падтрымліваць у Вашым тэсце.<br />&nbsp;- Па меншай меры адна мова павінна быць абрана.<br />&nbsp;- Вы можаце выбраць некалька моў альбо ўсе даступныя мовы.<br />&nbsp;- Аўтаматычны пераклад, наразі, недаступны. Пераклад на выбраныя вамі мовы павінен ажыццяўляцца самастойна.<br />&nbsp;- Вы можаце ў будучыні дадаць або выдаліць любую мову.</div>),
    en : () => (<div>&nbsp;Please select languages you will support in your test.<br />&nbsp;- At least one language must be selected.<br />&nbsp;- You can select some or all of the available languages.<br />&nbsp;- Automatic translation currently unavailable. Translation into the languages you have chosen must be done independently.<br />&nbsp;- You can add or remove any language later.</div>),
    pl : () => (<div>&nbsp;Wybierz języki, które będą obsługiwane w teście.<br />&nbsp;- Należy wybrać co najmniej jeden język.<br />&nbsp;- Możesz wybrać niektóre lub wszystkie dostępne języki.<br />&nbsp;- Tłumaczenie automatyczne nie jest obecnie dostępne. Tłumaczenie na wybrane języki należy wykonać sam osobiście.<br />&nbsp;- Możesz w przyszłości dodawać lub usuwać dowolny język.</div>),
    ru : () => (<div>&nbsp;Пожалуйста, выберите языки, которые Вы будете поддерживать в Вашем тесте.<br />&nbsp;- Должен быть выбран хотябы один язык.<br />&nbsp;- Можно выбрать несколько или все доступные языки.<br />&nbsp;- Автоматический перевод, в данный момент, не доступен. Перевод на вбранные Вами языки должен быть осуществлен самостоятельно.<br />&nbsp;- Вы сможете, в дальнейшем, добавить или убрать любой язык.</div>),
    ua : () => (<div>&nbsp;Будь ласка, оберіть мови, які Ви будете підтримувати в Вашому тесті.<br />&nbsp;- Має бути обрана хоча б одна мова.<br />&nbsp;- Можна обрати декілька мов або всі доступні мови.<br />&nbsp;- Автоматичний переклад, наразі, не доступний. Переклад на обрані Вами мови має бути здійснений самостійно.<br />&nbsp;- Ви зможете, в подальшому, додати або прибрати будь-яку мову.</div>),
  },
}

export const setTestNameLang = {
  title : {
    be : 'Калі ласка, пазначце імя для вашага тэсту.',
    en : 'Please set title for your test',
    pl : 'Proszę podać nazwę swojego testu.',
    ru : 'Пожалуйста, укажите название для Вашего теста',
    ua : 'Будь ласка, вкажіть назву для Вашого тесту.',
  },

  test_name : {
    be : () => (<div>&nbsp;Калі ласка, пазначце імя для вашага тэсту.<br />&nbsp;- Імя павінна быць паказана для кожнай з выбраных моў.<br />&nbsp;- Калі вы не ўпэўненыя ў перакладзе на любую з выбраных раней моў, выдаліце ​​гэтую мову са спісу падтрымліваемых моў.<br />&nbsp;- Любую мову можна дадаць пазней.</div>),
    en : () => (<div>&nbsp;Please set a name for your test.<br />&nbsp;- A name must be provided for each of the selected languages.<br />&nbsp;- If you have difficulties translating into any of the previously selected languages, please remove this language from the list of supported ones.<br />&nbsp;- Any language may be added in the future.</div>),
    pl : () => (<div>&nbsp;Proszę podać nazwę swojego testu.<br />&nbsp;- Nazwę należy podać dla każdego z wybranych języków.<br />&nbsp;- Jeśli nie masz pewności co do tłumaczenia na jeden z wcześniej wybranych języków, usuń ten język z listy obsługiwanych języków.<br />&nbsp;- Dowolny język można dodać później.</div>),
    ru : () => (<div>&nbsp;Пожалуйста, укажите название для Вашего теста.<br />&nbsp;- Название должно быть указано для каждого из выбранных языков.<br />&nbsp;- Если Вы затрудняетесь с переводом на какой-либо из выбранных ранее языков, пожалуйста, удалите этот язык из списка поддерживаемых.<br />&nbsp;- Любой язык может быть в дальнейшем добавлен.</div>),
    ua : () => (<div>&nbsp;Будь ласка, вкажіть назву для Вашого тесту.<br />&nbsp;- Назва повинна бути вказана для кожної з обраних мов.<br />&nbsp;- Якщо Ви не впевнені у перекладі на буль-яку з обраних раніше мов, будь ласка, видаліть цюмову зі списку підтримуваних.<br />&nbsp;- Будь-яка мова може бути додана у подальшому.</div>),
  },
}

export const setTestTypeLang = {
  title : {
    be : 'Калі ласка, выберыце тып Вашага тэсту',
    en : 'Please select type of your test',
    pl : 'Wybierz typ testu.',
    ru : 'Пожалуйста, выберите тип Вашего теста',
    ua : 'Будь-ласка, оберіть тип Вашого тесту',
  },

  time_limits : {
    be : 'Абмежаванне часу',
    en : 'Time limits',
    pl : 'Limit czasowy',
    ru : 'Временное ограничение',
    ua : 'Обмеження часу',
  },

  statistics_visible : {
    be : 'Статыстыка бачная',
    en : 'Statistics visible',
    pl : 'Widoczne statystyki',
    ru : 'Статистика видна',
    ua : 'Статистика видима',
  },

  user_see_answers : {
    be : 'Карыстальнік бачыць адказы',
    en : 'User can see own answers',
    pl : 'Użytkownik widzi odpowiedzi',
    ru : 'Пользователь видит ответы',
    ua : 'Користувач бачить відповіді',
  },

  author_see_answers : {
    be : 'Аўтар бачыць усе адказы',
    en : 'Author can see all answers',
    pl : 'Autor widzi wszystkie odpowiedzi',
    ru : 'Автор видит все ответы',
    ua : 'Автор бачить всі відповіді',
  },
}

export const typeItemLang = {
  examination : {
    be : 'Экзаменацыйны', 
    en : 'Examination',
    pl : 'Egzaminacyjny', 
    ru : 'Экзаменационный', 
    ua : 'Екзаменаційний',
  },

  education : {
    be : 'Навучальны', 
    en : 'Educational',
    pl : 'Oświatowy', 
    ru : 'Образовательный', 
    ua : 'Навчальний',
  },

  social : {
    be : 'Апытанне', 
    en : 'Poll',
    pl : 'Ankieta', 
    ru : 'Опрос', 
    ua : 'Опитування',
  },

  examination_hover : {
    be : () => (<div>&nbsp;Наилучним чынам падыдзе для стварэння экзаменацыйных тэстаў пры онлайн тэставанні:<br />&nbsp;- для ацэнкі ведаў кандыдата пры прыёме на працу;<br />&nbsp;- для ацэнкі ведаў уччащихся і студэнтаў навучальных устаноў і курсаў;<br />&nbsp;- для паводзін тэставання пры выдачы сертыфікатаў і дыпломаў.</div>),
    en : () => (<div>&nbsp;Best suited for creating exam tests for online testing:<br />&nbsp;- to assess the knowledge of the candidate when applying for a job;<br />&nbsp;- to assess the knowledge of students of educational institutions and training courses;<br />&nbsp;- to assess the knowledge when issuing certificates and diplomas.</div>),
    pl : () => (<div>&nbsp;Najlepiej nadaje się do tworzenia testów egzaminacyjnych do testowania online:<br />&nbsp;- ocena wiedzy kandydata przy ubieganiu się o pracę;<br />&nbsp;- ocena wiedzy uczniów i studentów instytucji edukacyjnych i kursów;<br />&nbsp;- do testowania zachowania podczas wydawania certyfikatów i dyplomów.</div>),
    ru : () => (<div>&nbsp;Наилучним образом подойдет для создания экзаменационных тестов при онлайн тестировании:<br />&nbsp;- для оценки знаний кандидата при приеме на работу;<br />&nbsp;- для оценки знаний уччащихся и студентов учебных заведений и курсов;<br />&nbsp;- для поведения тестирования при выдаче сертификатов и дипломов.</div>),
    ua : () => (<div>&nbsp;Найкращим чином підійде для створення екзаменаційних тестів для онлайн тестування:<br />&nbsp;- для оцінювання знань кандидата при працевлаштуванні;<br />&nbsp;- для оцінки знань учнів та студентів учбових закладів і курсів;<br />&nbsp;- для проведення тестування при видачі сертифікатів і дипломів.</div>),
  },

  education_hover : {
    be : () => (<div>&nbsp;Тэсты гэтага тыпу ствараюцца з мэтай:<br />&nbsp;- дапамагчы карыстальнікам праверыць уласныя веды ў якой-небудзь вобласці;<br />&nbsp;- шматкроць патрэніравацца ў праходжанні тэсту перад здачай экзамену;<br />&nbsp;- звярнуць увагу карыстальніка на яго слабыя месцы ў якім-небудзь прадмеце, даць тлумачэнні ў тых пытаннях, дзе карыстальнік здзяйсняў памылкі.</div>),
    en : () => (<div>&nbsp;Tests of this type are created to:<br />&nbsp;- help users to check their own knowledge in any field;<br />&nbsp;- repeatedly practice in passing the test before passing the exam;<br />&nbsp;- draw the user's attention to his weaknesses in any subject, give clarifications on those issues where the user made mistakes.</div>),
    pl : () => (<div>&nbsp;Testy tego typu są tworzone w celu:<br />&nbsp;- Pomóż użytkownikom sprawdzić swoją wiedzę w dowolnej dziedzinie;<br />&nbsp;- wielokrotnie ćwiczyć zdanie testu przed zdaniem egzaminu;<br />&nbsp;- zwrócić uwagę użytkownika na jego słabości w dowolnym temacie, wyjaśnić te kwestie, w których użytkownik popełnił błędy.</div>),
    ru : () => (<div>&nbsp;Тесты этого типа создаются с целью:<br />&nbsp;- помочь пользователям проверить собственные знания в какой-либо области;<br />&nbsp;- многократно потренироваться в прохождении теста перед сдачей экзамена;<br />&nbsp;- обратить внимание пользователя на его слабые места в каком-либо предмете, дать разъяснения в тех вопросах, где пользователь совершал ошибки.</div>),
    ua : () => (<div>&nbsp;Тести цього типу мають на меті:<br />&nbsp;- допомогти користувачам перевірити власні знання в будь-якій галузі;<br />&nbsp;- багаторазово потренуватися в проходженні тесту перед складанням іспиту;<br />&nbsp;- звернути увагу користувача на його вразливі місця в будь-якому предметі, надати роз\'яснення з тих питань, у яких користувач припустився помилки.</div>),
  },

  social_hover : {
    be : () => (<div>&nbsp;Тэсты гэтай групы дапамогуць правесці анкетаванне з мэтай збору і ацэнкі грамадскай думкі.</div>),
    en : () => (<div>&nbsp;Tests of this group will help to conduct a survey to collect and evaluate public opinion.</div>),
    pl : () => (<div>&nbsp;Testy tej grupy pomogą przeprowadzić ankietę w celu zebrania i oceny opinii publicznej.</div>),
    ru : () => (<div>&nbsp;Тесты этой группы помогут провести анкетирование с целью сбора и оценки общественного мнения.</div>),
    ua : () => (<div>&nbsp;Тести цієї групи допоможуть провести анкетування з метою збору та оцінки громадської думки.</div>),
  },
}

export const setTestConfigLang = {
  title : {
    be : 'Налады тэсту',
    en : 'Test Settings',
    pl : 'Ustawienia testowe',
    ru : 'Настройки теста',
    ua : 'Налаштування тесту',
  },

  questionQtty_hover : {
    be : () => (<div>&nbsp;У гэтым полі ўсталёўваюцца <b><u>КОЛЬКАСЦЬ</u></b> пытанняў, на якія карыстальнік павінен будзе адказваць падчас тэсту.<br />&nbsp;Аўтар тэсту можа стварыць столькі пытанняў, колькі пажадае.<br />&nbsp;Калі колькасць створаных пытанняў менш або роўна <b><u>КОЛЬКАСЦІ</u></b>, указаным у гэтым полі, то падчас тэсту ўсе створаныя пытанні будуць у выпадковаму парадаку прадастаўляцца карыстачу для адказу.<br />&nbsp;Калі колькасць створаных пытанняў перавышае <b><u>КОЛЬКАСЦЬ</u></b>, указанае ў гэтым полі, карыстачу прыйдзецца адказваць толькі на зададзеную <b><u>КОЛЬКАСЦЬ</u></b> пытанняў, якія будуць выпадкова выбраны з усяго спісу пытанняў, створаных аўтарам для гэтага тэсту.</div>),
    en : () => (<div>&nbsp;This field sets up a <b><u>NUMBER</u></b> of questions that user will have to answer to complete the test.<br />&nbsp;Author of the test can create as many questions as he want to.<br />&nbsp;If number of created questions will be equal or less than <b><u>NUMBER</u></b> in this field then all of created questions will appear to user randomly.<br />&nbsp;If number of created questions will be more than <b><u>NUMBER</u></b> in this field then user will receive this <b><u>NUMBER</u></b> of questions which will be randomly taken from the pull of all questions created by author.</div>),
    pl : () => (<div>&nbsp;To pole określa <b><u>ILOŚĆ</u></b> pytań, na które użytkownik będzie musiał odpowiedzieć podczas testu.<br />&nbsp;Autor testu może stworzyć dowolną liczbę pytań.<br />&nbsp;Jeśli liczba utworzonych pytań jest mniejsza lub równa <b><u>ILOŚCI</u></b> określonej w tym polu, wówczas podczas testu wszystkie utworzone pytania zostaną losowo przekazane użytkownikowi w celu uzyskania odpowiedzi.<br />&nbsp;Jeśli liczba utworzonych pytań jest większa niż <b><u>ILOŚĆ</u></b> określona w tym polu, użytkownik będzie musiał odpowiedzieć tylko na określoną <b><u>ILOŚĆ</u></b> pytań, która zostanie losowo wybrana z całej listy pytań utworzonych przez autora dla tego testu.</div>),
    ru : () => (<div>&nbsp;В этом поле устанавливается <b><u>КОЛИЧЕСТВО</u></b> вопросов на которые пользователь должен будет ответить во время прохождения теста.<br />&nbsp;Автор теста может создать столько вопросов, сколько пожелает.<br />&nbsp;Если число созданных вопросов будет меньше или равно <b><u>КОЛИЧЕСТВУ</u></b>, указанному в этом поле, тогда, во время прохождения теста, все созданные вопросы будут в случайном порядке предоставлены пользоватею для ответа.<br />&nbsp;Если количество созданных вопросов будет больше <b><u>КОЛИЧЕСТВА</u></b>, указанного в этом поле, то пользователь должен будет ответить только на указанное <b><u>КОЛИЧЕСТВО</u></b> вопросов, которые будут каждый раз случайным образом выбираться из всего списка вопросов, созданных автором для этого теста.</div>),
    ua : () => (<div>&nbsp;В цьому полі встановлюється <b><u>КІЛЬКІСТЬ</u></b> питань на які користувач повинен буде відповісти під час проходження тесту.<br />&nbsp;Автор тесту може створити стільки питань, скільки побажає.<br />&nbsp;Якщо число створених питань буде меншим або дорівнюватиме <b><u>КІЛЬКОСТІ</u></b>, вказаній в цьому полі, тоді, під час проходження тесту, всі створені питання будуть у випадковому порядку надані користувачу для відповіді.<br />&nbsp;Якщо кількість створених питань буде більше <b><u>КІЛЬКОСТІ</u></b>, зазначеної в цьому полі, то користувач повинен буде відповісти тільки на встановлену <b><u>КІЛЬКІСТЬ</u></b> питань, які будуть щораз випадковим чином обиратися з усього переліку питань, створених автором для цього тесту.</div>),
  },

  questionQtty : {
    be : 'Колькасць пытанняў на тэставанне',
    en : 'Number of questions for one testing',
    pl : 'Ilość pytań do testowania',
    ru : 'Количество вопросов на тестирование',
    ua : 'Кількість питань на тестування',
  },

  questionsOrder_hover : {
    be : () => (<div>&nbsp;Пры праходжанні тэсту пытанні будуць з'яўляцца ў выпадковым парадку або паслядоўна.<br />&nbsp;У большасці тэстаў, асабліва экзаменацыйных або навучальных, парадак, у якім пытанні прадастаўляюцца карыстачу, не мае значэння. Наадварот, выпадковае кручэнне можа прынесці значныя перавагі.<br />&nbsp;Аднак могуць узнікнуць сітуацыі, у якіх парадак пытанняў будзе мець значэнне. Напрыклад, у апытанні. Паслядоўнасць пытанняў усталёўвае лагічную структуру апытання.</div>),
    en : () => (<div>&nbsp;When passing the test, questions will appear randomly or sequentially.<br />&nbsp;In most tests, especially Examination or Training, the order in which the questions are provided to the user does not matter. On the contrary, random spinning can have significant benefits.<br />&nbsp;However, there may be situations in which the order of the questions will matter. For example, in the Survey. The sequence of questions sets the logical structure of the survey.</div>),
    pl : () => (<div>&nbsp;Po zdaniu testu pytania pojawią się losowo lub sekwencyjnie.<br />&nbsp;W większości testów, szczególnie w badaniu lub szkoleniu, kolejność, w jakiej pytania są przekazywane do użytkownika, nie ma znaczenia. Przeciwnie, losowe wirowanie może przynieść znaczące korzyści.<br />&nbsp;Mogą jednak wystąpić sytuacje, w których kolejność pytań będzie miała znaczenie. Na przykład w ankiecie. Sekwencja pytań określa logiczną strukturę ankiety.</div>),
    ru : () => (<div>&nbsp;При прохождении теста вопросы будут появляться в случайном порядке или последовательно.<br />&nbsp;В большинстве тестов, особенно Экзаменационных или Обучающих, порядок, в котором вопросы предоставляются пользователю, не имеет значения. Напротив, случайный прядок может быть предпочтительнее.<br />&nbsp;Тем не менее, могут возникнуть ситуации, когда порядок появления вопросов будет иметь значение. Например, в Опросах. Последовательность вопросов задает логическую структуру опроса.</div>),
    ua : () => (<div>&nbsp;При проходженні тесту питання будуть з'являтися у випадковому порядку або послідовно.<br />&nbsp;В більшості тестів, особливо Екзаменаційних або Навчальних, порядок, в якому питання надаються користувачу, не має значення. Навпаки, випадковому прядку може мати суттєві переваги.<br />&nbsp;Тим не менш, можуть виникнути ситуації, в яких, порядок появи питань матиме значення. Наприклад, при Опитуванні. Послідовніть питань задає логічну структуру опитування.</div>),
  },

  questionsOrder : {
    be : 'Парадак пытанняў',
    en : 'Questions Order',
    pl : 'Kolejność pytań',
    ru : 'Порядок вопросов',
    ua : 'Порядок питань',
  },

  quetions : {
    be : 'пытань',
    en : 'qestions',
    pl : 'pytania',
    ru : 'вопросов',
    ua : 'питань',
  },

  retryPeriod_hover : {
    be : () => (<div>&nbsp;У гэтым полі усталёўваецца часовай інтэрвал (у днях), які мае адбыцца перш чым карыстачу будзе прадастаўлення магчымасці паўтарыць праходжанне тэсту.<br />&nbsp;- Калі ўсталяваны "<b><u>0</u></b>" - часовай інтэрвал не ўстанаўліваецца. Карыстальнік можа паўтарыць спробу праходжання тэсту калі захоча.<br />&nbsp;- Калі ўсталявана "<b><u>-1</u></b>" - магчымасць паўторнага праходжання тэсту адсутнічае для карыстальніка. Карыстачу будзе дазволена прайсці тэст толькі адзін раз.</div>),
    en : () => (<div>&nbsp;This field sets up the time interval (in days) between user attempts to pass the test again.<br />&nbsp;- If "<b><u>0</u></b>" - no interval will be set up. User will get new attempt anytime he wants to. <br />&nbsp;- If "<b><u>-1</u></b>" - no retries available for user. User will allowed to pass the test only once.</div>),
    pl : () => (<div>&nbsp;To pole określa przedział czasu (w dniach), który musi upłynąć, zanim użytkownik będzie miał możliwość powtórzenia testu.<br />&nbsp;- Jeśli ustawione na "<b><u>0</u></b>" - przedział czasu nie jest ustawiony. Użytkownik może ponowić test, kiedy tylko zechce.<br />&nbsp;- Jeśli ustawione na "<b><u>-1</u></b>" - użytkownik nie może powtórzyć testu. Użytkownik będzie mógł przystąpić do testu tylko raz.</div>),
    ru : () => (<div>&nbsp;В этом поле устанавливается временной интервал (в днях), который должен пройти прежде чем пользователю будет предоставленна возможность повторить прохождение теста.<br />&nbsp;- Если установлен "<b><u>0</u></b>" - временной интервал не устанавливается. Пользователь может повторить попытку прохождения теста когда захочет.<br />&nbsp;- Если установлено "<b><u>-1</u></b>" - возможность повторного прохождения теста отсутствует для пользователя. Пользователю будет разрешено пройти тест только один раз.</div>),
    ua : () => (<div>&nbsp;У цьому полі встановлюється часовий інтервал (в днях), який повинен пройти перш ніж користувачеві буде надана можливість повторити проходження тесту.<br />&nbsp;- Якщо встановлено "<b><u>0</u></b>" - часовий інтервал не встановлюється. Користувач може повторити спробу проходження тесту коли завгодно.<br />&nbsp;- Якщо встановлено "<b><u>-1</u></b>" - можливість повторного проходження тесту відсутня для користувача. Користувачеві буде дозволено пройти тест тільки один раз.</div>),
  },

  retryPeriod : {
    be : 'Паўтор праз',
    en : 'Retry after',
    pl : 'Powtórz przez',
    ru : 'Повтор через',
    ua : 'Повтор через',
  },

  days : {
    be : 'дня',
    en : 'days',
    pl : 'dnia',
    ru : 'дня',
    ua : 'дні',
  },

  testRights_hover : {
    be : () => (<div>&nbsp;У гэтым полі ўсталёўваюцца правы на рэдагаванне тэсту.<br />&nbsp;Аўтар тэсту можа даць доступ іншым карыстальнікам сайта на даданне, рэдагаванне і выдаленне пытанняў, якія адносяцца да гэтага тэсту.</div>),
    en : () => (<div>&nbsp;This field sets up rights policy for the test.<br />&nbsp;Author of the test can share is rights to create, modify and delete questions for this test with other users.</div>),
    pl : () => (<div>&nbsp;To pole określa prawa do edycji testu.<br />&nbsp;Autor testu może zapewnić dostęp do innych użytkowników strony w celu dodawania, edytowania i usuwania pytań związanych z tym testem.</div>),
    ru : () => (<div>&nbsp;В этом поле устанавливаются права на редактирование теста.<br />&nbsp;Автор теста может предоставить доступ другим пользователям сайта на добавление, редактирование и удаление вопросов, относящихся к этому тесту.</div>),
    ua : () => (<div>&nbsp;У цьому полі встановлюються права на редагування тесту.<br />&nbsp;Автор тесту може надати доступ іншим користувачам сайту на додавання, редагування та видалення питань, що відносяться до цього тесту.</div>),
  },

  testRights : {
    be : 'Правы на рэдагаванне тэсту',
    en : 'Test edit Rights',
    pl : 'Prawa do edycji testu',
    ru : 'Права на редактирование теста',
    ua : 'Права на редагування тесту',
  },

  authorRights_hover : {
    be : () => (<div>&nbsp;- <b><u>Толькі Я</u></b> - Толькі аўтар тэсту зможа дадаваць, рэдагаваць і выдаляць пытанні.</div>),
    en : () => (<div>&nbsp;- <b><u>Me only</u></b> - Only author of the test can add, delete and modify questions for the test.</div>),
    pl : () => (<div>&nbsp;- <b><u>Tylko YA</u></b> - Tylko autor testu będzie mógł dodawać, edytować i usuwać pytania.</div>),
    ru : () => (<div>&nbsp;- <b><u>Только Я</u></b> - Только автор теста сможет добавлять, редактировать и удалять вопросы.</div>),
    ua : () => (<div>&nbsp;- <b><u>Тільки Я</u></b> - Тільки автор тесту зможе додавати, редагувати і видаляти питання.</div>),
  },

  authorRights : {
    be : 'Толькі Я',
    en : 'Me only',
    pl : 'Tylko YA',
    ru : 'Только Я',
    ua : 'Тільки Я',
  },

  anybodyRights_hover : {
    be : () => (<div>&nbsp;- <b><u>Хто заўгодна</u></b> - Любы зарэгістраваны на сайце карыстач зможа дадаваць новыя пытанні для гэтага тэсту. Любы карыстальнік можа рэдагаваць або выдаляць <b><u>толькі свае пытанні</u></b>.<br />&nbsp;Ніхто, акрамя аўтара тэсту, не можа рэдагаваць або выдаляць чужыя пытанні.<br />&nbsp;Аўтар тэсту можа адрэдагаваць або выдаліць любое пытанне, хто б яго не стварыў.</div>),
    en : () => (<div>&nbsp;- <b><u>Anybody</u></b> - Any authorized user of the site can add new questions to the test. Every user can delete and modify <b><u>only own</u></b> questions. <br />&nbsp;Nobody except author of the test can affect other's questions. <br />&nbsp;Author of the test can delete and modify any question assigned to the test whoever created it.</div>),
    pl : () => (<div>&nbsp;- <b><u>Każdy</u></b> - Każdy użytkownik zarejestrowany na stronie będzie mógł dodawać nowe pytania do tego testu. Każdy użytkownik może edytować lub usuwać <b><u>tylko swoje</u></b> pytania.<br />&nbsp;Nikt oprócz autora testu nie może edytować ani usuwać pytań innych osób.<br />&nbsp;Autor testu może edytować lub usuwać dowolne pytania, bez względu na to, kto je utworzył.</div>),
    ru : () => (<div>&nbsp;- <b><u>Кто угодно</u></b> - Любой зарегистрированный на сайте пользователь сможет добавлять новые вопросы для этого теста. Любой пользователь может редактировать или удалять <b><u>только свои</u></b> вопросы. <br />&nbsp;Никто, кроме автора теста, не может редактировать или удалять чужие вопросы. <br />&nbsp;Автор теста может отредактировать или удалить любой вопрос, кто бы его не создал.</div>),
    ua : () => (<div>&nbsp;- <b><u>Будь-хто</u></b> - Будь-який зареєстрований на сайті користувач зможе додавати нові питання для цього тесту. Будь-який користувач може редагувати або видаляти <b><u>тільки свої</u></b> питання.<br />&nbsp;Ніхто, крім автора тесту, не може редагувати або видаляти чужі питання.<br />&nbsp;Автор тесту може відредагувати або видалити будь-яке питання, хто б його не створив.</div>),
  },

  anybodyRights : {
    be : 'Хто заўгодна',
    en : 'Anybody',
    pl : 'Każdy',
    ru : 'Кто угодно',
    ua : 'Будь-хто',
  },

  selectedRights_hover : {
    be : () => (<div>&nbsp;- <b><u>Давераныя карыстальнікі</u></b> - Аўтар тэсту можа прадаставіць абраным карыстальнікам правы на даданне, рэдагаванне і выдаленне пытанняў для гэтага тэсту.<br />&nbsp;Каб дадаць карыстальніка да спісу давераных, неабходна дадаць яго email ў ніжэйзгаданы спіс.</div>),
    en : () => (<div>&nbsp;- <b><u>Trusted users</u></b> - Author of the test can share his rights to add, modify and delete questions with selected users. <br />&nbsp;To do this author can add email of a trusted user to the following list.</div>),
    pl : () => (<div>&nbsp;- <b><u>Zaufani użytkownicy</u></b> - Autor testu może przyznać prawo do dodawania, edycji i usuwania pytań do tego testu wybranym użytkownikom.<br />&nbsp;Aby dodać użytkownika do listy zaufanych użytkowników, musisz dodać ich adres e-mail do poniższej listy.</div>),
    ru : () => (<div>&nbsp;- <b><u>Доверенные пользователи</u></b> - Автор теста может предоставить права на добавление, редактирование и удаление вопросов для этого теста доверенным пользователям.<br />&nbsp;Чтобы добавить пользователя к списку доверенных, необходимо добавить его email в нижеследующий список.</div>),
    ua : () => (<div>&nbsp;- <b><u>Довірені користувачі</u></b> - Автор тесту може надати права на додавання, редагування та видалення питань для цього тесту обраним користувачам.<br />&nbsp;Щоб додати користувача до списку довірених, необхідно додати його email в наведений нижче список.</div>),
  },

  selectedRights : {
    be : 'Давераныя',
    en : 'Trusted',
    pl : 'Zaufany',
    ru : 'Доверенные',
    ua : 'Довірені',
  },

  allowedUsers_hover : {
    be : () => (<div>&nbsp;У гэтым полі адлюстроўваецца спіс email-адрасоў давераных карыстальнікаў, якім аўтар дае прааво на даданне, рэдагаванне і выдаленне пытанняў для гэтага тэсту.<br />&nbsp;Усе карыстальнікі з гэтага спісу, зарэгістраваныя на сайце, атрымаюць ліст з запрашэннем прыняць удзел у стварэнні гэтага тэсту.<br />&nbsp;Незарэгістраваныя карыстальнікі лістоў-запрашэнняў атрымліваць не будуць, тым не менш, яны змогуць далучыцца да стварэння тэсту пасля рэгістрацыі на сайце.</div>),
    en : () => (<div>&nbsp;This field displays trusted users emails, that author added to allow them to create, modify and delete questions for this test.<br />&nbsp;All users from this list that are regitered on this site will receive invitation letter to co-work on this test.<br />&nbsp;Users that are not registered on this site will not receive any letters. Yet they can still co-work on this test after registration.</div>),
    pl : () => (<div>&nbsp;To pole wyświetla listę adresów e-mail zaufanych użytkowników, którym autor zapewnia prawo dodawania, edytowania i usuwania pytań do tego testu.<br />&nbsp;Wszyscy użytkownicy z tej listy zarejestrowani na stronie otrzymają list z zaproszeniem do wzięcia udziału w tworzeniu tego testu.<br />&nbsp;Niezarejestrowani użytkownicy nie otrzymają listów z zaproszeniem, jednak będą mogli dołączyć do tworzenia testu po rejestracji na stronie.</div>),
    ru : () => (<div>&nbsp;В этом поле отображается список email-адресов доверенных пользователей, которым автор предоставляет прааво на добавление, редактирование и удаление вопросов для этого теста.<br />&nbsp;Все пользователи из этого списка, зарегистрированные на сайте, получат письмо с приглашением принять участие в создании этого теста.<br />&nbsp;Незарегистрированные пользователи писем-приглашений получать не будут, тем не менее, они смогут присоединиться к созданию теста после регистрации на сайте.</div>),
    ua : () => (<div>&nbsp;У цьому полі відображається список email-адрес довірених користувачів, яким автор надає прааво на додавання, редагування та видалення питань для цього тесту.<br />&nbsp;Всі користувачі з цього списку, зареєстровані на сайті, отримають лист із запрошенням взяти участь у створенні цього тесту.<br />&nbsp;Незареєстровані користувачі листів-запрошень отримувати не будуть, проте, вони зможуть приєднатися до створення тесту після реєстрації на сайті.</div>),
  },

  allowedUsers : {
    be : 'Спіс давераных карыстальнікаў',
    en : 'Trusted users list',
    pl : 'Lista zaufanych użytkowników',
    ru : 'Список доверенных пользователей',
    ua : 'Список довірених користувачів',
  },

  allowed_email : {
    be : 'E-mail даверанага карыстальніка',
    en : 'Trusted user\'s e-mail',
    pl : 'Zaufany e-mail',
    ru : 'E-mail доверенного пользователя',
    ua : 'E-mail довыреного користувача',
  },
}

export const createQuestionLang = {
  config : {
    be : 'Канфіг',
    en : 'Config',
    pl : 'Konfig',
    ru : 'Конфиг',
    ua : 'Конфіг',
  },
}

export const questionConfLang = {
  title : {
    be : 'Налады пытання',
    en : 'Question Settings',
    pl : 'Ustawienia pytań',
    ru : 'Настройки вопроса',
    ua : 'Налаштування питання',
  },

  q_name_hover : {
    be : () => (<div>&nbsp;Пазначце НАЗВУ пытання. Гэтая НАЗВА з'яўляецца напамінам для Вас пра сутнасць пытання. Яна будзе адлюстроўвацца ў Вашым меню выбару пытанняў і прызначана выключна для Вашай зручнасці пры пераключэнні паміж пытаннямі.<br />Назва не прызначана для дэманстрацыі карыстальнікам.</div>),
    en : () => (<div>&nbsp;Set the name of the question. This name is a reminder to you of the essence of the question. It will be displayed in your question selection menu and is intended solely for your convenience when switching between questions.<br />This name is not intended to be shown to users.</div>),
    pl : () => (<div>&nbsp;Podaj nazwę pytania. Ten tytuł przypomina o istocie sprawy. Zostanie wyświetlony w menu wyboru pytań i jest przeznaczony wyłącznie dla Twojej wygody podczas przełączania między pytaniami.<br />Nazwa nie jest przeznaczona do wyświetlania użytkownikom.</div>),
    ru : () => (<div>&nbsp;Укажите НАЗВАНИЕ вопроса. Это НАЗВАНИЕ является напоминанием для Вас о сути вопроса. Оно будет отображаться в Вашем меню выбора вопросов и предназначено исключительно для Вашего удобства при переключении между вопросами.<br />НАЗВАНИЕ не предназначено для демонстрации пользователям.</div>),
    ua : () => (<div>&nbsp;Вкажіть НАЗВУ питання. Ця НАЗВА є нагадуванням для Вас про суть питання. Вона буде відображатися у Вашому меню вибору питань і призначена винятково для Вашої зручності при переключенні між питаннями.<br />НАЗВА не призначена для демонстрації користувачам.</div>),
  },

  q_name : {
    be : 'Назва пытання',
    en : 'Question Name',
    pl : 'Tytuł pytania',
    ru : 'Название вопроса',
    ua : 'Назва питання',
  },

  q_position_hover : {
    be : () => (<div>&nbsp;У гэтым полі ўсталёўваецца парадкавы нумар пытання.<br />&nbsp;- Калі раней, у наладах тэсту, Вы выбралі выпадковы парадак з'яўлення пытанняў, гэта поле не будзе мець ўплыву, пытанні ўсё роўна будуць з'яўляцца ў выпадковым парадку.<br />&nbsp;- Калі раней Вы паказалі, што пытанні павінны з'яўляцца паслядоўна, то пытанні будуць з'яўляцца ў адпаведнасці са значэннямі ў гэтым полі.</div>),
    en : () => (<div>&nbsp;This field sets the serial number of the question.<br />&nbsp;- If earlier, in the test settings, you selected a random order of questions, this field will not have an effect, questions will still appear in random order.<br />&nbsp;- If earlier you indicated that questions should appear sequentially, then questions will appear in accordance with the values in this field.</div>),
    pl : () => (<div>&nbsp;To pole ustawia numer seryjny pytania.<br />&nbsp;- Jeśli wcześniej, w ustawieniach testu, wybierzesz losową kolejność pytań, to pole nie przyniesie efektu, pytania będą nadal wyświetlane w losowej kolejności.<br />&nbsp;- Jeśli wcześniej zaznaczyłeś, że pytania powinny pojawiać się sekwencyjnie, pytania pojawią się zgodnie z wartościami w tym polu.</div>),
    ru : () => (<div>&nbsp;Это поле устанавливает порядковый номер вопроса.<br />&nbsp;- Если ранее, в настройках теста, Вы выбрали случайный порядок появления вопросов, это поле не будет иметь влияния, вопросы все равно будут появляться в случайном порядке.<br />&nbsp;- Если ранее Вы указали, что вопросы должны появляться последовательно, то вопросы будут появляться в соответствии со значениями в этом поле.</div>),
    ua : () => (<div>&nbsp;Це поле встановлює порядковий номер питання.<br />&nbsp;- Якщо раніше, в настройках тесту, Ви вибрали випадковий порядок появи питань, це поле не матиме впливу, питання все одно будуть з'являтися у випадковому порядку.<br />- Якщо раніше Ви вказали, що питання повинні з'являтися послідовно, то питання будуть з'являтися у відповідності зі значеннями в цьому полі.</div>),
  },

  q_position : {
    be : 'Нумар пытання',
    en : 'Question Number',
    pl : 'Numer pytania',
    ru : 'Номер вопроса',
    ua : 'Номер питання',
  },

  q_price_hover : {
    be : () => (<div>&nbsp;Паколькі, у межах аднаго тэсту, складанасць пытанняў можа быць рознай, мяркуецца, што за адказ на больш складанае пытанне карыстальнік павінен атрымаць больш баляў, чым за адказ на просты.<br />Поле "Цана пытання" устанаўлівае колькасць балаў, якія карыстач атрымае за правільны адказ на гэтае пытанне.</div>),
    en : () => (<div>&nbsp;Since, within a single test, the complexity of the questions may be different, it is assumed that for answering a more complex question the user should get more points than for answering a simple one.<br />The Question Price field sets the number of points that the user will receive for the correct answer to this question.</div>),
    pl : () => (<div>&nbsp;Ponieważ w ramach jednego testu złożoność pytań może być inna, zakłada się, że za udzielenie odpowiedzi na bardziej złożone pytanie użytkownik powinien uzyskać więcej punktów niż za odpowiedź na pytanie proste.<br />Pole Cena pytania określa liczbę punktów, które użytkownik otrzyma za prawidłową odpowiedź na to pytanie.</div>),
    ru : () => (<div>&nbsp;Поскольку, в пределах одного теста, сложность вопросов может быть разной, предполагается, что за ответ на более сложный вопрос пользователь должен получить больше балов, чем за ответ на простой.<br />Поле "Цена вопроса" устанавливает количество баллов, которые пользователь получит за правильный ответ на этот вопрос.</div>),
    ua : () => (<div>&nbsp;Оскільки, в межах одного тесту, складність питань може бути різною, передбачається, що за відповідь на більш складне питання користувач повинен отримати більше балів, ніж за відповідь на просте.<br />Поле "Ціна питання" встановлює кількість балів, які користувач отримає за правильну відповідь на це питання.</div>),
  },

  q_price : {
    be : 'Кошт пытання',
    en : 'Question Price',
    pl : 'Cena pytania',
    ru : 'Цена вопроса',
    ua : 'Ціна питання',
  },

  q_timeout_hover : {
    be : () => (<div>&nbsp;Час (у секундах), які даецца карыстачу, каб адказаць на гэтае пытанне. Па заканчэнні гэтага часу дадзеныя адказаў "як ёсць" будуць аўтаматычна адпраўлены на сервер для ацэнкі. Карыстальнік павінен паспець даць павольны адказ на працягу ўстаноўленага часу.</div>),
    en : () => (<div>&nbsp;Time (in seconds) given to the user to answer this question. At the end of this time, the "as is" answer data will be automatically sent to the server for evaluation. The user have to give a correct answer within the specified time.</div>),
    pl : () => (<div>&nbsp;Czas (w sekundach) podany użytkownikowi na odpowiedź na to pytanie. Pod koniec tego czasu dane odpowiedzi "jak jest" zostaną automatycznie przesłane do serwera w celu oceny. Użytkownik musi zdążyć podać poprawną odpowiedź w określonym czasie.</div>),
    ru : () => (<div>&nbsp;Время (в секундах), предоставляемое испытуемому для ответа на этот вопрос. По истечении этого времени, данные об ответе испытуемого "как есть" будут автоматически отправлены на сервер для оценки. Испытуемый должен успеть дать павильный ответ за указанное время.</div>),
    ua : () => (<div>&nbsp;Час (в секундах), що надається користувачеві для відповіді на це питання. Після закінчення цього часу, дані про відповідь "як є" будуть автоматично відправлені на сервер для оцінки. Користувач повинен встигнути дати павільну відповідь за зазначений час.</div>),
  },

  q_timeout : {
    be : 'Час для адказу',
    en : 'Question Timeout',
    pl : 'Czas na odpowiedź',
    ru : 'Время на ответ',
    ua : 'Час на відповідь',
  },

  seconds : {
    be : 'секунд',
    en : 'seconds',
    pl : 'sekundy',
    ru : 'секунд',
    ua : 'секунд',
  },

  q_type_hover : {
    be : () => (<div>&nbsp;Выберыце тып гэтага пытання са спісу ніжэй.</div>),
    en : () => (<div>&nbsp;Select type for this question from the list below.</div>),
    pl : () => (<div>&nbsp;Wybierz typ tego pytania z poniższej listy.</div>),
    ru : () => (<div>&nbsp;Выберите тип для этого вопроса из списка, приведенного ниже.</div>),
    ua : () => (<div>&nbsp;Оберіть тип для цього питання зі списку, наведеного нижче.</div>),
  },

  q_type : {
    be : 'Тып пытання',
    en : 'Question Type',
    pl : 'Typ pytania',
    ru : 'Тип вопроса',
    ua : 'Тип питання',
  },

  oneofmany_hover : {
    be : () => (<div>&nbsp;Карыстальнік павінен выбраць адзін правільны адказ з прыведзенага спісу.</div>),
    en : () => (<div>&nbsp;User must select one correct answer from the given list.</div>),
    pl : () => (<div>&nbsp;Użytkownik musi wybrać jedną poprawną odpowiedź z listy.</div>),
    ru : () => (<div>&nbsp;Испытуемый должен выбрать один правильный ответ из приведенного списка.</div>),
    ua : () => (<div>&nbsp;Користувач повинен вибрати одну правильну відповідь з наведеного списку.</div>),
  },

  manyofmany_hover : {
    be : () => (<div>&nbsp;Карыстальнік павінен выбраць некалькі правільных адказаў з прыведзенага спісу.</div>),
    en : () => (<div>&nbsp;User must select several correct answers from the given list.</div>),
    pl : () => (<div>&nbsp;Użytkownik musi wybrać kilka prawidłowe odpowiedzi z listy.</div>),
    ru : () => (<div>&nbsp;Испытуемый должен выбрать несколько правильных ответов из приведенного списка.</div>),
    ua : () => (<div>&nbsp;Користувач повинен вибрати декілька правильних відповідей з наведеного списку.</div>),
  },

  setorder_hover : {
    be : () => (<div>&nbsp;Карыстальнік павінен размясціць элементы прыведзенага спісу ў правільнай паслядоўнасці.</div>),
    en : () => (<div>&nbsp;User must arrange items in the list in the correct order.</div>),
    pl : () => (<div>&nbsp;Użytkownik musi ułożyć pozycje na liście we właściwej kolejności.</div>),
    ru : () => (<div>&nbsp;Испытуемый должен расположить элементы приведенного списка в правильной последовательности.</div>),
    ua : () => (<div>&nbsp;Користувач повинен розташувати елементи наведеного списку в правильній послідовності.</div>),
  },

  findmatch_hover : {
    be : () => (<div>&nbsp;Карыстальнік павінен ўсталяваць адпаведнасці паміж элементамі двух спісаў.</div>),
    en : () => (<div>&nbsp;User must set correspondence between the elements of two lists.</div>),
    pl : () => (<div>&nbsp;Użytkownik musi ustalić zgodność między elementami dwóch list.</div>),
    ru : () => (<div>&nbsp;Испытуемый должен установить соответствия между элементами двух списков.</div>),
    ua : () => (<div>&nbsp;Користувач повинен встановити відповідності між елементами двох списків.</div>),
  },

  freeanswer_hover : {
    be : () => (<div>&nbsp;Карыстальнік павінен самастойна сфармуляваць адказ на пытанне.<br />&nbsp;Нярэдка, гэты тып пытання не можа быць правераны аўтаматычна. Праверка правільнасці адказу карыстальніка застаецца задачай аўтара тэсту.</div>),
    en : () => (<div>&nbsp;User must independently formulate the answer to the question.<br />&nbsp;Often this type of question cannot be checked automatically. Verification of the user's response remains the task of the author of the test.</div>),
    pl : () => (<div>&nbsp;Użytkownik musi samodzielnie sformułować odpowiedź na pytanie.<br />&nbsp;Często tego typu pytań nie można sprawdzić automatycznie. Weryfikacja odpowiedzi użytkownika pozostaje zadaniem twórcy testu.</div>),
    ru : () => (<div>&nbsp;Испытуемый должен самостоятельно сформулировать ответ на вопрос.<br />&nbsp;Нередко, этот тип вопроса не может быть проверен автоматически. Проверка правильности ответа пользователя остается задачей создателя теста.</div>),
    ua : () => (<div>&nbsp;Користувач повинен самостійно сформулювати відповідь на питання.<br />&nbsp;Нерідко, цей тип питання не може бути перевірений автоматично. Перевірка правильності відповіді користувача залишається завданням автора тесту.</div>),
  },
}

export const questionLangLang = {
  question_in : {
    be : 'Пытанне на',
    en : 'Question in',
    pl : 'Pytanie po',
    ru : 'Вопрос нв',
    ua : 'Питання',
  },

  be: {
    be : 'Беларускай', 
    en : 'Belorussian',
    pl : 'Bbiałorusku', 
    ru : 'Белорусском', 
    ua : 'Білоруською',
  }, 

  en : {
    be : 'Англійскай', 
    en : 'English',
    pl : 'Angielsku', 
    ru : 'Английском', 
    ua : 'Англійською',
  },

  pl : {
    be : 'Польскай', 
    en : 'Polish',
    pl : 'Polsku', 
    ru : 'Польском', 
    ua : 'Польською',
  },

  ru : {
    be : 'Рускай', 
    en : 'Russian',
    pl : 'Rosyjsku', 
    ru : 'Русском', 
    ua : 'Російською',
  },

  ua : {
    be : 'Украінскай', 
    en : 'Ukrainian',
    pl : 'Ukraińsku', 
    ru : 'Украинском', 
    ua : 'Українською',
  },

  language : {
    be : 'мове', 
    en : 'language',
    pl : 'język', 
    ru : 'языке', 
    ua : 'мовою',
  },

  answer : {
    be : 'Адказ', 
    en : 'Answer',
    pl : 'Odpowiedź', 
    ru : 'Ответ', 
    ua : 'Відповідь',
  },

  add_answer : {
    be : 'Дадаць адказ',
    en : 'Add answer',
    pl : 'Dodać odpowiedź',
    ru : 'Добавить ответ',
    ua : 'Додати відповідь',
  }
}

export const saveTestLang = {
  title : {
    be : 'Праверка і захаванне тэсту',
    en : 'Test check and save',
    pl : 'Rewizja i zapis testu',
    ru : 'Проверка и сохранение теста',
    ua : 'Перевірка і збереження тесту',
  },

  test_owner : {
    be : 'Аўтар тэсту:',
    en : 'Test\'s Author:',
    pl : 'Autor testu:',
    ru : 'Автор теста:',
    ua : 'Автор тесту:',
  },

  anonymous : {
    be : 'Ананім',
    en : 'Anonymous',
    pl : 'Anonimowy',
    ru : 'Аноним',
    ua : 'Анонім',
  },

  supported_languages : {
    be : 'Падтрымліваюцца мовы:',
    en : 'Supported Languages:',
    pl : 'Obsługiwane języki:',
    ru : 'Поддерживаемые языки:',
    ua : 'Підтримувані мови:',
  },

  no_langs : {
    be : 'Ні адна мова ня выбраная',
    en : 'No langs selected',
    pl : 'Nie wybrano języka',
    ru : 'Ни один язык не выбран',
    ua : 'Жодна мова не обрана',
  },

  test_name : {
    be : 'Назва тэсту на',
    en : 'Test Name in',
    pl : 'Nazwa testu po',
    ru : 'Название теста на',
    ua : 'Назва тесту',
  },

  test_type : {
    be : 'Тып тэсту:',
    en : 'Test Type:',
    pl : 'Typ testu:',
    ru : 'Тип теста:',
    ua : 'Тип тесту:',
  },

  examination : {
    be : 'Экзаменацыйны', 
    en : 'Examination',
    pl : 'Egzaminacyjny', 
    ru : 'Экзаменационный', 
    ua : 'Екзаменаційний',
  },

  education : {
    be : 'Навучальны', 
    en : 'Educational',
    pl : 'Oświatowy', 
    ru : 'Образовательный', 
    ua : 'Навчальний',
  },

  social : {
    be : 'Апытанне', 
    en : 'Poll',
    pl : 'Ankieta', 
    ru : 'Опрос', 
    ua : 'Опитування',
  },

  number_all_questions: {
    be : 'Колькасць усіх тэставых пытанняў:',
    en : 'Number of all questions assigned to test:',
    pl : 'Ilość wszystkich pytań przypisanych do testu:',
    ru : 'Количество всех вопросов теста:',
    ua : 'Кількість всіх питань тесту:',
  },

  number_questions_testing : {
    be : 'Колькасць пытанняў у тэставанні:',
    en : 'Number of questions for one testing:',
    pl : 'Ilość pytań podczas testowania:',
    ru : 'Количество вопросов в тестировании:',
    ua : 'Кількість питань в тестуванні:',
  },

  all_assigned_questions : {
    be : 'Усе пытанні, дададзеныя ў тэст',
    en : 'All questions that are assigned to test',
    pl : 'Wszystkie pytania przypisane do testu',
    ru : 'Все вопросы, добавленные в тест',
    ua : 'Всі питання, додані в тест',
  },

  questions_order : {
    be : 'Парадак пытанняў',
    en : 'Questions Order',
    pl : 'Kolejność pytań',
    ru : 'Порядок вопросов',
    ua : 'Порядок питань',
  },

  random : {
    be : 'выпадковый', 
    en : 'random',
    pl : 'losowy', 
    ru : 'случайный', 
    ua : 'випадковий',
  },

  order : {
    be : 'паслядоўны', 
    en : 'order',
    pl : 'konsekwentny', 
    ru : 'последовательный', 
    ua : 'послідовний',
  },

  retry_after : {
    be : 'Паўторная спроба даступная праз:',
    en : 'Retry available after:',
    pl : 'Ponowna próba jest dostępna poprzez:',
    ru : 'Повторная попытка доступна через:',
    ua : 'Повторна спроба доступна через:',
  },

  no_retries : {
    be : 'Паўторныя спробы недаступныя',
    en : 'Retries unavailable',
    pl : 'Ponowna próba niedostępna',
    ru : 'Повторные попытки недоступны',
    ua : 'Повторні спроби недоступні',
  },

  anytime : {
    be : 'У любы час',
    en : 'Anytime',
    pl : 'W dowolnym momencie',
    ru : 'В любое время',
    ua : 'В будь-який час',
  },

  after : {
    be : 'Праз',
    en : 'After',
    pl : 'Przez',
    ru : 'Через',
    ua : 'Через',
  },

  days : {
    be : 'дзён',
    en : 'days',
    pl : 'dni',
    ru : 'дней',
    ua : 'дні',
  },

  allowed_users : {
    be : 'Карыстальнікі, якім дазволена рэдагаваць тэст:',
    en : 'Users allowed to edit this test:',
    pl : 'Użytkownicy, którzy mogą edytować test:',
    ru : 'Пользователи, которым разрешено редактировать тест:',
    ua : 'Користувачі, яким дозволено редагувати тест:',
  },

  anybody : {
    be : 'Любы зарэгістраваны карыстальнік',
    en : 'Any registered user',
    pl : 'Każdy zarejestrowany użytkownik',
    ru : 'Любой зарегистрированный пользователь',
    ua : 'Будь-який зареєстрований користувач',
  },

  author : {
    be : 'Аўтар',
    en : 'Author',
    pl : 'Autor',
    ru : 'Автор',
    ua : 'Автор',
  },
}

export const questionCheckLang = {
  question : {
    be : 'Пытанне',
    en : 'Question',
    pl : 'Pytanie',
    ru : 'Вопрос',
    ua : 'Питання',
  },

  overall : {
    be : 'У цэлым',
    en : 'Overall',
    pl : 'Ogólnie',
    ru : 'В целом',
    ua : 'Загалом',
  },

  q_type : {
    be : 'Тып пытання:',
    en : 'Question Type:',
    pl : 'Typ pytania:',
    ru : 'Тип вопроса:',
    ua : 'Тип питання:',
  },

  q_position : {
    be : 'Нумар пытання',
    en : 'Question Number',
    pl : 'Numer pytania',
    ru : 'Номер вопроса',
    ua : 'Номер питання',
  },

  q_price : {
    be : 'Кошт пытання',
    en : 'Question Price',
    pl : 'Cena pytania',
    ru : 'Цена вопроса',
    ua : 'Ціна питання',
  },

  q_timeout : {
    be : 'Час для адказу:',
    en : 'Question Timeout:',
    pl : 'Czas na odpowiedź:',
    ru : 'Время на ответ:',
    ua : 'Час на відповідь:',
  },

  seconds : {
    be : 'секунд',
    en : 'seconds',
    pl : 'sekundy',
    ru : 'секунд',
    ua : 'секунд',
  },

  answers_added : {
    be : 'Адказаў дададзена:',
    en : 'Answers added:',
    pl : 'Odpowiedzi dodano:',
    ru : 'Ответов добавлено:',
    ua : 'Відповідей додано:',
  },

  two_answers_minimum : {
    be : ' - Вы павінны дадаць як мінімум 2 адказы на гэты тып пытанняў.',
    en : ' - You have to add 2 answers minimum for this type of question.',
    pl : ' - Musisz dodać co najmniej 2 odpowiedzi dla tego typu pytania.',
    ru : ' - Необходимо добавить минимум 2 ответа для этого типа вопросов.',
    ua : ' - Необхідно додати мінімум 2 відповіді для цього типу питання.',
  },

  answer_type : {
    be : 'Тып адказаў:',
    en : 'Answers type:',
    pl : 'Typ odpowiedzi:',
    ru : 'Тип ответов:',
    ua : 'Тип відповідей:',
  },

  incorrect_answer_type : {
    be : ' - Няправільны тып. Дазволена толькі "тэкст" або "нумар".', 
    en : ' - Incorrect type. Only "text" or "number" allowed.',
    pl : ' - Zły typ. Dozwolony jest tylko "tekst" lub "cyfra".', 
    ru : ' - Неверный тип. Возможен только "текст" или "число".', 
    ua : ' - Невірний тип. Дозволено тільки "текст" або "число".',
  },

  q_text_in : {
    be : 'Тэкст пытання на', 
    en : 'Question Text in',
    pl : 'Tekst pytania po', 
    ru : 'Текст вопроса на', 
    ua : 'Текст питання',
  },

  looks_good : {
    be : 'Выглядае добра',
    en : 'Looks good',
    pl : 'Wygląda dobrze',
    ru : 'В порядке',
    ua : 'Все добре',
  },

  no_text : {
    be : 'Няма тэксту',
    en : 'No text',
    pl : 'Brak tekstu',
    ru : 'Нет текста',
    ua : 'Нема тексту',
  },

  answer_text_in : (lang, number, userLang) => {
    switch (userLang) {
      case 'be' : return `Тэкст Адказу №${number} на ${questionLangLang[lang][userLang]}`;
      case 'en' : return `Answer ${number} Text in ${questionLangLang[lang][userLang]}`;
      case 'pl' : return `Tekst odpowiedzi Nr.${number} po ${questionLangLang[lang][userLang]}`;
      case 'ru' : return `Текст Ответа №${number} на ${questionLangLang[lang][userLang]}`;
      case 'ua' : return `Текст Відповіді №${number} ${questionLangLang[lang][userLang]}`;
      default : return `Answer ${number} Text in ${questionLangLang[lang][userLang]}`;
    }
  },

  equiv_text_in : (lang, number, userLang) => {
    switch (userLang) {
      case 'be' : return `Тэкст Адпаведнасці на ${questionLangLang[lang][userLang]} для Адказу№${number}:`;
      case 'en' : return `Compliance Text in ${questionLangLang[lang][userLang]} for Answer ${number}:`;
      case 'pl' : return `Tekst Ekwiwalenta po ${questionLangLang[lang][userLang]} dla Odpowiedzi Nr.${number}:`;
      case 'ru' : return `Текст Соответствия на ${questionLangLang[lang][userLang]} для Ответа №${number}`;
      case 'ua' : return `Текст Відповідності ${questionLangLang[lang][userLang]} для Відповіді №${number}`;
      default : return `Compliance Text in ${questionLangLang[lang][userLang]} for Answer ${number}:`;
    }
  },

  correct_answers_checked : {
    be : 'Правільныя адказы адзначаны:',
    en : 'Correct answers selected:',
    pl : 'Prawidłowe odpowiedzi są oznaczone:',
    ru : 'Правильные ответы отмечены:',
    ua : 'Правильні відповіді відмічені:',
  },

  only_one_check : {
    be : 'Адзін (і толькі адзін) адказ павінен быць абраны як правільны',
    en : 'One (and only one) answer should be selected as correct',
    pl : 'Jedna (i tylko jedna) odpowiedź powinna być wybrana jako poprawna',
    ru : 'Один (и только один) ответ должен быть отмечен как правильный',
    ua : 'Одна (і тільки одна) відповідь має бути відмічена як вірна',
  },

  all_check_warn : {
    be : 'Усе адказы былі адзначаны аднолькава',
    en : 'All answers was marked equaly',
    pl : 'Wszystkie odpowiedzi zostały oznaczone jednakowo',
    ru : 'Все ответы были отмечены одинаково',
    ua : 'Всі відповіді були відмічені однаково',
  },

  wrong_parametr_warn : {
    be : 'Няправільны параметр у адным ці некалькіх адказах',
    en : 'Wrong parameter in one or more answers',
    pl : 'Nieprawidłowy parametr w co najmniej jednej odpowiedzi',
    ru : 'Неверный параметр в одном или более вопросах',
    ua : 'Невірний параметр в одному чи декількох питаннях',
  },

  answer_order : (number, userLang) => {
    switch (userLang) {
      case 'be' : return `Парадкавы нумар для Адказу ${number}:`;
      case 'en' : return `Answer ${number} order:`;
      case 'pl' : return `Numer seryjny Оdpowiedzi ${number}:`;
      case 'ru' : return `Порядковый номер для Ответа ${number}:`;
      case 'ua' : return `Порядковий номер для Відповіді ${number}:`;
      default : return `Answer ${number} order:`;
    }
  },

  text : {
    be : 'тэкст', 
    en : 'text',
    pl : 'tekst', 
    ru : 'текст', 
    ua : 'текст',
  },

  number : {
    be : 'лік', 
    en : 'number',
    pl : 'cyfra', 
    ru : 'число', 
    ua : 'число',
  },
}

export const q_types = {
  oneofmany : {
    be : 'Адзін з некалькіх.',
    en : 'One of Many',
    pl : 'Jedna z kilku',
    ru : 'Один из нескольких',
    ua : 'Одина з декількох',
  },

  manyofmany : {
    be : 'Некалькі з многіх',
    en : 'Many of Many',
    pl : 'Kilka z wielu',
    ru : 'Многие из многих',
    ua : 'Декілька з багатьох',
  },
  
  setorder : {
    be : 'Вызначэнне паслядоўнасці',
    en : 'Set Order',
    pl : 'Sekwencjonowanie',
    ru : 'Определение последовательности',
    ua : 'Визначення послідовності',
  },

  findmatch : {
    be : 'Ўстанаўленне адпаведнасці',
    en : 'Find a Match',
    pl : 'Dopasowywanie',
    ru : 'Установление соответствия',
    ua : 'Встановлення відповідності',
  },
  
  freeanswer : {
    be : 'Свабодны адказ',
    en: 'Free Answer',
    pl : 'Wolna odpowiedź',
    ru: 'Свободный ответ',
    ua: 'Вільна відповідь',
  },
}

export const congratPageLang = {
  congratulation : {
    be : 'Віншуем !',
    en : 'Congratulation !',
    pl : 'Gratulacje !',
    ru : 'Поздравляем !',
    ua : 'Вітаємо !',
  },

  save_success : {
    be : 'Ваш тэст быў паспяхова захаваны!',
    en : 'Your test saved successfully !',
    pl : 'Twój test został zapisany pomyślnie!',
    ru : 'Ваш тест был успешно сохранен !',
    ua : 'Ваш тест був успішно збережений !',
  },

  visible_after_check : {
    be : 'Ён будзе апублікаваны пасля праверкі мадэратара.',
    en : 'It will be published after checking by the moderator.',
    pl : 'Zostanie opublikowany po sprawdzeniu przez moderatora.',
    ru : 'Он будет опубликован после проверки модератора.',
    ua : 'Він буде опублікований після перевірки модератора.',
  },

  create_test : {
    be : 'Стварыць новы тэст',
    en : 'Create New Test',
    pl : 'Utwórz nowy test',
    ru : 'Создать новый тест',
    ua : 'Створити новий тест',
  },

  my_tests : {
    be : 'Спіс маіх тэстаў',
    en : 'My Tests List',
    pl : 'Lista moich testów',
    ru : 'Список моих тестов',
    ua : 'Список моїх тестів',
  },

  homepage : {
    be : 'Галоўная старонка',
    en : 'Home Page',
    pl : 'Strona główna',
    ru : 'Домашняя страница',
    ua : 'Домашня сторінка',
  },
}

export const createTestErrors = {
  no_user : {
    be : 'Карыстальнік не вызначаны. Калі ласка, ўвайдзіце ў свой уліковы запіс.',
    en : 'Undefined user. Please login.',
    pl : 'Nie zdefiniowano użytkownika. Zaloguj się do swojego konta.',
    ru : 'Пользователь не определен. Пожалуйста, войдите в свою учетную запись.',
    ua : 'Користувач не візначений. Будь ласка, увійдіть в свій обліковий запис.',
  },
  
  wrong_user : {
    be : 'Некарэктны фармат дадзеных пра карыстальніка. Калі ласка аутентифицируйтесь яшчэ раз.',
    en : 'Wrong user data. Please relogin.',
    pl : 'Niepoprawny format danych użytkownika. Uwierzytelnij ponownie.',
    ru : 'Некорректный формат данных о пользователе. Пожалуйста аутентифицируйтесь еще раз.',
    ua : 'Некорректний формат даних про користувача. Будь ласка, пройдіть аутентифікацію ще раз.',
  },

  unknown_user : {
    be : 'Невядомы карыстальнік. Калі ласка, аутентифицируйтесь або зарэгіструйцеся.',
    en : 'Unknown user. Please login or signin',
    pl : 'Nieznany użytkownik. Uwierzytelnij lub zarejestruj się.',
    ru : 'Неизвестный пользователь. Пожалуйста, аутентифицируйтесь или зарегистрируйтесь.',
    ua : 'Невідомий користувач. Будь ласка, аутентифікуйтеся або зареєструйтеся.',
  },

  wrong_data : {
    be : 'Вы адправілі на сервер некарэктныя дадзеныя. Калі ласка, праверце Ваш тэст.',
    en : 'You send wrong data to server. Please check your test.',
    pl : 'Wysłałeś nieprawidłowe dane na serwer. Sprawdź swój test.',
    ru : 'Вы отправили на сервер некорректные данные. Пожалуйста, проверьте Ваш тест.',
    ua : 'Ви відправили на сервер некоректні дані. Будь ласка, перевірте Ваш тест.',
  },

  no_languages : {
    be : 'Ні адна мова не абраны. Вы павінны выбраць хотябы адну',
    en : 'No languages selected. You should select at least one.',
    pl : 'Nie wybrano języków. Musisz wybrać przynajmniej jeden.',
    ru : 'Ни один язык не выбран. Вы должны выбрать хотябы один.',
    ua : 'Жодна мова не обрана. Ви маєте обрати хочаб одну.',
  },

  no_testname : {
    be : 'Вы павінны ўвесці тэставае імя (не менш за 3 знакаў) для ўсіх выбраных моў. Альбо запоўніце ўсе палі ў форме альбо выдаліце ​​непадтрыманыя мовы.',
    en : 'You should enter Test Name (3 symbols minimum) for all selected languages. Either complete all fields in the form or delete unsupported languages.',
    pl : 'Musisz wpisać nazwę testu (minimum 3 znaki) dla wszystkich wybranych języków. Wypełnij wszystkie pola formularza lub usuń nieobsługiwane języki.',
    ru : 'Вы должны ввести название теста (минимум 3 символа) для всех выбраных языков. Или заполните все поля в форме или удалите неподдерживаемые языки.',
    ua : 'Ви повинні ввести назву тесту (мінімум 3 символи) для всіх обраних мов. Або заповніть усі поля у формі або видаліть непідтримувані мови.',
  },

  no_testtype : {
    be : 'Неабходна выбраць тып тэсту або паказаны няправільны тып.',
    en : 'Test type should be selected or wrong test type.',
    pl : 'Musisz wybrać typ testu lub podano niewłaściwy typ.',
    ru : 'Необходимо выбрать тип теста или указан неверный тип.',
    ua : 'Необхідно вибрати тип тесту або вказано невірний тип.',
  },

  saved_localy : {
    be : 'Тэст быў захаваны на мясцовым узроўні. Толькі аўтарызаваныя карыстальнікі могуць захаваць тэст на серверы. Калі ласка, увайдзіце або зарэгіструйцеся.',
    en : 'Test was saved localy. Test Save to server not available for unauthorized users. Please login or signin.',
    pl : 'Test został zapisany lokalnie. Tylko autoryzowani użytkownicy mogą zapisać test na serwerze. Proszę zaloguj się lub zarejestruj się.',
    ru : 'Тест был сохранен локально. Сохранить тест на сервере могут только авторизованные пользователей. Пожалуйста, войдите или зарегистрируйтесь.',
    ua : 'Тест було збережено локально. Зберегти тест на сервері можуть тільки авторизовані користувачів. Будь ласка, увійдіть або зареєструйтеся.',
  },
}