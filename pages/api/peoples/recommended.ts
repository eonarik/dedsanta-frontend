export default (req, res) => {
  setTimeout(() => {
    res.status(200).json([
      {
        id: '1',
        uri: '/peoples/viktor-bulanskij',
        pagetitle: 'Виктор Буланский',
        introtext: 'Работаю четко и слажено не пью, в команде есть все новогодние персонажи я просто крут...',
        createdAt: '2019-03-01T00:00:00GMT+0300',
        formatted_date: '01 марта 2019',
        image: '/assets/v1/img/sample-ded-3.jpg',
        user_avatar: '/assets/v1/img/sample-man-2.png',
        user_year_old: 37,
        user_work_experience: '5 лет',
        user_region: 'Краснодарский край',
        user_rating: 4.7,
      },
      {
        id: '2',
        uri: '/peoples/viktor-bulanskij-2',
        pagetitle: 'Степан Козловский',
        introtext: 'Работаю четко и слажено не пью, в команде есть все новогодние персонажи я просто крут...',
        createdAt: '2019-03-01T00:00:00GMT+0300',
        formatted_date: '01 марта 2019',
        image: '/assets/v1/img/sample-ded-3.jpg',
        user_avatar: '/assets/v1/img/sample-man-2.png',
        user_year_old: 37,
        user_work_experience: '5 лет',
        user_region: 'Краснодарский край',
        user_rating: 2,
      },
    ]);
  }, Math.ceil(Math.random() * 3000));
}
