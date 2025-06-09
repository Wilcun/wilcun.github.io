// utility untuk format YYYY-MM-DD
function formatDate(date) {
  return date.toISOString().split('T')[0];
}

const months = [
  'Januari','Februari','Maret','April','Mei','Juni',
  'Juli','Agustus','September','Oktober','November','Desember'
];

let currentDate = new Date();
let selectedDate = new Date(currentDate);

// data jadwal sesuai tanggal
const jadwalData = {
  '2025-06-08': [ // Senin
    {
      subject: 'Matematika',
      topic: 'Limit Fungsi',
      teacher: 'Ibu Ani Susanti',
      room: 'XI IPA 2',
      time: '07:30 - 09:00'
    }
  ],
  '2025-06-09': [ // Selasa
    {
      subject: 'Bahasa Indonesia',
      topic: 'Analisis Puisi',
      teacher: 'Bapak Dedi Saputra',
      room: 'XI IPS 2',
      time: '08:00 - 09:30'
    }
  ],
  '2025-06-10': [ // Rabu
    {
      subject: 'Sosiologi',
      topic: 'Struktur Sosial',
      teacher: 'Ibu Fitri Lestari',
      room: 'XI IPS 2',
      time: '10:00 - 11:30'
    }
  ],
  '2025-06-11': [ // Kamis
    {
      subject: 'Matematika',
      topic: 'Turunan Fungsi',
      teacher: 'Ibu Ani Susanti',
      room: 'XI IPA 2',
      time: '07:30 - 09:00'
    },
    {
      subject: 'Sejarah',
      topic: 'Perang Dunia II',
      teacher: 'Bapak Yudi Hartono',
      room: 'XI IPS 2',
      time: '09:00 - 10:30'
    }
  ],
  '2025-06-12': [ // Jumat
    {
      subject: 'Bahasa Indonesia',
      topic: 'Menulis Kreatif',
      teacher: 'Bapak Dedi Saputra',
      room: 'XI IPS 2',
      time: '09:00 - 10:30'
    }
  ]
};

const scheduleItems = document.getElementById('scheduleItems');
const monthLabel     = document.getElementById('monthLabel');
const dayLabel       = document.getElementById('dayLabel');
const dateLabel      = document.getElementById('dateLabel');
const calendarBody   = document.getElementById('calendarBody');
const calendarMonthYear = document.getElementById('calendarMonthYear');

function renderSchedule(date) {
  const key = formatDate(date);
  scheduleItems.innerHTML = '';

  if (!jadwalData[key] || jadwalData[key].length === 0) {
    scheduleItems.innerHTML = '<p>Tidak ada jadwal untuk hari ini.</p>';
    return;
  }

  jadwalData[key].forEach(item => {
    const div = document.createElement('div');
    div.className = 'schedule-item';
    div.innerHTML = `
      <div class="item-main">
        <div class="item-title">${item.subject} - ${item.topic}</div>
        <div class="item-desc"><strong>Guru:</strong> ${item.teacher}</div>
        <div class="item-desc"><strong>Kelas:</strong> ${item.room}</div>
        <div class="item-time"><i class="fa fa-clock"></i> ${item.time}</div>
      </div>
    `;
    scheduleItems.appendChild(div);
  });
}

function renderCalendar(year, month) {
  calendarMonthYear.textContent = `${months[month]} ${year}`;
  calendarBody.innerHTML = '';

  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month+1, 0).getDate();
  let date = 1;

  for (let i = 0; i < 6; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < 7; j++) {
      const td = document.createElement('td');
      if ((i === 0 && j < firstDay.getDay()) || date > daysInMonth) {
        td.textContent = '';
      } else {
        td.textContent = date;
        const cellDate = new Date(year, month, date);
        const cellKey = formatDate(cellDate);
        if (formatDate(currentDate) === cellKey) td.classList.add('calendar-today');
        if (formatDate(selectedDate) === cellKey) td.classList.add('calendar-selected');
        td.onclick = () => {
          selectedDate = cellDate;
          updateUI();
        };
        date++;
      }
      tr.appendChild(td);
    }
    calendarBody.appendChild(tr);
    if (date > daysInMonth) break;
  }
}

function updateUI() {
  monthLabel.textContent = `${months[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`;
  dayLabel.textContent   = selectedDate.toLocaleDateString('id-ID', { weekday: 'long' });
  dateLabel.textContent  = selectedDate.getDate();

  renderSchedule(selectedDate);
  renderCalendar(selectedDate.getFullYear(), selectedDate.getMonth());
}

// event listeners dengan ID yang sudah ada di HTML
document.getElementById('prevDay').addEventListener('click', () => {
  selectedDate.setDate(selectedDate.getDate() - 1);
  updateUI();
});

document.getElementById('nextDay').addEventListener('click', () => {
  selectedDate.setDate(selectedDate.getDate() + 1);
  updateUI();
});

document.querySelector('.today-btn').addEventListener('click', () => {
  selectedDate = new Date(currentDate);
  updateUI();
});

// inisialisasi tampilan pertama kali
updateUI();

