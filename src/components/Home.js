
  
  import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
  import format from 'date-fns/format'
  import parse from 'date-fns/parse'
  import startOfWeek from 'date-fns/startOfWeek'
  import getDay from 'date-fns/getDay'
  import enUS from 'date-fns/locale/en-US'
  import { useDispatch, useSelector } from 'react-redux';
  import 'react-big-calendar/lib/css/react-big-calendar.css';

  
  export default function Home(){
    const events = useSelector(state => state.events);

    const locales = {
      'en-US': enUS,
    }
    
    const localizer = dateFnsLocalizer({
      format,
      parse,
      startOfWeek,
      getDay,
      locales,
    })
  
    return (
      <div className="row">
        <div className="col-8">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
      </div>
    </div>
    );
  };
  