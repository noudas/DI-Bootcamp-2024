import React from 'react';

const DatePicker = ({ selectedDate, setSelectedDate }) => {
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DatePicker;
