const notificationList = document.getElementById('notificationList');
const notifCount = document.getElementById('notifCount');
const clearBtn = document.getElementById('clearBtn');

// Contoh data notifikasi
let notifications = [
  { id: 1, text: 'Reminder: Tugas Sejarah dikumpulkan hari ini!', time: '2 jam lalu' },
  { id: 2, text: 'Reminder: Tugas Sosiologi besok pukul 12:00', time: '1 hari lalu' },
  { id: 3, text: 'Pengumuman: Jadwal ujian akhir semester telah dirilis.', time: '3 hari lalu' }
];

// Fungsi render daftar notifikasi
function renderNotifications() {
  notificationList.innerHTML = '';
  if (notifications.length === 0) {
    notificationList.innerHTML = '<p>Tidak ada notifikasi.</p>';
    notifCount.style.display = 'none';
    clearBtn.style.display = 'none';
    return;
  }

  notifCount.style.display = 'inline-block';
  notifCount.textContent = notifications.length;
  clearBtn.style.display = 'block';

  notifications.forEach(notif => {
    const li = document.createElement('li');
    li.className = 'notification-item';
    li.title = 'Klik untuk hapus notifikasi ini';

    const textDiv = document.createElement('div');
    textDiv.className = 'notification-text';
    textDiv.textContent = notif.text;

    const timeDiv = document.createElement('div');
    timeDiv.className = 'notification-time';
    timeDiv.textContent = notif.time;

    li.appendChild(textDiv);
    li.appendChild(timeDiv);

    // Klik notifikasi untuk menghapusnya
    li.addEventListener('click', () => {
      notifications = notifications.filter(n => n.id !== notif.id);
      renderNotifications();
    });

    notificationList.appendChild(li);
  });
}

// Bersihkan semua notifikasi
clearBtn.addEventListener('click', () => {
  if (confirm('Apakah Anda yakin ingin menghapus semua notifikasi?')) {
    notifications = [];
    renderNotifications();
  }
});

// Render awal
renderNotifications();