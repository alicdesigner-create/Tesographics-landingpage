// ─────────────────────────────────────────
//  TESO GRAPHICS – Save Contact (vCard)
// ─────────────────────────────────────────

document.getElementById('saveContact').addEventListener('click', function () {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Alirio Castaneda',
    'N:Castaneda;Alirio;;;',
    'ORG:TESO Graphics',
    'TITLE:Graphic Designer | Digital & Print Specialist',
    'TEL;TYPE=CELL,VOICE:+13035253023',
    'EMAIL;TYPE=WORK:studio@tesographics.com',
    'URL:https://tesographics.com',
    'NOTE:Bold Design for Digital & Print Worlds',
    'END:VCARD'
  ].join('\r\n');

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const url  = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href     = url;
  link.download = 'Alirio-Castaneda-TESO-Graphics.vcf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
});
