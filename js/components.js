fetch('../components/navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;

    initializeNavbar();
  });

fetch('../components/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });

function initializeNavbar() {

  window.addEventListener('scroll', () => {
    document.getElementById('ezNav')?.classList.toggle(
      'scrolled',
      window.scrollY > 20
    );
  });

  const themeBtn = document.getElementById('ezThemeBtn');

  if (themeBtn) {
    let dark = false;

    themeBtn.addEventListener('click', () => {
      dark = !dark;
      document.body.classList.toggle('dark', dark);
      themeBtn.querySelector('i').className =
        dark ? 'fas fa-sun' : 'fas fa-moon';
    });
  }

  const rtlBtn = document.getElementById('rtlToggle');

  if (rtlBtn) {
    let rtl = false;

    rtlBtn.addEventListener('click', () => {
      rtl = !rtl;
      document.documentElement.dir = rtl ? 'rtl' : 'ltr';
    });
  }

  const menuBtn = document.getElementById('ezMenuBtn');
  const drawer = document.getElementById('ezDrawer');

  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', () => {
      const open = drawer.classList.toggle('open');
      menuBtn.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }
}


function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.ez-link, .ez-sub-link').forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    link.classList.toggle('active', linkPage === currentPage);
  });

  document.querySelectorAll('.ez-mob-link, .ez-mob-sub-link').forEach(link => {
    const linkPage = link.getAttribute('href')?.split('/').pop();
    link.classList.toggle('active', linkPage === currentPage);
  });


  document.querySelectorAll('.ez-item.ez-has-sub').forEach(item => {
    const hasActiveSub = item.querySelector('.ez-sub-link.active');
    if (hasActiveSub) item.querySelector('.ez-link').classList.add('active');
  });
}

function initializeNavbar() {

  window.addEventListener('scroll', () => {
    document.getElementById('ezNav')?.classList.toggle(
      'scrolled',
      window.scrollY > 20
    );
  });

 const themeBtn = document.getElementById('ezThemeBtn');

if (themeBtn) {

  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeBtn.querySelector('i').className = 'fas fa-sun';
  } else {
    themeBtn.querySelector('i').className = 'fas fa-moon';
  }

  themeBtn.addEventListener('click', () => {

    const isDark = document.body.classList.toggle('dark');

    themeBtn.querySelector('i').className =
      isDark ? 'fas fa-sun' : 'fas fa-moon';

    localStorage.setItem(
      'theme',
      isDark ? 'dark' : 'light'
    );

  });

}

  const rtlBtn = document.getElementById('rtlToggle');

  if (rtlBtn) {
    let rtl = false;

    rtlBtn.addEventListener('click', () => {
      rtl = !rtl;
      document.documentElement.dir = rtl ? 'rtl' : 'ltr';
    });
  }

  const menuBtn = document.getElementById('ezMenuBtn');
  const drawer = document.getElementById('ezDrawer');

  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', () => {
      const open = drawer.classList.toggle('open');
      menuBtn.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }


  document.querySelectorAll('.ez-mob-has-sub').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.ez-mob-item').classList.toggle('sub-open');
    });
  });

  setActiveNavLink();
}