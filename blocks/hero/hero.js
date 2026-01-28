export default function decorate(block) {
  const [title, subtitle, image] = block.children;
  block.innerHTML = `
    <div class="hero-inner">
      <img src="${image?.getAttribute('src') || ''}" alt="Hotel Image"/>
      <div class="hero-text">
        <h1>${title?.textContent}</h1>
        <p>${subtitle?.textContent}</p>
      </div>
    </div>
  `;
}
