import React, { useRef, useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { DatePicker, Input, Modal } from 'antd';
import moment from 'moment';

const CalendarComponent = () => {
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem('calendarEvents');
    return savedEvents ? JSON.parse(savedEvents) : [
      { id: '1', title: 'Event 1', start: '2023-12-01' },
      { id: '2', title: 'Event 2', start: '2023-12-06' },
    ];
  });

  const calendarRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [popupContent, setPopupContent] = useState('');

  const handleDateSelect = (selectInfo) => {
    const startDate = selectInfo.startStr;
    setModalData({ start: startDate });
    setModalVisible(true);
  };

  const handleEventDelete = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'?`)) {
      setEvents(events.filter(event => event.id !== clickInfo.event.id));
    }
  };
// Code for showing event details on hover
  const handleEventMouseEnter = (mouseEnterInfo) => {
    const eventElement = mouseEnterInfo.el;
    const eventRect = eventElement.getBoundingClientRect();
    const calendarEl = calendarRef.current?.getApi().el;
    const calendarRect = calendarEl.getBoundingClientRect();

    const top = eventRect.top - calendarRect.top + window.scrollY + eventRect.height + 5;
    const left = eventRect.left - calendarRect.left + window.scrollX;

    setPopupPosition({ top, left });
    setPopupContent(mouseEnterInfo.event.title);
    setPopupVisible(true);
  };
   // Code for hiding event details on mouse leave
  const handleEventMouseLeave = () => {
    setPopupVisible(false);
  };
  const handleModalOk = () => {
    // Handle saving event data from modal here
    setEvents([...events, { ...modalData, id: generateId() }]);
    setModalVisible(false);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };
  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  useEffect(() => {
    localStorage.setItem('calendarEvents', JSON.stringify(events));
  }, [events]);

  return (
    <div style={{ position: 'relative' }}>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        select={handleDateSelect}
        eventClick={handleEventDelete}
        events={events}
        eventMouseEnter={handleEventMouseEnter}
        eventMouseLeave={handleEventMouseLeave}
      />
      <Modal
        title="Create Event"
        visible={modalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <DatePicker defaultValue={moment(modalData.start)} disabled />
        <Input
          placeholder="Event Title"
          onChange={(e) => setModalData({ ...modalData, title: e.target.value })}
        />
        {/* Other inputs for event details (body message, end time, etc.) */}
      </Modal>
      {popupVisible && (
        <div
          style={{
            position: 'absolute',
            top: popupPosition.top,
            left: popupPosition.left,
            backgroundColor: 'white',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
            padding: '5px',
            zIndex: 9999,
          }}
        >
          {popupContent}
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;
