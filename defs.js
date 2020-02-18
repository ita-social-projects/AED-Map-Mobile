const defs = [
  {
    _id: '123456_abcdef',
    title: 'Львівська Ратуша',
    address: 'м. Львів, пл. Ринок, 1',
    location: {
      type: 'Point',
      coordinates: [24.031691, 49.841771]
    },
    actual_date: '2019-02-12',
    storage_place: 'Поверх 1, каб. Муніципальної Варти',
    accessibility: 'Цілодобово. Без вихідних',
    language: 'Російськомовний',
    informational_plates: 'Відсутні',
    phone: ['380322975994'],
    additional_information: 'Перший кабінет праворуч на 1 поверсі'
  },
  {
    _id: Math.random().toString(),
    title: 'Підвальна',
    address: 'м. Львів, біля пл. Ринок',
    location: {
      type: 'Point',
      coordinates: [24.035191, 49.842171]
    },
    actual_date: '2019-02-12',
    storage_place: 'Поверх 1, каб. Муніципальної Варти',
    accessibility: 'Цілодобово. Без вихідних',
    language: 'Російськомовний',
    informational_plates: 'Відсутні',
    phone: ['380322975994'],
    additional_information: 'Перший кабінет праворуч на 1 поверсі'
  },
  {
    _id: Math.random().toString(),
    title: 'Львівський міжнародний аеропорт',
    address: 'м. Львів, вул. Любінська, 168',
    location: {
      type: 'Point',
      coordinates: [23.959755, 49.818201]
    },
    actual_date: '2019-02-22',
    storage_place: 'Поверх 1, біля каб. Медпункту (на стіні)',
    accessibility: 'Цілодобово. Без вихідних',
    language: 'Україномовний',
    informational_plates: 'Присутні тільки біля приладу',
    phone: ['380322298303'],
    additional_information:
      'Вхід в крайні ліві розсувні двері (ліворуч та прямо)'
  }
];

export default function getDefs() {
  return defs;
}
