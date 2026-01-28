export default function decorate(block) {
  const items = [...block.children];
  block.innerHTML = `<div class="cards-container">
    ${items.map(item => `<div class="card">${item.innerHTML}</div>`).join('')}
  </div>`;
}
