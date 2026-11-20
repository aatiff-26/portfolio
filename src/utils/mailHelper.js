export const openGmailCompose = (subjectText = '', bodyText = '') => {
  const recipient = 'aatiffahameed@gmail.com';
  const subject = encodeURIComponent(subjectText || 'Opportunity / Discussion with Aatiff Ahameed');
  const body = encodeURIComponent(
    bodyText || 
    'Hi Aatiff,\n\nI reviewed your portfolio and would like to connect regarding an opportunity.\n\nBest regards,'
  );

  // Direct Gmail web compose link (works on any browser even without desktop mail client)
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
  
  // Standard mailto link
  const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

  // Try opening Gmail Web in a new tab
  const newWindow = window.open(gmailWebUrl, '_blank', 'noopener,noreferrer');
  
  // If pop-up was blocked or in mobile context, fallback to mailto
  if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
    window.location.href = mailtoUrl;
  }
};

export const openDefaultMailto = (subjectText = '', bodyText = '') => {
  const recipient = 'aatiffahameed@gmail.com';
  const subject = encodeURIComponent(subjectText || 'Opportunity / Discussion with Aatiff Ahameed');
  const body = encodeURIComponent(bodyText || 'Hi Aatiff,\n\nI reviewed your portfolio and would like to connect.\n\nBest regards,');
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
};
