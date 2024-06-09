import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import './Profile.css';
import icons from '../../calendarIcons';
import sf from '..//../SF_2 1.png';

const Profile: React.FC = () => {
  const user = useSelector((state: RootState) => state.profile);

  return (
    <div className="wrapper">
      {/* Header */}
      <div className="header">
        <div className="profile-pic">
          <img src={icons.chat} alt="Profile" />
        </div>
        <div className="other-pic">
          <img src={icons.user} alt="Other" />
        </div>
      </div>

      <div className="profile">
        {/* Sidebar Menu */}
        <div className="menu">
          <div className="logo">
            <img src={icons.images} alt="Sirius Future" />
            <span>Sirius Future</span>
          </div>
          <ul>
            <li className="active"><img src={icons.main} alt="Icon" />Главная</li>
            <li><img src={icons.cal} alt="Icon" />Расписание</li>
            <li><img src={icons.wallet} alt="Icon" />Оплата</li>
            <li><img src={icons.dost} alt="Icon" />Достижения</li>
            <li><img src={icons.exc} alt="Icon" />Тренажеры</li>
            <li><img src={icons.folder} alt="Icon" />Библиотека</li>
            <li><img src={icons.supp} alt="Icon" />Проверка связи</li>
            <li><img src={icons.settings} alt="Icon" />Настройки</li>
            <li><img src={icons.question} alt="Icon" />Вопросы</li>
          </ul>
          <div className="footer">
            <div className="bottom-box">
              <p>Приводите друзей с детьми заниматься в Sirius Future и получайте подарки!</p>
              <button>Узнать</button>
              <img src={icons.gift} alt="gift" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="content">
          <div className="ad-banner ad-text" style={{ width: '526px', height: '248px' }}>
            <p>До 31 декабря любой курс со скидкой 20%</p>
            <p>
              До конца года у вас есть уникальная возможность воспользоваться нашей новогодней скидкой 20% на любой курс!
            </p>
            <img src={sf} alt="Ad Banner" className="ad-image" />
          </div>
          <div className="upcoming-lesson" style={{ width: '344px', height: '248px' }}>
            <h3>Ближайшие уроки</h3>
            <div>
              <div>
                <p>1 мая</p>
                <p>Ментальная Арифметика 14:00-14:25 Белькина Инна</p>
              </div>
              <div>
                <p>30 октября</p>
                <p>Программирование 11:00-11:11 Животновская Оксана</p>
              </div>
              <div>
                <p>16 ноября</p>
                <p>Скорочтение 09:00-09:45 Мин Елена</p>
              </div>
            </div>
          </div>
          <div className="balance" style={{ width: '344px', height: '372px' }}>
            <h3>Баланс занятий</h3>
            {user.lessons.map((lesson: { subject: string; count: number }, index: number) => (
              <div key={index}>
                {lesson.subject} <span>{lesson.count}</span>
              </div>
            ))}
          </div>
          <div className="schedule" style={{ width: '708px', height: '372px' }}>
            <h3>Расписание</h3>
            {/* Add your schedule content here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
