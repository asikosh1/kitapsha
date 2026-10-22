(() => {
    const TOTAL = 5;
    const EXTS = ["png", "jpg", "jpeg", "PNG", "JPG"];
    let current = 1;

    const img = document.getElementById('page-img');
    const counter = document.getElementById('counter');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const msg = document.getElementById('error-msg');
    let extIndex = 0;

    function render() {
      extIndex = 0;
      if(msg) msg.textContent = "";
      img.src = `images/${current}.${EXTS[extIndex]}`;
      counter.textContent = `${current}/${TOTAL}`;
      prevBtn.disabled = current === 1;
      nextBtn.disabled = current === TOTAL;
    }

    img.onerror = () => {
      extIndex++;
      if (extIndex < EXTS.length) {
        img.src = `images/${current}.${EXTS[extIndex]}`;
      } else {
        if(msg) msg.textContent = `Табылмады: images/${current}.png — папка аты мен сурет атын тексер`;
        console.error('Сурет табылмады:', `images/${current}.png`);
      }
    };

    prevBtn.addEventListener('click', () => { if(current > 1) { current--; render(); } });
    nextBtn.addEventListener('click', () => { if(current < TOTAL) { current++; render(); } });
    document.addEventListener('keydown', (e) => {
      if(e.key === 'ArrowLeft' && current > 1) { current--; render(); }
      if(e.key === 'ArrowRight' && current < TOTAL) { current++; render(); }
    });

    render();
  })();