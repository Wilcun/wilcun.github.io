
    function showSection(sectionId) {
      const sections = document.querySelectorAll('.section');
      sections.forEach(sec => sec.classList.remove('active'));
      document.getElementById(sectionId).classList.add('active');

      const links = document.querySelectorAll('.sidebar a');
      links.forEach(link => link.classList.remove('active'));
      event.target.classList.add('active');
    }

// Fungsi untuk navigasi ke halaman forum detail
function showForumDetail(forumId) {
  // Simpan forumId yang dipilih ke localStorage/sessionStorage
  sessionStorage.setItem('selectedForum', forumId);
  
  // Redirect ke halaman forum detail
  window.location.href = 'forum-detail.html';
}

