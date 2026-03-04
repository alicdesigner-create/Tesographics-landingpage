// ─────────────────────────────────────────
//  TESO GRAPHICS – Save Contact (vCard 3.0)
// ─────────────────────────────────────────

document.getElementById('saveContact').addEventListener('click', function () {

  // Build vCard following RFC 2426 (v3.0) — CRLF required between every line
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Alirio Castaneda',
    'N:Castaneda;Alirio;;;',
    'ORG:TESO Graphics',
    'TITLE:Graphic Designer | Digital & Print Specialist',
    'TEL;TYPE=CELL,VOICE:+13035253023',
    'EMAIL;TYPE=WORK,INTERNET:studio@tesographics.com',
    'URL;TYPE=WORK:https://tesographics.com',
    'NOTE:Bold Design for Digital & Print Worlds',
    'END:VCARD',
    ''          // trailing CRLF required by spec
  ];

  const vcard = lines.join('\r\n');
  const filename = 'Alirio-Castaneda-TESO.vcf';

  // iOS Safari does not honour the `download` attribute on blob URLs.
  // Opening the URL directly lets iOS intercept the text/vcard MIME type
  // and show its native "Add to Contacts" sheet.
  const isIOS = /iP(hone|ad|od)/i.test(navigator.userAgent);

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const url  = URL.createObjectURL(blob);

  if (isIOS) {
    window.location.href = url;
  } else {
    const link = document.createElement('a');
    link.href     = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
});
