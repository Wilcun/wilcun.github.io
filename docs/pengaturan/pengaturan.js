const tabs = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.section');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const targetId = tab.dataset.tab;

    sections.forEach(section => {
      if (section.id === targetId) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  });
});