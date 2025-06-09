// Sidebar toggle
document.querySelector('.toggle-sidebar-btn').addEventListener('click', function () {
  document.querySelector('.sidebar').classList.toggle('collapsed');
});

const submitBtn = document.getElementById('submit-reply-btn');
const textarea = document.getElementById('reply-textarea');
const repliesContainer = document.getElementById('student-replies');
const errorMessage = document.getElementById('error-message');

// Load replies from localStorage and display
function loadReplies() {
  const replies = JSON.parse(localStorage.getItem('forumReplies')) || [];
  replies.forEach(reply => {
    appendReply(reply);
  });
}

// Save reply to localStorage
function saveReply(reply) {
  const replies = JSON.parse(localStorage.getItem('forumReplies')) || [];
  replies.push(reply);
  localStorage.setItem('forumReplies', JSON.stringify(replies));
}

// Create reply elements and append to replies container
function appendReply(reply) {
  const studentInfoDiv = document.createElement('div');
  studentInfoDiv.classList.add('student-info');
  studentInfoDiv.innerHTML = `
    <strong>${reply.name}</strong><br />
    <span class="post-date">${reply.classInfo}</span><br />
    <span class="post-date">Sign: ${reply.signDate}</span>
  `;

  const studentContentDiv = document.createElement('div');
  studentContentDiv.classList.add('student-content');
  studentContentDiv.innerHTML = `
    <p>${reply.signDate} - ${reply.name}</p>
    <p>${reply.content}</p>
  `;

  const replyWrapper = document.createElement('div');
  replyWrapper.classList.add('student-reply-wrapper');
  replyWrapper.style.display = 'flex';
  replyWrapper.style.flexWrap = 'wrap';
  replyWrapper.style.gap = '1.5rem';
  replyWrapper.style.marginBottom = '1.25rem';
  replyWrapper.style.background = '#f9fafb';
  replyWrapper.style.borderRadius = '0.75rem';
  replyWrapper.style.padding = '1.5rem 2rem';
  replyWrapper.style.boxShadow = '0 2px 8px rgb(0 0 0 / 0.07)';

  replyWrapper.appendChild(studentInfoDiv);
  replyWrapper.appendChild(studentContentDiv);

  repliesContainer.appendChild(replyWrapper);
}

// Validate input (minimum 5 words)
function validateReply(text) {
  if (!text) return false;
  const wordCount = text.trim().split(/\s+/).filter(w => w.length > 0).length;
  return wordCount >= 5;
}

submitBtn.addEventListener('click', () => {
  const content = textarea.value.trim();
  if (!validateReply(content)) {
    errorMessage.style.display = 'block';
    textarea.focus();
    return;
  }
  errorMessage.style.display = 'none';

  const now = new Date();
  const signDateStr = now.toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });

  // Placeholder user info — replace with real user data if available
  const reply = {
    name: 'Anonymous Student',
    classInfo: 'Class Info Unknown',
    signDate: signDateStr,
    content: content
  };

  appendReply(reply);
  saveReply(reply);

  textarea.value = '';
  textarea.focus();
});

document.addEventListener('DOMContentLoaded', () => {
  errorMessage.style.display = 'none';
  loadReplies();
});
