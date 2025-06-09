

// Data dummy tugas yang sudah disempurnakan
const tasksData = {
  "Bahasa Indonesia": [
    {
      id: 1,
      title: "Analisis Puisi",
      description: "Pilih salah satu puisi dari materi yang diberikan dan lakukan analisis struktur dan makna puisi tersebut. Analisis harus mencakup:\n- Struktur fisik puisi\n- Struktur batin puisi\n- Majas yang digunakan\n- Pesan moral puisi",
      deadline: "2025-06-05",
      urgency: "high",
      subject: "Bahasa Indonesia",
      teacher: "Bapak Dedi Saputra",
      class: "XI IPA 2",
      attachments: [
        "Contoh Analisis Puisi.pdf",
        "Daftar Puisi Pilihan.docx"
      ],
      instructions: "Tugas dikumpulkan dalam bentuk dokumen Word, maksimal 3 halaman. Cantumkan referensi jika menggunakan sumber lain."
    }
  ],
  "Matematika": [
    {
      id: 2,
      title: "Limit Fungsi",
      description: "Kerjakan soal-soal berikut tentang limit fungsi:\n1. Hitung limit x mendekati 2 dari (x^2 - 4)/(x - 2)\n2. Hitung limit x mendekati tak hingga dari (3x^2 + 2x)/(x^2 - 5)\n3. Hitung limit x mendekati 0 dari (sin x)/x",
      deadline: "2025-06-01",
      urgency: "high",
      subject: "Matematika",
      teacher: "Ibu Ani Susanti",
      class: "XI IPA 2",
      attachments: [
        "Modul Limit Fungsi.pdf",
        "Latihan Soal Limit.docx"
      ],
      instructions: "Kerjakan di buku tugas, foto hasilnya dan upload dalam format PDF. Tunjukkan langkah-langkah pengerjaan dengan jelas."
    },
    {
      id: 3,
      title: "Turunan Fungsi",
      description: "Kerjakan soal-soal turunan fungsi berikut:\n1. Turunan pertama dari f(x) = 3x^2 + 2x - 5\n2. Turunan pertama dari f(x) = (2x + 1)/(x - 3)\n3. Turunan pertama dari f(x) = sin(x^2)",
      deadline: "2025-06-05",
      urgency: "medium",
      subject: "Matematika",
      teacher: "Ibu Ani Susanti",
      class: "XI IPA 2",
      attachments: [
        "Materi Turunan Fungsi.pdf"
      ],
      instructions: "Kerjakan di kertas folio bergaris, foto dan upload dalam format PDF sebelum deadline."
    }
  ],
  "Sosiologi": [
    {
      id: 4,
      title: "Esai Interaksi Sosial",
      description: "Buat esai tentang interaksi sosial dalam masyarakat sekitar Anda. Esai harus mencakup:\n- Contoh interaksi sosial asosiatif\n- Contoh interaksi sosial disosiatif\n- Analisis dampak interaksi tersebut\n- Solusi untuk masalah yang ditemukan",
      deadline: "2025-06-03",
      urgency: "high",
      subject: "Sosiologi",
      teacher: "Ibu Fitri Lestari",
      class: "XI IPA 2",
      attachments: [
        "Panduan Menulis Esai Sosiologi.pdf",
        "Contoh Esai Interaksi Sosial.docx"
      ],
      instructions: "Esai ditulis dalam 500-700 kata, format Times New Roman 12pt, spasi 1.5. Kumpulkan melalui Google Classroom."
    },
    {
      id: 5,
      title: "Proyek Lembaga Sosial",
      description: "Buat proyek kelompok (3-4 orang) tentang lembaga sosial di masyarakat. Proyek berupa:\n- Observasi lapangan\n- Wawancara\n- Dokumentasi foto\n- Laporan tertulis",
      deadline: "2025-06-10",
      urgency: "medium",
      subject: "Sosiologi",
      teacher: "Ibu Fitri Lestari",
      class: "XI IPA 2",
      attachments: [
        "Panduan Proyek Lembaga Sosial.pdf",
        "Format Laporan.docx"
      ],
      instructions: "Form kelompok dan laporkan topik yang dipilih sebelum 1 Juni. Presentasi proyek akan dilakukan minggu terakhir Juni."
    }
  ],
  "Sejarah": [
    {
      id: 6,
      title: "Makalah Pergerakan Nasional",
      description: "Buat makalah tentang pergerakan nasional Indonesia dengan struktur:\n1. Pendahuluan\n2. Latar belakang munculnya pergerakan nasional\n3. Organisasi-organisasi pergerakan nasional\n4. Peran pergerakan nasional menuju kemerdekaan\n5. Kesimpulan",
      deadline: "2025-06-02",
      urgency: "high",
      subject: "Sejarah",
      teacher: "Bapak Yudi Hartono",
      class: "XI IPA 2",
      attachments: [
        "Referensi Pergerakan Nasional.pdf",
        "Format Makalah.docx"
      ],
      instructions: "Makalah minimal 5 halaman, tidak termasuk cover dan daftar pustaka. Gunakan sumber yang valid dan cantumkan referensi."
    },
    {
      id: 7,
      title: "Presentasi Reformasi",
      description: "Buat presentasi kelompok (2-3 orang) tentang masa reformasi di Indonesia. Materi harus mencakup:\n- Latar belakang reformasi\n- Peristiwa penting reformasi\n- Tokoh-tokoh reformasi\n- Dampak reformasi bagi Indonesia",
      deadline: "2025-06-09",
      urgency: "low",
      subject: "Sejarah",
      teacher: "Bapak Yudi Hartono",
      class: "XI IPA 2",
      attachments: [
        "Materi Reformasi.pdf",
        "Template Presentasi.pptx"
      ],
      instructions: "Presentasi maksimal 10 slide. Upload file presentasi dan script presentasi dalam satu folder zip."
    }
  ]
};

// Fungsi untuk menampilkan daftar tugas dengan optimasi
function renderTaskList() {
  const highPriorityTasks = document.getElementById('highPriorityTasks');
  const mediumPriorityTasks = document.getElementById('mediumPriorityTasks');
  const lowPriorityTasks = document.getElementById('lowPriorityTasks');
  
  // Kosongkan kontainer
  [highPriorityTasks, mediumPriorityTasks, lowPriorityTasks].forEach(container => {
    container.innerHTML = '';
  });
  
  // Gabungkan dan urutkan tugas
  const allTasks = Object.values(tasksData).flat().sort((a, b) => 
    new Date(a.deadline) - new Date(b.deadline)
  );
  
  // Fungsi pembuat elemen tugas
  const createTaskElement = (task) => {
    const taskItem = document.createElement('li');
    taskItem.className = `task-item ${task.urgency}`;
    taskItem.innerHTML = `
      <div class="task-title">${task.title}</div>
      <div class="task-subject">${task.subject}</div>
      <div class="task-deadline">
        <i class="fas fa-calendar-alt"></i> 
        Deadline: ${formatIndonesianDate(new Date(task.deadline))}
      </div>
    `;
    taskItem.addEventListener('click', () => showTaskDetail(task));
    return taskItem;
  };
  
  // Kelompokkan tugas berdasarkan prioritas
  allTasks.forEach(task => {
    const container = 
      task.urgency === 'high' ? highPriorityTasks :
      task.urgency === 'medium' ? mediumPriorityTasks : lowPriorityTasks;
    container.appendChild(createTaskElement(task));
  });
  
  // Handle jika tidak ada tugas
  const emptyMessage = '<li class="empty-message">Tidak ada tugas</li>';
  if (!highPriorityTasks.children.length) highPriorityTasks.innerHTML = emptyMessage;
  if (!mediumPriorityTasks.children.length) mediumPriorityTasks.innerHTML = emptyMessage;
  if (!lowPriorityTasks.children.length) lowPriorityTasks.innerHTML = emptyMessage;
  
  // Tampilkan halaman daftar tugas
  document.getElementById('taskListPage').style.display = 'block';
  document.getElementById('taskDetailPage').style.display = 'none';
}

// Fungsi untuk menampilkan detail tugas yang dioptimasi
function showTaskDetail(task) {
  // Update elemen detail tugas
  document.getElementById('detailTaskTitle').textContent = task.title;
  
  // Update metadata
  const metaItems = [
    { icon: 'user', text: task.teacher },
    { icon: 'users', text: task.class },
    { icon: 'book', text: task.subject },
    { icon: 'calendar-alt', text: `Deadline: ${formatIndonesianDate(new Date(task.deadline))}` }
  ];
  
  document.getElementById('taskMeta').innerHTML = metaItems.map(item => `
    <div class="meta-item">
      <i class="fas fa-${item.icon}"></i> ${item.text}
    </div>
  `).join('');
  
  // Update konten utama
  document.getElementById('taskDescription').textContent = task.description;
  document.getElementById('taskInstructions').textContent = task.instructions;
  
  // Update lampiran
  const attachmentsList = document.getElementById('taskAttachments');
  attachmentsList.innerHTML = task.attachments.map(attachment => `
    <li class="attachment-item">
      <span>${attachment}</span>
      <a href="limitfungsi.docx" button class="download-btn" aria-label="Download ${attachment}">
        <i class="fas fa-download"></i> Download
      </a>
    </li>
  `).join('');
  
  // Tampilkan halaman detail
  document.getElementById('taskListPage').style.display = 'none';
  document.getElementById('taskDetailPage').style.display = 'block';
}

// Fungsi bantuan untuk format tanggal Indonesia
function formatIndonesianDate(date) {
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
                 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  
  return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

// Fungsi navigasi
function backToTaskList() {
  document.getElementById('taskListPage').style.display = 'block';
  document.getElementById('taskDetailPage').style.display = 'none';
}

function goBack() {
  window.location.href = "matapelajaran.html";
}

// Inisialisasi saat DOM siap
document.addEventListener('DOMContentLoaded', () => {
  renderTaskList();
  
  // Toggle sidebar
  document.querySelector('.toggle-sidebar-btn')?.addEventListener('click', () => {
    document.querySelector('.sidebar')?.classList.toggle('collapsed');
  });
});