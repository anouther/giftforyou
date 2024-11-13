
    onload = () => {
      const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");

        const titles = ('i lovee youu kak ia').split('');
        const titleElement = document.getElementById('title');
        let index = 0;

 function play() {
          //Link Audio Bisa Diganti
          var audio = new Audio('anchor.mp3');
          audio.play();
        }

        function appendTitle() {
          if (index < titles.length) {
            titleElement.innerHTML += titles[index];
            index++;
            setTimeout(appendTitle, 300); // 300ms delay per huruf
          } else {
            // Setelah teks utama selesai, tambahkan subtitle kecil
            const subtitle = document.createElement('p');
            subtitle.innerText = " i wantt to tell you something about how IM VERYY VERYY LUCKY to havvee yoOuu and meett youu! ketemu kamu tu ngebuat aku bahagia bangett!?!? aku tauu ko sometimes i always make you madd to me but kamu gabakalan pernah bisa marah kan sama akuu? YEA i LOVE it ⭐️⭐️⭐️⭐️⭐️/⭐️⭐️⭐️⭐️⭐️ five out five stars!!! 100℅!! you're amazing and cute and wonderful!!";
            subtitle.style.fontSize = '20px'; // Ukuran font lebih kecil
            subtitle.style.marginTop = '2px'; // Spasi antara teks utama dan subtitle
            subtitle.style.color = '#fff'; // Warna abu-abu untuk teks subtitle

            // Menambahkan subtitle di bawah #title
            titleElement.appendChild(subtitle);
          }
        }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
