const defs = [
  {
    id: 'fdsfds4536',
    title: 'Львівська Ратуша',
    address: 'м. Львів, пл. Ринок, 1',
    location: {type: 'Point', coordinates: [24.031691, 49.841771]},
    actual_date: '2019-02-12',
    floor: 1,
    storage_place: 'Каб. Муніципальної Варти',
    accessibility: 'Цілодобово. Без вихідних',
    language: 'Російськомовний',
    informational_plates: false,
    phone: ['380322975994'],
    additional_information: 'Перший кабінет праворуч на 1 поверсі'
  },
  {
    id: '1312432dgh',
    title: 'Львівський міжнародний аеропорт',
    address: 'м. Львів, вул. Любінська, 168',
    location: {type: 'Point', coordinates: [23.959755, 49.818201]},
    actual_date: '2019-02-22',
    floor: 1,
    storage_place: 'Біля каб. Медпункту (на стіні)',
    accessibility: 'Цілодобово. Без вихідних',
    language: 'Україномовний',
    informational_plates: true,
    phone: ['380322298303'],
    additional_information:
      'Вхід в крайні ліві розсувні двері (ліворуч та прямо)'
  },
  {
    id: '12fdwgjhj',
    title: "Медичний центр 'Профідент-плюс'",
    address: 'м. Львів, вул. Єфремова, 85 (вхід з вул. Конотопська)',
    location: {type: 'Point', coordinates: [24.001906, 49.828486]},
    actual_date: '2019-03-07',
    floor: 1,
    storage_place: 'Рецепція (схований від загального виду, треба запитатись)',
    accessibility: 'Пн-Пт: 09:00-18:00',
    language: 'Російськомовний',
    informational_plates: true,
    phone: ['380503713200', '380322401740'],
    additional_information: ''
  },
  {
    id: '1e_3gfgfd',
    title: "Центр стоматологічної імплантації та протезування 'ММ'",
    address: 'м. Львів, вул. Пасічна, 36a',
    location: {type: 'Point', coordinates: [24.066929, 49.830939]},
    actual_date: '2019-03-12',
    floor: 2,
    storage_place:
      'Операційна (схований від загального виду, треба запитатись на рецепції)',
    accessibility: 'Пн-Пт: 10:00-18:00',
    language: 'Україномовний',
    informational_plates: true,
    phone: ['380322712182'],
    additional_information: ''
  },
  {
    id: 'fdsgty899o0p',
    title:
      "Клініка естетичної стоматології 'Перфект-Дент' (навпроти гот. 'Євроготель')",
    address: 'м. Львів, вул. Тершаковців, 1б',
    location: {type: 'Point', coordinates: [24.041093, 49.834336]},
    actual_date: '2019-03-13',
    floor: 1,
    storage_place:
      'Каб. Хірургії (схований від загального виду, треба запитатись на рецепції)',
    accessibility: 'Пн-Пт: 09:00-20:00, Сб: 10:00-17:00',
    language: 'Україномовний',
    informational_plates: true,
    phone: ['380672750749'],
    additional_information: ''
  },
  {
    id: 'dcasfdgth-098',
    title: 'ТРЦ King Cross Leopolis',
    address: 'с. Сокільники, вул. Стрийська, 30',
    location: {type: 'Point', coordinates: [24.012545, 49.772775]},
    actual_date: '2019-03-14',
    floor: 1,
    storage_place: 'Каб. Медпункту (в години роботи ТРЦ)',
    accessibility:
      'Цілодобово. Без вихідних (якщо звернутися до служби охорони ТРЦ)',
    language: 'Англомовний',
    informational_plates: true,
    _phone: [],
    additional_information:
      "Зона входу біля ТЦ 'Епіцентр' та сходів, що ведуть на 2 пов., по ліву сторону коридор, що веде до туалетів та службових приміщень, в кінці коридору ліворуч"
  },
  {
    id: 'vsdvfdg565y6j8---',
    title: "Компанія 'Nestle'",
    address: 'м. Львів, вул. Угорська, 14',
    location: {type: 'Point', coordinates: [24.044693, 49.810376]},
    actual_date: '2019-03-18',
    floor: 3,
    storage_place: 'Каб. Медпункту',
    accessibility:
      'Цілодобово. Без вихідних (якщо звернутися до працівників служби охорони на рецепції 1 пов.)',
    language: 'Російськомовний',
    informational_plates: true,
    phone: ['380322326000'],
    additional_information:
      'При вході на 3 пов.: ліворуч, в кінець коридору, зліва каб. Медпункту'
  },
  {
    id: 'fdsfdf=ds-06987',
    title: "Центр Стоматології та Гнатології 'Nestorclinic'",
    address: 'м. Львів, вул. Городоцька, 287',
    location: {type: 'Point', coordinates: [23.962736, 49.829346]},
    actual_date: '2019-03-18',
    floor: 1,
    storage_place: 'В коридорі центральний хол, на стіні',
    accessibility: 'Пн-Пт: 09:00-20:00',
    language: 'Україномовний',
    informational_plates: true,
    phone: ['380987778899'],
    additional_information:
      'При вході в заклад: прямо по центральному коридору, перший поворот ліворуч'
  },
  {
    id: 'fsdfr4t50605',
    title: "Компанія 'Cypress'",
    address: 'м. Львів, вул. Луганська, 20',
    location: {type: 'Point', coordinates: [24.041675, 49.808807]},
    actual_date: '2019-02-12',
    floor: 1,
    storage_place: 'Рецепція',
    accessibility: 'Пн-Пт: 10:00-18:00',
    language: 'Україномовний',
    informational_plates: true,
    _phone: [],
    additional_information: ''
  },
  {
    id: '506976gfgdfhy9000',
    title: "Стоматологічна Клініка 'Rikota' (в приміщенні гот. 'Grand Hotel')",
    address: 'м. Львів, просп. Свободи 13а',
    location: {type: 'Point', coordinates: [24.027085, 49.840812]},
    actual_date: '2019-03-22',
    floor: 2,
    storage_place:
      'Каб. Хірургії (схований від загального виду, треба запитатись на рецепції)',
    accessibility: 'Пн-Сб: 09:00-22:00',
    language: 'Російськомовний',
    informational_plates: false,
    phone: ['380931703099', '380322590606'],
    additional_information:
      "Вхід №1: центральний вхід в гот. 'Grand Hotel' - пройти через весь 1 пов. до кінця і в кінці повернути праворуч, обійти ліфт зправа та пройти на рецепцію стоматологічної клініки 'Rikota'; Вхід №2: з проїзду Крива Липа (він спільний для 'Karvatska' та 'Rikota') - пройти до рецепції 'Karvatska' та повернути праворуч, пройти по коридору до рецепції 'Rikota')"
  },
  {
    id: 'rfj5jj76iu7=---',
    title: "Медичний центр 'Снежана'",
    address: 'м. Харків, вул. Тобольська, 45',
    location: {type: 'Point', coordinates: [36.217935, 50.030107]},
    actual_date: '2019-03-22',
    floor: 1,
    storage_place:
      'Операційна (схований від загального виду, треба запитатись на рецепції)',
    accessibility: 'Пн-Сб: 08:00-20:00',
    language: 'Англомовний',
    informational_plates: true,
    phone: ['380960087077', '380990087077'],
    additional_information: ''
  },
  {
    id: 'dwet5y67u7kiloi',
    title: 'Ірпінська Міська Рада',
    address: 'м. Ірпінь, вул. Шевченка, 2а',
    location: {type: 'Point', coordinates: [30.244362, 50.520556]},
    actual_date: '2019-03-21',
    floor: 1,
    storage_place: 'Каб. Муніципальної Варти',
    accessibility:
      'Цілодобово. Без вихідних (якщо звернутися до працівників Муніципальної варти Ірпінської міської ради)',
    language: 'Україномовний',
    informational_plates: true,
    phone: ['380630700557', '380459760400'],
    additional_information: 'Зайшовши в будівлю ІМР - праворуч перший кабінет'
  },
  {
    id: '3t5y56j7k7',
    title:
      'Медичний центр Святої Параскеви (навпроти входу в Сихівську Районну Адміністрацію)',
    address: 'м. Львів, просп. Червоної Калини, 64',
    location: {type: 'Point', coordinates: [24.057202, 49.791238]},
    actual_date: '2019-03-27',
    floor: 1,
    storage_place: 'Каб. №521',
    accessibility: 'Пн-Пт: 08:00-20:00, Сб: 08:00-18:00',
    language: 'Україномовний',
    informational_plates: false,
    _phone: [],
    additional_information:
      'Зайшовши у заклад - ліворуч, прямо в кінець коридору'
  },
  {
    id: 'r4y66j67j',
    title: 'Медичний центр Святої Параскеви',
    address: 'м. Львів, вул.Кульпарківська, 135',
    location: {type: 'Point', coordinates: [23.982833, 49.807666]},
    actual_date: '2019-03-26',
    floor: 1,
    storage_place: 'Каб. №511',
    accessibility: 'Пн-Пт: 08:00-20:00, Сб: 08:00-18:00',
    language: 'Україномовний',
    informational_plates: false,
    _phone: [],
    additional_information: 'При вході в заклад: ліворуч перший кабінет'
  },
  {
    id: 'g54h6ju7k7i',
    title: "Медичний Центр 'Medicover'",
    address: 'м. Львів, вул. Антоновича, 102',
    location: {type: 'Point', coordinates: [23.99468, 49.828288]},
    actual_date: '2019-03-26',
    floor: 1,
    storage_place: 'Каб. Маніпуляційної №105(1), № 105(2)',
    accessibility: 'Пн-Сб: 08:00-18:00',
    language: 'Англомовний',
    informational_plates: true,
    phone: ['380676752657'],
    additional_information:
      "Вхід №1: з вул. Антоновича (вхід в Поліклініку). Зайшовши в центральний коридор, повернути перший поворот праворуч. На сходовій клітці, праворуч на стіні в ящику знаходиться АЗД; Вхід №2: з вул. Героїв Упа. Зайшовши на територію колишнього заводу 'Кінескоп'. Зайшовши в мед.центр, прямо, піднявшись на сходову клітку, ліворуч на стіні в ящику знаходиться АЗД"
  },
  {
    id: 'h65y76jk76k6',
    title: 'Загальноосвітня школа №23',
    address: 'м. Дніпро, просп. Дмитра Яворницького, 14',
    location: {type: 'Point', coordinates: [35.06507, 48.45539]},
    actual_date: '2019-06-01',
    floor: 2,
    storage_place: 'Актовий зал',
    accessibility: 'Цілодобово. Без вихідних',
    language: 'Англомовний',
    informational_plates: false,
    phone: ['380675657447'],
    additional_information: ''
  },
  {
    id: '43t45hyku',
    title: 'Метінвест-СМЦ',
    address: 'м. Львів, вул. Кульпарківська, 93',
    location: {type: 'Point', coordinates: [23.989434, 49.822957]},
    actual_date: '2019-06-13',
    floor: 1,
    storage_place: "Офіс 'Каса', праворуч, на стелажі зверху",
    accessibility:
      'Пн-Пт: 08:00-17:00 (крім святкових та державних вихідних днів)',
    language: 'Україномовний',
    informational_plates: true,
    phone: ['380672256058'],
    additional_information:
      'Будинок офісних приміщень, зайшовши у будинок - перший офіс ліворуч'
  },
  {
    id: '23t54y6567k',
    title: "Ліцей 'Наукова зміна'",
    address: 'м. Київ, просп. П. Григоренка, 21в',
    location: {type: 'Point', coordinates: [30.635032, 50.406716]},
    actual_date: '2019-06-18',
    floor: 1,
    storage_place: "Каб. 'Медпункт'",
    accessibility: 'Пн-Пт: 08:00-16:00',
    language: 'Англомовний',
    informational_plates: false,
    phone: ['380445703301'],
    additional_information: 'Ліворуч на 1 поверсі'
  },
  {
    id: 'gh56j67k76',
    title:
      "Авторська Стоматологія Мар’яни Мельничук (у внутрішньому дворі колишнього маг. 'Чародійка')",
    address: 'м. Львів, вул. Івана Франка, 23',
    location: {type: 'Point', coordinates: [24.035127, 49.835409]},
    actual_date: '2019-06-04',
    floor: 1,
    storage_place: 'Ліворуч на стіні біля вхідних дверей',
    accessibility: 'Пн-Пт: 09:00-18:00',
    language: 'Україномовний',
    informational_plates: true,
    phone: ['380504205903'],
    additional_information: ''
  },
  {
    id: '3245y6-j=7=kj-uy',
    title: "Станція метро 'Лук'янівська'",
    address: 'м. Київ, вул. Юрія Іллєнка, 1',
    location: {type: 'Point', coordinates: [30.483669, 50.461185]},
    actual_date: '2019-07-19',
    floor: 1,
    storage_place:
      'Відкритий (скляний) офіс поліції - Управіння поліції в метрополітені ГУ НП України в м.Києві (схований від загального виду, треба запитатись працівників поліції)',
    accessibility: 'Пн-Нд: 05:38-00:06 (години роботи станції)',
    language: 'Російськомовний (є опція переключення на англійську)',
    informational_plates: false,
    _phone: [],
    additional_information:
      'У верхньому вестибюлі станції, праворуч від турнікетів, позаду каси. Також наявна аптечка (неякісна). Працівники поліції, з їх слів, навчені застосуванню АЗД та проведенню СЛР'
  },
  {
    id: 'g45hy65oho56-0h605',
    title: "Магазин 'Rozetka'",
    address: 'м. Київ, вул. Хрещатик, 20-22',
    location: {type: 'Point', coordinates: [30.522537, 50.450229]},
    actual_date: '2019-05-13',
    floor: 1,
    storage_place:
      "Зал №1, при вході у залу праворуч під написом 'Інформація' АЗД на стіні",
    accessibility: 'Пн-Сб: 10:00-21:00, Нд: 10:00-18:00',
    language: 'Україномовний',
    informational_plates: true,
    phone: ['380445730222'],
    additional_information: 'Ліворуч на 1 поверсі'
  },
  {
    id: 'fr3mg65iyh865hjt0-',
    title: 'Клініка доктора Медведева',
    address: 'м. Дніпро, вул. Святослава Хороброго, 60 (приміщення 4,6)',
    location: {type: 'Point', coordinates: [35.034408, 48.46407]},
    actual_date: '2019-10-01',
    floor: 1,
    storage_place: 'Хол, біля рецепції',
    accessibility: 'Пн-Пт: 08:00-20:00, Сб: 08:00-15:00',
    language: 'Україномовний',
    informational_plates: false,
    phone: ['380671425060', '380991425060', '380731425060'],
    additional_information: 'Ліворуч та прямо на 1 поверсі'
  },
  {
    id: 'fr3g54h56j6j',
    title: "Спортивно-торгово-розважальний центр 'Spartak'",
    address: 'м. Львів, вул. Гетьмана Мазепи, 1б',
    location: {type: 'Point', coordinates: [24.025884, 49.871713]},
    actual_date: '2019-10-25',
    floor: 2,
    storage_place: "Навпроти входу в 'Multiplex'",
    accessibility: 'Пн-Нд: 07:00-02:00',
    language: 'Англомовний',
    informational_plates: true,
    phone: ['380676768006'],
    additional_information:
      'Зайти в центральний вхід СТРЦ, повернути ліворуч та прямо до ескалаторів, виходячи з ескалатора на 2пов.: - вліво-вліво-праворуч (за поворот)'
  }
];

export default function getDefs() {
  return defs;
}
