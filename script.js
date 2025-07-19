function startConfession() {
  const name = document.getElementById('girlName').value || 'Kamu';
  document.getElementById('start-page').classList.add('hidden');
  document.getElementById('confess-page').classList.remove('hidden');

  const text = `${name}, kamu tuh kayak charger... bikin aku hidup lagi tiap liat senyummu~\n\nSetiap detik aku mikirin kamu... bukan pulsa.\n\nIntinya... mau gak kamu jadi pacarku? 😳❤️`;

  document.getElementById('confessText').innerText = text;
  document.getElementById('bgMusic').play();
}

function acceptLove() {
  alert("YEEEAAAY!! 😍 Sekarang kita jadian ya!");
}

function moveButton() {
  const btn = document.getElementById('noButton');
  const x = Math.floor(Math.random() * (window.innerWidth - 100));
  const y = Math.floor(Math.random() * (window.innerHeight - 50));
  btn.style.position = "absolute";
  btn.style.left = x + "px";
  btn.style.top = y + "px";
    }
    
