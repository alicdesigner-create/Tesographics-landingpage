// ─────────────────────────────────────────
//  TESO GRAPHICS – Save Contact (vCard 3.0)
// ─────────────────────────────────────────

document.getElementById('saveContact').addEventListener('click', function () {

  // vCard 3.0 — RFC 2426 — CRLF line endings required
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Alirio Castaneda',
    'N:Castaneda;Alirio;;;',
    'ORG:TESO Graphics',
    'TITLE:Graphic Designer | Digital & Print Specialist',
    'TEL;TYPE=WORK,VOICE:(303) 525 3023',
    'EMAIL;TYPE=INTERNET:studio@tesographics.com',
    'URL:https://tesographics.com',
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
