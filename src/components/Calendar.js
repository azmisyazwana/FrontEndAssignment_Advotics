import React, { useState, useEffect, useRef } from "react";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import { addMonths } from "date-fns/esm";
import { useStateContext } from '../contexts/ContextProvider'
import "./Calendar.css";
import { AiOutlineClose } from 'react-icons/ai'
import calendarImage from '../data/calendar.png'


const Calendar = () => {
  const [date, setDate] = useState([
    {
      startDate: addDays(new Date(), -1),
      endDate: addDays(new Date(), -7),
      key: "selection",
    },
  ]);
  const yesterday = [
    {
      startDate: addDays(new Date(), -1),
      endDate: addDays(new Date(), -1),
      key: "selection",
    },
  ];
  const last7Days = [
    {
      startDate: addDays(new Date(), -1),
      endDate: addDays(new Date(), -7),
      key: "selection",
    },
  ];
  const last30Days = [
    {
      startDate: addDays(new Date(), -1),
      endDate: addDays(new Date(), -30),
      key: "selection",
    },
  ];

  const DATE = new Date();
  const EARLY_MONTH = new Date(DATE.getFullYear(), DATE.getMonth(), 1);
  const MAX_DATE = addDays(new Date(), -1);
  const MIN_DATE = addMonths(new Date(), -6);

  const thisMonth = [
    {
      startDate: EARLY_MONTH,
      endDate: new Date(),
      key: "selection",
    },
  ];

  // const startDay = date[0].startDate.getDate()
  // const startMonth = date[0].startDate.getMonth()
  // const startYear = date[0].startDate.getFullYear()
  // const endDay = date[0].endDate.getDate()
  // const endMonth = date[0].endDate.getMonth()
  // const endYear = date[0].endDate.getFullYear()

  const convertMonth = (month) => {
    switch (month) {
      case 0:
        return "Januari";
        break;
      case 1:
        return "Februari";
        break;
      case 2:
        return "Maret";
        break;
      case 3:
        return "April";
        break;
      case 4:
        return "Mei";
        break;
      case 5:
        return "Juni";
        break;
      case 6:
        return "Juli";
        break;
      case 7:
        return "Agustus";
        break;
      case 8:
        return "September";
        break;
      case 9:
        return "Oktober";
        break;
      case 10:
        return "November";
        break;
      default:
        return "Desember";
        break;
    }
  };

  // const [applyDate, setApplyDate] = useState(false)
  console.log(convertMonth());
  const apply = () =>{
        setDateApply(applyDate)
        setActiveCalendar(false)    
    };
  const applyDate = [
    {
      startDate: date[0].startDate,
      endDate: date[0].endDate,
      key: "selection",
    },
  ];
  const [dateApply, setDateApply] = useState([
    {
      startDate: addDays(new Date(), -7),
      endDate: addDays(new Date(), -1),
      key: "selection",
    },
  ]);

  const {activeFilter, setActiveFilter, isClickedFilter, setIsClickedFilter, handleClickFilter} = useStateContext();
  const {activeCalendar, setActiveCalendar} = useStateContext();
  
  let calendar = useRef()

  useEffect(() => {
      let handler = (event) => {
          if(!calendar.current.contains(event.target)){
              setActiveCalendar(false);
          }
      };
      document.addEventListener("mousedown", handler)
      return () => {
          document.removeEventListener("mousedown", handler)
      }
  })
if(activeCalendar) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


  return (
    <div className="flex">
        <div>
                <p>
                {dateApply[0].startDate.getDate().toString()}{" "}
                {convertMonth(dateApply[0].startDate.getMonth())}{" "}
                {dateApply[0].startDate.getFullYear().toString()}
                </p>
                <p>
                {dateApply[0].endDate.getDate().toString()}{" "}
                {convertMonth(dateApply[0].endDate.getMonth())}{" "}
                {dateApply[0].endDate.getFullYear().toString()}
                </p>
            </div>
            <div className="relative right-0">
            {
          activeCalendar && (
              <div className="modal">
                  <div className="overlay"></div>
                  <div ref={calendar} className="modal-content">
                      <div className="flex justify-between">
                          <div className="flex gap-3 items-center ml-2 text-gray-500 text-2xl">
                              <div>
                                <img src={calendarImage} alt="" />
                              </div>
                              <div>
                                  <h1>Period</h1>

                              </div>
                          </div>
                          <div>
                            <button className="text-gray-500 text-2xl hover:bg-gray-300 p-1 rounded-full" onClick={() => setActiveCalendar(false)}>
                                <AiOutlineClose/>  
                            </button>
                          </div>
                      </div>
                  <div className="flex">
                <div className="flex flex-col justify-around text-left w-40 ml-2">
                    <div className="item-filter-date pb-2 cursor-pointer" onClick={() => {handleClickFilter('yesterday'); setDate(yesterday)}}>
                        <button className={isClickedFilter.yesterday ? 'text-green-500' : 'text-gray-400'} >Yesterday</button>
                    </div>
                    <div className="item-filter-date pb-2" onClick={() => {handleClickFilter('last7Days'); setDate(last7Days)}}>
                        <button className={isClickedFilter.last7Days ? 'text-green-500' : 'text-gray-400'} >Last 7 Days</button>
                    </div>
                    <div className="item-filter-date pb-2" onClick={() => {handleClickFilter('last30Days'); setDate(last30Days)}}>
                        <button className={isClickedFilter.last30Days ? 'text-green-500' : 'text-gray-400'}>Last 30 Days</button>
                    </div>
                    <div className="item-filter-date pb-2" onClick={() => {handleClickFilter('thisMonth'); setDate(thisMonth)}}>
                        <button className={isClickedFilter.thisMonth ? 'text-green-500' : 'text-gray-400'}>This Month</button>
                    </div>
                    <div className="" onClick={() => {handleClickFilter('custom')}}>
                        <button className={isClickedFilter.custom ? 'text-green-500' : 'text-gray-400'}>Custom</button>
                    </div>
                    <div onClick={apply} className="bg-market-insight text-white rounded-sm text-xl p-3 text-center items-center hover:bg-green-400 cursor-pointer">
                        <button >Apply</button>
                    </div>
                </div>
                <div>
                    <DateRangePicker
                        className="ml-10 date-range pl-10 mt-3 mb-3 mr-3"
                        onChange={(item) => setDate([item.selection])}
                        showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        months={2}
                        ranges={date}
                        direction="horizontal"
                        preventSnapRefocus={true}
                        calendarFocus="backwards"
                        maxDate={MAX_DATE}
                        minDate={MIN_DATE}
                        rangeColors={["#3ecf8e"]}
                    />

                    
                </div>
            </div>
                  </div>
                  
              </div>
            

          )
      }
            </div>

      

    </div>
  );
};

export default Calendar;
