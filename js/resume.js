(function () {
    'use strict';

    var resumeEl = document.getElementById('resume');
    var btnPrint = document.getElementById('btnPrint');
    var btnExport = document.getElementById('btnExport');

    if (btnPrint) {
        btnPrint.addEventListener('click', function () {
            window.print();
        });
    }

    if (btnExport && resumeEl) {
        btnExport.addEventListener('click', function () {
            btnExport.disabled = true;
            var original = btnExport.innerHTML;
            btnExport.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating…';

            var opt = {
                margin: [12, 14, 12, 14],
                filename: 'Md-Nazmul-Hassan.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: {
                    scale: 2,
                    useCORS: true,
                    letterRendering: true
                },
                jsPDF: {
                    unit: 'mm',
                    format: 'a4',
                    orientation: 'portrait'
                },
                pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
            };

            html2pdf().set(opt).from(resumeEl).save()
                .then(function () {
                    btnExport.disabled = false;
                    btnExport.innerHTML = original;
                })
                .catch(function () {
                    btnExport.disabled = false;
                    btnExport.innerHTML = original;
                    window.print();
                });
        });
    }
})();
