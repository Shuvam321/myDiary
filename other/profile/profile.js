const btns = document.querySelectorAll('.card__item__article-shape > span');

btns.forEach(btn => btn.addEventListener('click', () => toggleCard(btn)));

function toggleCard(btn) {
    const card = btn.closest('.card__item');
    if (card) card.classList.toggle('active');
}
