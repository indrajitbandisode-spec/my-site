export default function decorate(block) {
  const [title, ...desc] = block.children;
  block.innerHTML = `
    <div class="section-inner">
      <h2>${title?.textContent}</h2>
      ${desc.map(d => `<p>${d.textContent}</p>`).join('')}
    </div>
  `;
}
