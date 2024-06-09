import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import './Calendar.css';
import icons from '../../calendarIcons';
import EventCalendar from './EventCalendar';

const Calendar: React.FC = () => {
  const events = useSelector((state: RootState) => state.calendar.events);

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
      <div className="calendar">
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
        <div className="calendar-body">
          <h2>Расписание</h2>
          <div className="events">
            <EventCalendar events={events} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
