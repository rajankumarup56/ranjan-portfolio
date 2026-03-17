document.querySelectorAll('.card').forEach(card => {
card.addEventListener('mouseover', () => {
card.style.boxShadow = "0 0 20px #38bdf8";
});

card.addEventListener('mouseout', () => {
card.style.boxShadow = "none";
});
});
