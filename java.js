document.addEventListener('DOMContentLoaded', function() {
    const calendarBody = document.getElementById('calendar-body');
    const currentMonthYear = document.getElementById('current-month-year');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');

    let currentDate = moment();

    function renderCalendar() {
        calendarBody.innerHTML = '';
        const startOfMonth = currentDate.clone().startOf('month');
        const endOfMonth = currentDate.clone().endOf('month');
        const startOfWeek = startOfMonth.clone().startOf('week');
        const endOfWeek = endOfMonth.clone().endOf('week');

        let day = startOfWeek.clone();

        while (day.isBefore(endOfWeek, 'day')) {
            const weekRow = document.createElement('tr');
            for (let i = 0; i < 7; i++) {
                const dayCell = document.createElement('td');
                dayCell.textContent = day.date();
                if (day.month() !== currentDate.month()) {
                    dayCell.classList.add('text-muted');
                }
                weekRow.appendChild(dayCell);
                day.add(1, 'day');
            }
            calendarBody.appendChild(weekRow);
        }

        currentMonthYear.textContent = currentDate.format('MMMM YYYY');
    }

    prevMonthBtn.addEventListener('click', function() {
        currentDate.subtract(1, 'month');
        renderCalendar();
    });

    nextMonthBtn.addEventListener('click', function() {
        currentDate.add(1, 'month');
        renderCalendar();
    });

    renderCalendar();
});
