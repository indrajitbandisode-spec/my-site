export default function decorate(block) {
  const [logo, nav] = block.children;

  block.innerHTML = `
    <div class="header-inner">
      <div class="logo">${logo?.textContent || ''}</div>
      <nav>
        ${nav?.textContent
          .split(',')
          .map((i) => `<a href="#">${i.trim()}</a>`)
          .join('')}
      </nav>
    </div>
  `;
}
