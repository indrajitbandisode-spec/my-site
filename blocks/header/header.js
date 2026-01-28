export default function decorate(block) {
  const rows = [...block.children];

  if (!rows.length) return;

  const title = rows[0]?.textContent;
  const navItems = rows[1]?.textContent?.split(',');

  block.innerHTML = `
    <div class="header-content">
      <h1>${title}</h1>
      <nav>
        ${navItems.map(item => `<a href="#">${item.trim()}</a>`).join('')}
      </nav>
    </div>
  `;
}
