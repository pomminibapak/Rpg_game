// 1. Struktur Data Cerita (Ditambahkan tipe 'cheat' pada pilihan Game Over)
const storyNodes = {
    welcome: {
        text: "Hai! Ada sebuah petualangan kecil yang menantangmu hari ini.\n\nBefore we start, let's verify first:\nSiapakah yang memberikan game ini kepada anda?",
        illustration: "🕵️‍♂️✨<br><span class='text-xs text-slate-400 font-sans block mt-2'>[ Sistem Keamanan Privat ]</span>",
        isPasswordNode: true,
        passwordCorrectNode: 'sandiBenar',
        correctPassword: "mislah",
        bgClass: "bg-slate-950"
    },
    sandiBenar: {
        text: "Selamat jawaban anda benar. Mari kita lanjutkan bermain!",
        illustration: "🔓💖<br><span class='text-sm text-pink-400 font-bold block mt-2'>AKSES DIBUKA!</span>",
        bgClass: "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950",
        choices: [
            { text: "Mulai Petualangan 🚀", nextNode: 'start', type: 'primary' }
        ]
    },
    start: {
        text: "Kamu terbangun di sebuah ruangan misterius bernuansa merah muda. Di atas meja, terdapat sebuah kalender yang dilingkari dengan warna merah: HARI INI! Tiba-tiba sebuah suara bergema: 'Selamat datang di Ujian Ulang Tahun!'. Apa yang ingin kamu lakukan?",
        illustration: "🛏️💤❓",
        bgClass: "bg-gradient-to-br from-purple-950/40 via-slate-950 to-pink-950/40",
        choices: [
            { text: "Periksa laci meja misterius 🗄️", nextNode: 'periksaLaci', type: 'secondary' },
            { text: "Langsung berjalan keluar ruangan 🚪", nextNode: 'pintuKeluar', type: 'secondary' }
        ]
    },
    periksaLaci: {
        text: "Kamu membuka laci meja dan menemukan sebuah 'Kunci Emas Berkilau'. Sepertinya ini akan berguna nanti. Kamu menyimpannya di dalam tas.",
        illustration: "🔑✨🧳",
        item: "Kunci Emas",
        bgClass: "bg-gradient-to-br from-purple-950/40 via-slate-950 to-pink-950/40",
        choices: [
            { text: "Berjalan keluar ruangan membawa kunci 🏃‍♂️", nextNode: 'pintuKeluar', type: 'primary' }
        ]
    },
    pintuKeluar: {
        text: "Kamu tiba di depan sebuah gerbang raksasa yang dijaga oleh seekor naga es (atau mungkin kucing gemuk yang cemberut). Gerbang terkunci rapat dan membutuhkan kunci untuk membukanya.",
        illustration: "🐲🐾❄️",
        bgClass: "bg-gradient-to-br from-cyan-950/40 via-slate-950 to-slate-950",
        choices: [
            { 
                text: "Buka gerbang dengan Kunci Emas 🔑", 
                requiredItem: "Kunci Emas", 
                nextNode: 'tekaTekiGerbang',
                type: 'primary'
            },
            { 
                text: "Coba dobrak gerbangnya pakai kekuatan cinta 💔", 
                nextNode: 'endingGagal',
                type: 'danger' 
            }
        ]
    },
    tekaTekiGerbang: {
        text: "Kamu memasukkan Kunci Emas ke lubangnya. KLIK! Kunci berputar, namun gerbang belum terbuka. Sebuah layar digital muncul di tengah gerbang: 'Masukkan Kode PIN Keamanan (Format: DDMMYYYY)'.\n\nPetunjuk: Tanggal lahir sang petualang!",
        illustration: "🔢🔐🚪",
        bgClass: "bg-gradient-to-br from-cyan-950/50 via-slate-950 to-pink-950/20",
        isPasswordNode: true,
        passwordCorrectNode: 'endingSukses',
        correctPassword: "20072003"
    },
    endingGagal: {
        text: "Kamu gagal mendobrak pintu dan ditertawakan oleh naga/kucing. Kamu terjebak! (Coba lagi, jangan menyerah!).",
        illustration: "🙀💥🚪",
        bgClass: "bg-gradient-to-br from-red-950/30 via-slate-950 to-slate-950",
        choices: [
            { text: "Mulai Ulang Game 🔄", nextNode: 'start', resetInventory: true, type: 'danger' }
        ]
    },
    endingSukses: {
        text: "🎉 KREEEAK! BIP BIP! PIN Benar! Gerbang terbuka luas! Cahaya terang menyinarimu. Di balik gerbang, seluruh ruangan dipenuhi konfeti virtual. Selamat! Kamu berhasil menyelesaikan misi ini! Dan yang terpenting... SELAMAT ULANG TAHUN! 🎂✨ Semoga harimu menyenangkan dan penuh kebahagiaan!",
        illustration: "🏰🎈🎁",
        bgClass: "bg-gradient-to-br from-pink-950/50 via-slate-950 to-yellow-950/30"
    },
    halamanSurat: {
        text: "Untuk Seseorang yang Spesial,\n\nSelamat ulang tahun ya! Di hari yang luar biasa ini, aku berdoa semoga kamu selalu diberikan kesehatan, kebahagiaan yang melimpah, dan kekuatan untuk meraih semua impianmu. Terima kasih sudah menjadi sosok yang luar biasa selama ini.\n\nSemoga tahun ini membawa banyak cerita indah, tawa yang tulus, dan ketenangan di setiap langkahmu. Jadilah dirimu sendiri yang selalu hebat. Berbahagialah hari ini dan seterusnya! 💖✨",
        illustration: "✉️💝🌹",
        bgClass: "bg-gradient-to-br from-rose-950/60 via-slate-950 to-pink-950/60",
        choices: [
            { text: "Kembali ke Menu Utama 🏠", nextNode: 'start', resetInventory: true, type: 'secondary' }
        ]
    },
    // === HALAMAN GAME OVER (Ditambah tombol Easter Egg) ===
    gameOver: {
        text: "💥 GAME OVER! Nyawa kamu telah habis karena terlalu banyak salah menebak kode rahasia. Jangan berkecil hati, ayo pulihkan tenaga dan coba lagi dari awal!",
        illustration: "💀💔☠️",
        bgClass: "bg-gradient-to-br from-red-950/50 via-slate-950 to-black",
        choices: [
            { text: "Bangkit & Mulai Ulang 🔄", nextNode: 'welcome', resetInventory: true, fullHeal: true, type: 'danger' },
            { text: "Minta Code ke Developer 📞", type: 'cheat' } // <-- Tombol Easter Egg Baru
        ]
    }
};

// State Sistem Game
let currentItem = "Tangan Kosong";
let playerHP = 2;

// Referensi Elemen DOM
const bgScreen = document.getElementById('bg-screen');
const storyTextElement = document.getElementById('story-text');
const choicesContainer = document.getElementById('choices-container');
const playerItemElement = document.getElementById('player-item');
const playerHpElement = document.getElementById('player-hp');
const gameBox = document.getElementById('game-box');
const photoModal = document.getElementById('photo-modal');
const closeModalBtn = document.getElementById('close-modal');
const storyImageElement = document.getElementById('story-image');

const passwordContainer = document.getElementById('password-container');
const passwordInput = document.getElementById('password-input');
const passwordError = document.getElementById('password-error');

const soundClick = document.getElementById('sound-click');
const bgmHbd = document.getElementById('bgm-hbd');
const bgmRomantis = document.getElementById('bgm-romantis');

let typewriterTimeout; 
bgmHbd.volume = 0.4;
bgmRomantis.volume = 0.4;

closeModalBtn.addEventListener('click', () => {
    photoModal.classList.remove('modal-active');
});

function stopAllMusic() {
    bgmHbd.pause();
    bgmHbd.currentTime = 0;
    bgmRomantis.pause();
    bgmRomantis.currentTime = 0;
}

function updateHPDisplay() {
    if (playerHP === 2) playerHpElement.innerText = "❤️❤️";
    else if (playerHP === 1) playerHpElement.innerText = "❤️💔";
    else playerHpElement.innerText = "💔💔";
}

function triggerScreenShake() {
    gameBox.classList.add('shake-animation');
    setTimeout(() => { gameBox.classList.remove('shake-animation'); }, 500);
}

function launchConfettiCelebration() {
    let duration = 4 * 1000;
    let animationEnd = Date.now() + duration;
    let defaults = { startVelocity: 35, spread: 360, ticks: 70, zIndex: 10000 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    let interval = setInterval(function() {
        let timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);

        let particleCount = 65 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}

function showStoryNode(nodeKey) {
    const node = storyNodes[nodeKey];
    clearTimeout(typewriterTimeout);
    
    storyTextElement.innerHTML = "";
    choicesContainer.innerHTML = '';
    
    passwordContainer.classList.add('hidden');
    passwordError.classList.add('hidden');

    if (node.bgClass) {
        bgScreen.className = `text-slate-100 min-h-screen font-sans flex flex-col justify-between select-none transition-all duration-700 ease-in-out ${node.bgClass}`;
    }

    if (node.illustration) {
        storyImageElement.innerHTML = node.illustration;
    } else {
        storyImageElement.innerHTML = "🎮";
    }

    if (node.item) {
        currentItem = node.item;
        playerItemElement.innerText = currentItem;
    }

    if (nodeKey === 'endingSukses') {
        stopAllMusic();
        bgmHbd.play().catch(e => console.log(e));
    } else if (nodeKey === 'halamanSurat') {
        stopAllMusic();
        bgmRomantis.play().catch(e => console.log(e));
    } else if (nodeKey === 'welcome' || (nodeKey === 'start' && currentItem === "Tangan Kosong")) {
        stopAllMusic();
    }

    let i = 0;
    function typeWriter() {
        if (i < node.text.length) {
            let currentChar = node.text.charAt(i);
            
            if (currentChar === '\n') {
                storyTextElement.innerHTML += '<br>';
            } else {
                storyTextElement.innerHTML += currentChar;
            }
            
            if (nodeKey !== 'welcome' && i % 2 === 0 && currentChar !== ' ' && currentChar !== '\n') {
                soundClick.currentTime = 0;
                soundClick.play().catch(e => {});
            }

            i++;
            typewriterTimeout = setTimeout(typeWriter, 30); 
        } else {
            if (node.isPasswordNode) {
                passwordContainer.classList.remove('hidden');
                passwordInput.value = ""; 
                
                if(nodeKey === 'tekaTekiGerbang') {
                    passwordInput.placeholder = "Contoh: 20072003";
                } else {
                    passwordInput.placeholder = "Ketik jawaban di sini...";
                }
                
                const submitBtn = document.createElement('button');
                submitBtn.innerText = "Konfirmasi Jawaban 🔑";
                submitBtn.className = "w-full bg-gradient-to-r from-pink-600 to-purple-600 text-center px-4 py-3 rounded-lg border border-pink-400 transition-all duration-200 text-sm font-bold transform active:scale-95 text-white cursor-pointer btn-shimmer shadow-lg hover:brightness-110";
                
                submitBtn.addEventListener('click', () => {
                    let jawabanUser = passwordInput.value.trim().toLowerCase();
                    
                    if (jawabanUser === node.correctPassword) {
                        try { soundClick.play(); } catch(e){}
                        showStoryNode(node.passwordCorrectNode);
                    } else {
                        playerHP--; 
                        updateHPDisplay();
                        triggerScreenShake();
                        
                        if (playerHP <= 0) {
                            showStoryNode('gameOver');
                        } else {
                            passwordError.classList.remove('hidden');
                        }
                    }
                });
                choicesContainer.appendChild(submitBtn);
            } else if (nodeKey === 'endingSukses') {
                const nextBtn = document.createElement('button');
                nextBtn.innerText = "Baca ini ya ✉️";
                nextBtn.className = "w-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-center px-5 py-3.5 rounded-xl border border-pink-300 transition-all duration-200 text-sm font-bold transform active:scale-95 text-white cursor-pointer btn-shimmer shadow-xl hover:scale-[1.01]";
                nextBtn.addEventListener('click', () => {
                    photoModal.classList.remove('modal-active');
                    showStoryNode('halamanSurat');
                });
                choicesContainer.appendChild(nextBtn);
            } else if (node.choices) {
                showChoices(node);
            }
        }
    }
    
    typeWriter();

    if (nodeKey === 'endingSukses') {
        setTimeout(() => {
            photoModal.classList.add('modal-active');
            launchConfettiCelebration();
        }, 600);
    }
}

function showChoices(node) {
    node.choices.forEach(choice => {
        if (choice.requiredItem && currentItem !== choice.requiredItem) {
            return;
        }

        const button = document.createElement('button');
        button.innerText = choice.text;
        
        if (choice.type === 'primary') {
            button.className = "w-full bg-gradient-to-r from-pink-600 to-rose-600 text-center px-4 py-3 rounded-xl border border-pink-400/50 transition-all duration-200 text-sm font-bold transform hover:scale-[1.01] active:scale-95 text-white cursor-pointer shadow-md hover:brightness-110 btn-shimmer";
        } else if (choice.type === 'danger') {
            button.className = "w-full bg-gradient-to-r from-red-700 to-rose-900 text-center px-4 py-3 rounded-xl border border-red-500/40 transition-all duration-200 text-sm font-medium transform active:scale-95 text-red-100 cursor-pointer shadow-md hover:from-red-600 hover:to-rose-800";
        } else if (choice.type === 'cheat') {
            // Gaya tombol Easter Egg: Oranye Berkilau Keren
            button.className = "w-full bg-gradient-to-r from-amber-500 to-orange-600 text-center px-4 py-3 rounded-xl border border-amber-400/40 transition-all duration-200 text-sm font-bold transform hover:scale-[1.01] active:scale-95 text-white cursor-pointer shadow-md hover:brightness-110 btn-shimmer";
        } else {
            button.className = "w-full bg-slate-800/90 hover:bg-slate-700/90 text-center px-4 py-3 rounded-xl border border-slate-700 transition-all duration-200 text-sm font-medium transform hover:border-pink-500/50 active:scale-95 text-slate-200 cursor-pointer shadow-sm";
        }
        
        button.addEventListener('click', () => {
            // LOGIKA AKSI JIKA TOMBOL EASTER EGG DIKLIK
            if (choice.type === 'cheat') {
                alert("✨ INFO CODE RAHASIA ✨\n\nHubungi WhatsApp 0877-8323-2328 sekarang juga dan ketik pesan:\n'Developer baik hati, minta cheat code dong!'\n\nKamu akan diberikan kode rahasia untuk memulihkan nyawa instan! 😉");
                return; // Supaya tidak berpindah halaman dulu sebelum dia chat
            }

            if (choice.resetInventory) {
                currentItem = "Tangan Kosong";
                playerItemElement.innerText = currentItem;
                photoModal.classList.remove('modal-active');
            }
            if (choice.fullHeal) {
                playerHP = 2;
                updateHPDisplay();
            }
            showStoryNode(choice.nextNode);
        });
        
        choicesContainer.appendChild(button);
    });
}

showStoryNode('welcome');
updateHPDisplay(); // Menjamin tampilan awal langsung 2 hati