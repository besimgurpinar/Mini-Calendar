const monthElement = document.getElementById('month');
    const calendarElement = document.getElementById('calendar');
    
    function renderCalendar(year, month) {
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const firstDayOfMonth = new Date(year, month, 1).getDay();
      const lastDayOfMonth = new Date(year, month, daysInMonth).getDay();
      const today = new Date();
      
      let day = 1;
      let html = '';
      
      for (let i = 0; i < 6; i++) {
        html += '<tr>';
        
        for (let j = 0; j < 7; j++) {
          if ((i === 0 && j < firstDayOfMonth) || (day > daysInMonth)) {
            html += '<td></td>';
          } else {
            const isToday = (day === today.getDate() && month === today.getMonth() && year === today.getFullYear());
            
            html += `<td${isToday ? ' class="today"' : ''}>${day}</td>`;
            day++;
          }
        }
        
        html += '</tr>';
        
        if (day > daysInMonth) {
          break;
        }
      }
      
      monthElement.textContent = `${new Date(year, month).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`;
      calendarElement.innerHTML = html;
    }
    
    const now = new Date();
    renderCalendar(now.getFullYear(), now.getMonth());