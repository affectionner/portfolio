let z = 10;

  // Toggle window open/closed
  const isMobile = () => window.innerWidth <= 768;

  function tog(id) {
    const win  = document.getElementById('win-' + id);
    const btn  = document.getElementById('btn-' + id);
    const img  = document.getElementById('img-' + id);
    const da   = document.getElementById('da');
    const panel = document.getElementById('mobile-panel');

    const isOpen = win.classList.contains('show');

    if (isOpen) {
      // ── CLOSE ──
      win.classList.remove('show');
      btn.classList.remove('active');
      if (img) img.classList.remove('show');

      if (isMobile()) {
        // Remove from mobile panel
        if (win.parentNode === panel) panel.removeChild(win);
        if (img && img.parentNode === panel) panel.removeChild(img);
        // Re-append to da so they exist for desktop
        da.appendChild(win);
        if (img) da.appendChild(img);
        // Hide panel if empty
        if (!panel.querySelector('.win')) panel.classList.remove('has-content');
      }
    } else {
      // ── OPEN ──
      if (isMobile()) {
        // Move window into mobile panel at the top
        panel.insertBefore(win, panel.firstChild);
        if (img) panel.insertBefore(img, panel.firstChild);
        panel.classList.add('has-content');
        // Scroll panel into view
        setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
      } else {
        // Desktop: cascade from top-left
        const openCount = document.querySelectorAll('#da .win.show').length;
        const cascade   = openCount * 22;
        const daW       = da.offsetWidth;
        const winW      = 305;
        const imgW      = 200;
        const gap       = 8;
        const infoLeft  = Math.min(10 + cascade, daW - winW - imgW - gap - 10);
        win.style.left  = infoLeft + 'px';
        win.style.top   = (10 + cascade) + 'px';
        if (img) {
          const imgLeft  = infoLeft + winW + gap;
          img.style.left = (imgLeft + imgW > daW ? infoLeft - imgW - gap : imgLeft) + 'px';
          img.style.top  = (10 + cascade) + 'px';
        }
      }

      win.classList.add('show');
      btn.classList.add('active');
      z++; win.style.zIndex = z;
      if (img) { img.classList.add('show'); z++; img.style.zIndex = z; }
    }
  }

  // Close via red button
  function close_win(id) {
    const win   = document.getElementById('win-' + id);
    const panel = document.getElementById('mobile-panel');
    const da    = document.getElementById('da');
    win.classList.remove('show');
    document.getElementById('btn-' + id).classList.remove('active');
    if (isMobile() && win.parentNode === panel) {
      panel.removeChild(win);
      da.appendChild(win);
      if (!panel.querySelector('.win')) panel.classList.remove('has-content');
    }
  }

  function close_img(id) {
    const img   = document.getElementById('img-' + id);
    const panel = document.getElementById('mobile-panel');
    const da    = document.getElementById('da');
    if (!img) return;
    img.classList.remove('show');
    if (isMobile() && img.parentNode === panel) {
      panel.removeChild(img);
      da.appendChild(img);
    }
  }

  // Make an element draggable by its .win-chrome handle (or itself)
  function makeDraggable(el) {
    const handle = el.querySelector('.win-chrome') || el;
    handle.addEventListener('mousedown', e => {
      e.preventDefault();
      const ox = el.offsetLeft, oy = el.offsetTop;
      const sx = e.clientX,    sy = e.clientY;
      z++; el.style.zIndex = z;
      const move = e2 => {
        el.style.left = (ox + e2.clientX - sx) + 'px';
        el.style.top  = Math.max(0, oy + e2.clientY - sy) + 'px';
      };
      const up = () => {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', up);
      };
      document.addEventListener('mousemove', move);
      document.addEventListener('mouseup', up);
    });
    // Bring to front on click
    el.addEventListener('mousedown', () => { z++; el.style.zIndex = z; });
  }

  // Init draggable on all windows + sticky note
  document.querySelectorAll('.win, .img-win').forEach(makeDraggable);