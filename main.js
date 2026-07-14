// ==========================================
// 1. STRUKTUR DATA CERITA (DENGAN GAME PENUTUP)
// ==========================================
const storyNodes = {
    welcome: {
        text: "Hai Adik Junior! Ada sebuah petualangan kecil yang menantangmu hari ini.\n\nSebelum melangkah, mari verifikasi terlebih dahulu:\n\nSiapakah yang memberimu coklat hari ini?",
        illustration: "🕵️‍♂️✨<br><span class='text-xs text-slate-400 font-sans block mt-2'>[ Akses Terkunci ]</span>",
        isPasswordNode: true,
        passwordCorrectNode: 'sandiBenar',
        correctPassword: "mislah",
        bgClass: "bg-slate-950"
    },
    sandiBenar: {
        text: "Selamat jawabanmu benar, identitas terkonfirmasi. \nSilahkan mulai petualangan.",
        illustration: "👏🔐<br><span class='text-sm text-pink-400 font-bold block mt-2'>AKSES DIBUKA!</span>",
        bgClass: "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950",
        choices: [
            { text: "Mulai Petualangan 🚀", nextNode: 'start', type: 'primary' }
        ]
    },
    start: {
        text: "Pada suatu hari kamu terbangun disebuah ruangan remang-remang berwarna coklat muda. Udara terasa dingin dan berbau besi. Di depanmu ada beberapa jalan, tapi hati-hati... langkah yang salah bisa berakibat fatal.",
        illustration: "🛏️🌑❓",
        bgClass: "bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950",
        choices: [
            { text: "Masuk ke pintu sebelah kiri yang berderit 🚪", nextNode: 'kamarMandiMisterius', type: 'secondary' },
            { text: "Periksa laci meja di sudut ruangan 🗄️", nextNode: 'periksaLaci', type: 'secondary' },
            { text: "Mendekati cermin besar di dinding 🪞", nextNode: 'jebakanCermin', type: 'secondary' },
            { text: "Langsung menuju pintu keluar 🚪", nextNode: 'pilihanLorong', type: 'secondary' }
        ]
    },
    
    pilihanLorong: {
        text: "Kamu melangkah keluar pintu ruang utama. Di depanmu ada lorong yang bercabang. Ke mana kamu ingin melangkah sekarang?",
        illustration: "🛣️🎃🗺️",
        bgClass: "bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950",
        choices: [
            { text: "Masuk ke ruang santai🧋", nextNode: 'ruangSantai', type: 'danger' },
            { text: " Keluar menuju gerbang utama ⚔️", nextNode: 'pintuKeluar', type: 'danger' },
            { text: "Kembali ke Ruangan Utama 🚪", nextNode: 'start', type: 'secondary' }
        ]
    },
    
    ruangSantai: {
        text: "Kamu memasuki Ruang Santai. Di sini terdapat sofa empuk dan pemutar musik tua yang berdebu. Suasananya sangat tenang.\n kamu bisa menyalakan musik.. 💫",
        illustration: "🍿🎹📀",
        bgClass: "bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950",
        choices: [
            { text: "Nyalakan musik ▶️", nextNode: 'aksiPutarMusik', type: 'danger' },
            { text: " Keluar menuju lorong 🛣️", nextNode: 'pilihanLorong', type: 'secondary' },
        
        ]
    },
    
    ruangSantaiMusikOn: {
        text: "Musik sudah dinyalakan,\n  Selamat menikmati musik santai .. 🎶🎧",
        illustration: "🎶🎊✨",
        bgClass: "bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950",
        choices: [
            { text: "Bosan!!, Matikan musik ⏹️", nextNode: 'aksiStopMusik', type: 'danger' }
            
        ]
    },
    kamarMandiMisterius: {
        text: "Kamu masuk ke ruangan gelap berbau lembap. Ada tetesan air yang ritmis: 'tik... tik... tik...'. Di depan ada kotak kado hijau dan wastafel tua.",
        illustration: "💧🧼📦",
        bgClass: "bg-gradient-to-br from-slate-900 via-emerald-950/20 to-slate-950",
        choices: [
            { text: "Buka kotak kado hijau itu 🎁", nextNode: 'jebakanKado', type: 'danger' },
            { text: "Selidiki wastafel yang bergetar 💧", nextNode: 'jebakanAir', type: 'danger' },
            { text: "Gak nyaman, kembali ke ruangan utama 🏃‍♂️", nextNode: 'start', type: 'secondary' }
        ]
    },
    jebakanKado: {
        text: "Saat kamu membuka kado, sesuatu yang tajam melompat keluar! Kamu terpeleset lantai basah dan jatuh terjerembab! Sakit sekali... (1 Nyawa Hilang).",
        illustration: "🤡💥💔",
        bgClass: "bg-gradient-to-br from-red-950/30 via-slate-950 to-slate-950",
        takeDamage: true,
        choices: [{ text: "Bangun dan kembali ke tengah ruangan 🏃‍♂️", nextNode: 'kamarMandiMisterius', type: 'secondary' }]
    },
    jebakanAir: {
        text: "Saat kamu mendekat, kabel listrik yang terkelupas di wastafel menyambar jarimu! BZZZT! Kamu terlempar ke dinding! (1 Nyawa Hilang).",
        illustration: "⚡💔😱",
        bgClass: "bg-gradient-to-br from-red-950/30 via-slate-950 to-slate-950",
        takeDamage: true,
        choices: [{ text: "Merangkak kembali ke tengah ruangan 🏃‍♂️", nextNode: 'kamarMandiMisterius', type: 'secondary' }]
    },
    jebakanCermin: {
        text: "Kamu berdiri di depan cermin. Aneh... bayanganmu tidak mengikuti gerakanmu! Tiba-tiba, tangan dari dalam cermin menarik kerah bajumu dengan kasar! Kamu berteriak dan berhasil lepas, tapi dadamu sesak karena kaget! (1 Nyawa Hilang).",
        illustration: "🪞🖐️😨",
        bgClass: "bg-gradient-to-br from-purple-950/30 via-slate-950 to-slate-950",
        takeDamage: true,
        choices: [{ text: "Menjauh dari cermin dan kembali ke tengah ruangan 🏃‍♂️", nextNode: 'start', type: 'secondary' }]
    },
    periksaLaci: {
        text: "Kamu dengan hati-hati membuka laci. Di dalamnya tergeletak sebuah 'Kunci Emas Berkilau'. Sepertinya ini hari keberuntunganmu.",
        illustration: "🔑✨🧳",
        item: "Kunci Emas",
        bgClass: "bg-gradient-to-br from-purple-950/40 via-slate-950 to-pink-950/40",
        choices: [{ text: "Simpan kunci dan kembali ke tengah ruangan 🏃‍♂️", nextNode: 'start', type: 'primary' }]
    },
    pintuKeluar: {
        text: "Kamu tiba di depan gerbang raksasa yang dijaga oleh naga es membeku. Di sebelah kanan gerbang terdapat sebuah tombol merah besar bertuliskan 'OPEN', dan di tengahnya ada lubang kunci kuno. Apa yang akan kamu lakukan?",
        illustration: "🐲🚪🚨",
        bgClass: "bg-gradient-to-br from-cyan-950/40 via-slate-950 to-slate-950",
        choices: [
            { text: "Tekan tombol merah 'OPEN' biar cepat 🚨", nextNode: 'jebakanTombol', type: 'danger' },
            { text: "Periksa mata naga es yang berkilau 👁️", nextNode: 'jebakanNaga', type: 'danger' },
            { text: "Buka gerbang dengan Kunci Emas 🔑", requiredItem: "Kunci Emas", nextNode: 'tekaTekiGerbang', type: 'danger' },
            { text: "Coba dobrak paksa gerbangnya 💔", nextNode: 'endingGagal', type: 'danger' },
            { text: "Kembali ke ruangan utama 🏃‍♂️", nextNode: 'start', type: 'secondary' }
        ]
    },
    jebakanTombol: {
        text: "Kamu menekan tombol merah itu. TIT! Tiba-tiba lantai di bawahmu terbuka dan menyemburkan gas beracun! Kamu terbatuk-batuk hebat dan pandanganmu mengabur sebelum berhasil melompat mundur! (1 Nyawa Hilang).",
        illustration: "🚨💨🤮",
        bgClass: "bg-gradient-to-br from-red-950/40 via-slate-950 to-slate-950",
        takeDamage: true,
        choices: [{ text: "Kembali berdiri di depan gerbang dengan waspada 🏃‍♂️", nextNode: 'pintuKeluar', type: 'secondary' }]
    },
    jebakanNaga: {
        text: "Saat kamu mendekati patung naga es, matanya menyala biru terang! Naga itu menghembuskan hawa es super dingin tepat ke arahmu! Tubuhmu membeku sesaat dan menjadi sangat lemas! (1 Nyawa Hilang).",
        illustration: "🐲❄️🥶",
        bgClass: "bg-gradient-to-br from-blue-950/50 via-slate-950 to-slate-950",
        takeDamage: true,
        choices: [{ text: "Mundur menjauhi naga ke depan gerbang 🏃‍♂️", nextNode: 'pintuKeluar', type: 'secondary' }]
    },
    tekaTekiGerbang: {
        text: "Kunci masuk dengan pas. KLIK. Namun, layar digital menyala: \n'Masukkan Kode PIN' \n\n Clue : Tanggal Spesial (ddmmyyyy)",
        illustration: "🔢🔐🚪",
        bgClass: "bg-gradient-to-br from-cyan-950/50 via-slate-950 to-pink-950/20",
        isPasswordNode: true,
        passwordCorrectNode: 'endingSukses',
        correctPassword: "20072003"
    },
    endingGagal: {
        text: "Kamu gagal mendobrak pintu. Penjaga gerbang menertawakanmu. Kamu harus mencoba lagi.",
        illustration: "🙀💥🚪",
        bgClass: "bg-gradient-to-br from-red-950/30 via-slate-950 to-slate-950",
        choices: [{ text: "Mundur kembali ke depan gerbang 🏃‍♂️", nextNode: 'pintuKeluar', type: 'secondary' }]
    },
    endingSukses: {
        text: "🎉🎉 KREEEAK! BIP BIP! PIN Benar!\n Gerbang terbuka luas! Cahaya terang menyinarimu. Di balik gerbang, seluruh ruangan dipenuhi konfeti yang indah. \n Selamat! Kamu berhasil menyelesaikan misi ini! Dan yang terpenting... \nSELAMAT ULANG TAHUN Yang Ke 23 Adik Junior! 🎂✨\n Semoga harimu menyenangkan dan penuh kebahagiaan! \n Dengerin dulu lagunya yaa, sambil pikir-pikir besok mau teraktir apa.. 😁",
        illustration: "🏰🎈🎁",
        bgClass: "bg-gradient-to-br from-pink-950/50 via-slate-950 to-yellow-950/30"
    },
    halamanSurat: {
        text: "Hey adik Junior.. ,\nSelamat ulang tahun ya! Di hari yang luar biasa ini, aku berdoa semoga kamu selalu diberikan kesehatan, kebahagiaan yang melimpah, dan kekuatan untuk meraih semua impianmu. Terima kasih sudah menjadi teman kerja yang luar biasa selama ini.\nSemoga tahun ini membawa banyak cerita indah, tawa yang tulus, dan ketenangan di setiap langkahmu. Jadilah dirimu sendiri yang selalu hebat. Berbahagialah hari ini dan seterusnya!✨✨nnnnn",
        illustration: "✉️🌟🎈",
        bgClass: "bg-gradient-to-br from-rose-950/60 via-slate-950 to-pink-950/60",
        choices: [
            { text: "✨ Lihat Ini ✨", nextNode: 'showFotoBerdua', type: 'cheat' }
        ]
    },
    pilihanGamePenutup: {
        text: "Sebelum perjalanan ini benar-benar berakhir, apakah kamu bersedia bermain satu game penutup yang santai dan menyenangkan untuk menguji keberuntunganmu hari ini? 🎲✨",
        illustration: "❓🔮🎮",
        bgClass: "bg-gradient-to-br from-purple-950/40 via-slate-950 to-slate-950",
        choices: [
            { text: "Ya, Tentu Bersedia! 🎮", nextNode: 'gamePenutupMulai', type: 'primary' },
            { text: "Tidak, Langsung Selesai 🏁", nextNode: 'theEndNode', type: 'secondary' }
        ]
    },
    gamePenutupMulai: {
        text: "Selamat datang di Kotak Keberuntungan! 🎁✨\nDi depanmu ada 3 kotak hadiah misterius. Salah satu kotak berisi Berkah Utama Hari Ini! Pilih satu kotak yang paling menarik hatimu:",
        illustration: "📦📦📦",
        bgClass: "bg-gradient-to-br from-amber-950/30 via-slate-950 to-pink-950/20",
        choices: [
            { text: "Pilih Kotak Kiri 🛍️", nextNode: 'hadiahKotak1', type: 'cheat' },
            { text: "Pilih Kotak Tengah 🎁", nextNode: 'hadiahKotak2', type: 'cheat' },
            { text: "Pilih Kotak Kanan 🎀", nextNode: 'hadiahKotak3', type: 'cheat' }
        ]
    },
    hadiahKotak1: {
        text: "🎉 Kamu membuka Kotak Kiri! Di dalamnya terdapat gulungan emas bertuliskan:\n\n'Keberuntungan Berlipat Ganda! Kamu akan dikelilingi oleh orang-orang baik dan hari-hari penuh senyuman di usiamu yang baru ini!' 🌟✨",
        illustration: "🛍️🌟✨",
        bgClass: "bg-gradient-to-br from-teal-950/40 via-slate-950 to-slate-950",
        choices: [{ text: "Lanjutkan Langkah Terakhir 🏁", nextNode: 'theEndNode', type: 'primary' }]
    },
    hadiahKotak2: {
        text: "🎉 Kamu membuka Kotak Tengah! Di dalamnya memancarkan cahaya pink lembut bertuliskan:\n\n'Energi Kebahagiaan Tak Terbatas! Semua impian, target, dan rencana besarmu tahun ini akan dimudahkan jalannya secara ajaib!' 🎉🚀",
        illustration: "🎁🎊🔮",
        bgClass: "bg-gradient-to-br from-pink-950/40 via-slate-950 to-slate-950",
        choices: [{ text: "Lanjutkan Langkah Terakhir 🏁", nextNode: 'theEndNode', type: 'primary' }]
    },
    hadiahKotak3: {
        text: "🎉 Kamu membuka Kotak Kanan! Di dalamnya terdapat taburan bintang kecil berkilau bertuliskan:\n\n'Kedamaian Hati & Kesehatan Paripurna! Jiwamu akan selalu tenang, tubuhmu akan selalu sehat bugar, dan harimu dipenuhi rasa syukur!' 🌿🌻",
        illustration: "🎀🌿✨",
        bgClass: "bg-gradient-to-br from-emerald-950/40 via-slate-950 to-slate-950",
        choices: [{ text: "Lanjutkan Langkah Terakhir 🏁", nextNode: 'theEndNode', type: 'primary' }]
    },
    theEndNode: {
        text: "Terima kasih sudah bermain, \nSemoga kamu suka\nSee you next time ✨ 👋 \n\n\n- MSH",
        illustration: "✨🎬💫",
        bgClass: "bg-gradient-to-br from-slate-950 via-purple-950/30 to-black",
        choices: [
            { text: "Petualangan Selesai 🏁", type: 'whatsappSelesai' }
        ]
    },
    gameOver: {
        text: "💥 GAME OVER! Nyawamu habis. Keberuntungan sedang tidak berpihak padamu kali ini. Ayo pulihkan tenaga dan coba lagi!",
        illustration: "💀💔☠️",
        bgClass: "bg-gradient-to-br from-red-950/50 via-slate-950 to-black",
        choices: [
            { text: "Bangkit & Mulai Ulang 🔄", nextNode: 'welcome', resetInventory: true, fullHeal: true, type: 'danger' },
            { text: "Minta Code 📞", type: 'cheat' }
        ]
    }
};

// ==========================================
// 2. STATE SISTEM GAME & SLIDE FOTO
// ==========================================
let currentItem = "Tangan Kosong";
let maxHP = 4; 
let playerHP = 4; 
const daftarFoto = ["bersama1.jpg", "bersama2.jpg", "bersama3.jpg"];
let indeksFotoAktif = 0;
let autoSlideInterval = null;

// ==========================================
// 3. REFERENSI ELEMEN DOM
// ==========================================
const bgmSantai = document.getElementById('bgm-santai');
const bgScreen = document.getElementById('bg-screen');
const storyTextElement = document.getElementById('story-text');
const choicesContainer = document.getElementById('choices-container');
const playerItemElement = document.getElementById('player-item');
const playerHpElement = document.getElementById('player-hp');
const gameBox = document.getElementById('game-box');

const photoModal = document.getElementById('photo-modal');
const closeModalBtn = document.getElementById('close-modal');
const photoDuaModal = document.getElementById('photo-dua-modal');
const closePhotoDuaBtn = document.getElementById('close-photo-dua');

const slideImg = document.getElementById('slide-img');
const prevSlideBtn = document.getElementById('prev-slide');
const nextSlideBtn = document.getElementById('next-slide');

const storyImageElement = document.getElementById('story-image');
const passwordContainer = document.getElementById('password-container');
const passwordInput = document.getElementById('password-input');
const passwordError = document.getElementById('password-error');

const soundClick = document.getElementById('sound-click');
const bgmHbd = document.getElementById('bgm-hbd');
const bgmRomantis = document.getElementById('bgm-romantis');
const bgmHadiah = document.getElementById('bgm-hadiah');


let typewriterTimeout; 
bgmHbd.volume = 0.4;
bgmRomantis.volume = 0.8;
bgmHadiah.volume = 0.4;
if (bgmSantai) bgmSantai.volume = 0.5; 

closeModalBtn.addEventListener('click', () => { photoModal.classList.remove('modal-active'); });

// KETIKA MODAL FOTO "OUR MEMORIES" DITUTUP -> MASUK KE HALAMAN PILIHAN GAME PENUTUP
closePhotoDuaBtn.addEventListener('click', () => { 
    clearInterval(autoSlideInterval);
    photoDuaModal.style.opacity = '0'; 
    photoDuaModal.style.pointerEvents = 'none'; 
    showStoryNode('pilihanGamePenutup'); 
});

// ==========================================
// 4. LOGIKA SLIDESHOW & MUSIK
// ==========================================
function perbaruiTampilanSlide() {
    slideImg.style.opacity = "0.4";
    setTimeout(() => {
        slideImg.src = daftarFoto[indeksFotoAktif];
        slideImg.style.opacity = "1";
    }, 100);
}

function jalankanSlideshowOtomatis() {
    clearInterval(autoSlideInterval); 
    autoSlideInterval = setInterval(() => {
        indeksFotoAktif = (indeksFotoAktif + 1) % daftarFoto.length;
        perbaruiTampilanSlide();
    }, 1000);
}

prevSlideBtn.addEventListener('click', () => {
    indeksFotoAktif = (indeksFotoAktif - 1 + daftarFoto.length) % daftarFoto.length;
    perbaruiTampilanSlide();
    try { soundClick.play(); } catch(e){}
    jalankanSlideshowOtomatis();
});

nextSlideBtn.addEventListener('click', () => {
    indeksFotoAktif = (indeksFotoAktif + 1) % daftarFoto.length;
    perbaruiTampilanSlide();
    try { soundClick.play(); } catch(e){}
    jalankanSlideshowOtomatis();
});

function stopAllMusic() {
    bgmHbd.pause(); bgmHbd.currentTime = 0;
    bgmRomantis.pause(); bgmRomantis.currentTime = 0;
    bgmHadiah.pause(); bgmHadiah.currentTime = 0; // Tambahkan baris ini
    // Tambahkan baris di bawah ini:
    if (bgmSantai) { bgmSantai.pause(); bgmSantai.currentTime = 0; }
}

function updateHPDisplay() {
    const fullHearts = '❤️'.repeat(playerHP);
    const emptyHearts = '💔'.repeat(maxHP - playerHP);
    playerHpElement.innerText = fullHearts + emptyHearts;
}

function triggerScreenShake() {
    gameBox.classList.add('shake-animation');
    setTimeout(() => { gameBox.classList.remove('shake-animation'); }, 500);
}

// ==========================================
// KEMBALI KE METODE GLOBAL (ANTI-ERROR & AMAN)
// ==========================================
function launchConfettiCelebration() {
    if (typeof confetti === 'function') {
        // PERMANEN: Paksa zIndex tertinggi pada fungsi global bawaan
        const configUtama = {
            spread: 90,
            gravity: 1,
            ticks: 200,
            zIndex: 999999, // Menembus semua modal gaib
            scalar: 1.2
        };

        // TEMBAKAN TIM 1: Ledakan instan di tengah layar
        confetti({
            ...configUtama,
            particleCount: 150,
            origin: { y: 0.5 }
        });

        // TEMBAKAN TIM 2 (Jeda 100ms): Semburan silang dari sudut kiri bawah
        setTimeout(() => {
            confetti({
                ...configUtama,
                particleCount: 180,
                angle: 70,
                origin: { x: 0, y: 0.7 }
            });
        }, 400);

        // TEMBAKAN TIM 3 (Jeda 200ms): Semburan silang dari sudut kanan bawah
        setTimeout(() => {
            confetti({
                ...configUtama,
                particleCount: 120,
                angle: 90,
                origin: { x: 0.5, y: 0.7 }
            });
        }, 900);

        // TEMBAKAN TIM 4 (Jeda 100ms): Semburan silang dari sudut kiri bawah
        setTimeout(() => {
            confetti({
                ...configUtama,
                particleCount: 130,
                angle: 70,
                origin: { x: 0, y: 0.7 }
            });
        }, 1300);

        // TEMBAKAN TIM 5 (Jeda 200ms): Semburan silang dari sudut kanan bawah
        setTimeout(() => {
            confetti({
                ...configUtama,
                particleCount: 110,
                angle: 110,
                origin: { x: 1, y: 0.7 }
            });
        }, 1900);
// TEMBAKAN TIM 6 (Jeda 100ms): Semburan silang dari sudut kiri bawah
        setTimeout(() => {
            confetti({
                ...configUtama,
                particleCount: 180,
                angle: 70,
                origin: { x: 0, y: 0.7 }
            });
        }, 4400);

        // TEMBAKAN TIM 7 (Jeda 200ms): Semburan silang dari sudut kanan bawah
        setTimeout(() => {
            confetti({
                ...configUtama,
                particleCount: 180,
                angle: 90,
                origin: { x: 0.5, y: 0.7 }
            });
        }, 7500);

        // TEMBAKAN TIM 8 (Jeda 100ms): Semburan silang dari sudut kiri bawah
        setTimeout(() => {
            confetti({
                ...configUtama,
                particleCount: 180,
                angle: 70,
                origin: { x: 0, y: 0.7 }
            });
        },7900);

        // TEMBAKAN TIM 9 (Jeda 200ms): Semburan silang dari sudut kanan bawah
        setTimeout(() => {
            confetti({
                ...configUtama,
                particleCount: 180,
                angle: 110,
                origin: { x: 1, y: 0.7 }
            });
        }, 8900);

// TEMBAKAN TIM 10 (Jeda 100ms): Semburan silang dari sudut kiri bawah
        setTimeout(() => {
            confetti({
                ...configUtama,
                particleCount: 180,
                angle: 70,
                origin: { x: 0, y: 0.7 }
            });
        }, 9400);

        // TEMBAKAN TIM 3 (Jeda 200ms): Semburan silang dari sudut kanan bawah
        setTimeout(() => {
            confetti({
                ...configUtama,
                particleCount: 120,
                angle: 110,
                origin: { x: 1, y: 0.7 }
            });
        }, 11900);

        // TEMBAKAN TIM 4 (Jeda 100ms): Semburan silang dari sudut kiri bawah
        setTimeout(() => {
            confetti({
                ...configUtama,
                particleCount: 180,
                angle: 60,
                origin: { x: 0, y: 0.7 }
            });
        }, 12300);

        // TEMBAKAN TIM 5 (Jeda 200ms): Semburan silang dari sudut kanan bawah
        setTimeout(() => {
            confetti({
                ...configUtama,
                particleCount: 180,
                angle: 90,
                origin: { x: 0.5, y: 0.7 }
            });
        }, 13900);
// TEMBAKAN TIM 6 (Jeda 100ms): Semburan silang dari sudut kiri bawah
        setTimeout(() => {
            confetti({
                ...configUtama,
                particleCount: 180,
                angle: 60,
                origin: { x: 0, y: 0.7 }
            });
        }, 14500);

        // TEMBAKAN TIM 7 (Jeda 200ms): Semburan silang dari sudut kanan bawah
        setTimeout(() => {
            confetti({
                ...configUtama,
                particleCount: 180,
                angle: 100,
                origin: { x: 1, y: 0.7 }
            });
        }, 15900);

        // TEMBAKAN TIM 8 (Jeda 100ms): Semburan silang dari sudut kiri bawah
        setTimeout(() => {
            confetti({
                ...configUtama,
                particleCount: 180,
                angle: 70,
                origin: { x: 0, y: 0.7 }
            });
        },17200);

        // TEMBAKAN TIM 9 (Jeda 200ms): Semburan silang dari sudut kanan bawah
        setTimeout(() => {
            confetti({
                ...configUtama,
                particleCount: 180,
                angle: 120,
                origin: { x: 1, y: 0.7 }
            });
        }, 18900);
        // TEMBAKAN TIM 10 (Jeda 400ms): Pesta gema penutup yang super menyebar
        setTimeout(() => {
            confetti({
                ...configUtama,
                particleCount: 220,
                angle: 90,
                spread: 140,
                origin: { x: 0.5, y: 0.4 }
            });
        }, 22000);
    }
}
// ==========================================
// 5. INTI LOGIKA ALUR CERITA (PERBAIKAN TIMING CONFETTI)
// ==========================================
function showStoryNode(nodeKey) {
    
    if (nodeKey === 'aksiPutarMusik') {
        stopAllMusic();
        if (bgmSantai) bgmSantai.play().catch(e => {});
        showStoryNode('ruangSantaiMusikOn'); // Alihkan visual ke tombol Matikan Musik
        return; // Menghentikan sisa proses ke bawah
    }
    
    if (nodeKey === 'aksiStopMusik') {
        if (bgmSantai) { bgmSantai.pause(); bgmSantai.currentTime = 0; }
        showStoryNode('ruangSantai'); // Kembalikan visual ke tombol Nyalakan Musik
        return; // Menghentikan sisa proses ke bawah
    }
    
    if (nodeKey === 'pilihanLorong') {
        stopAllMusic(); // Memastikan musik mati otomatis jika pemain kabur ke lorong
    }
    // ------------------------------------------------
    if (nodeKey === 'showFotoBerdua') {
        indeksFotoAktif = 0; 
        perbaruiTampilanSlide();
        photoDuaModal.style.opacity = '1';
        photoDuaModal.style.pointerEvents = 'auto';
        
        // Beri jeda sedikit agar efek konfeti saat buka Our Memories lancar
        setTimeout(() => { launchConfettiCelebration(); }, 300);
        
        jalankanSlideshowOtomatis(); 
        return;
    }

    const node = storyNodes[nodeKey];
    clearTimeout(typewriterTimeout);
    
    storyTextElement.innerHTML = "";
    choicesContainer.innerHTML = '';
    passwordContainer.classList.add('hidden');
    passwordError.classList.add('hidden');

    if (node.takeDamage) {
        playerHP--;
        updateHPDisplay();
        triggerScreenShake();
        if (playerHP <= 0) {
            showStoryNode('gameOver');
            return;
        }
    }

    if (node.bgClass) {
        bgScreen.className = `text-slate-100 min-h-screen font-sans flex flex-col justify-between select-none transition-all duration-700 ease-in-out ${node.bgClass}`;
    }

    if (node.illustration) { storyImageElement.innerHTML = node.illustration; } 
    else { storyImageElement.innerHTML = "🎮"; }

    if (node.item) { currentItem = node.item; playerItemElement.innerText = currentItem; }

        if (nodeKey === 'endingSukses') {
        stopAllMusic(); bgmHbd.play().catch(e => {});
    } else if (nodeKey === 'halamanSurat') {
        stopAllMusic(); bgmRomantis.play().catch(e => {});
    } else if (nodeKey.startsWith('hadiahKotak')) { // TAMBAHKAN BLOK INI
        stopAllMusic(); 
        bgmHadiah.play().catch(e => {});
    } else if (nodeKey === 'welcome' || (nodeKey === 'start' && currentItem === "Tangan Kosong")) {
        stopAllMusic();
    }


    let i = 0;
    function typeWriter() {
        if (i < node.text.length) {
            let currentChar = node.text.charAt(i);
            if (currentChar === '\n') { storyTextElement.innerHTML += '<br>'; } 
            else { storyTextElement.innerHTML += currentChar; }
            
            if (nodeKey !== 'welcome' && i % 2 === 0 && currentChar !== ' ' && currentChar !== '\n') {
                soundClick.currentTime = 0; soundClick.play().catch(e => {});
            }
            i++; typewriterTimeout = setTimeout(typeWriter, 30); 
        } else {
            if (node.isPasswordNode) {
                passwordContainer.classList.remove('hidden');
                passwordInput.value = ""; 
                passwordInput.placeholder = nodeKey === 'tekaTekiGerbang' ? "Contoh: 15041994" : "Ketik jawaban di sini...";
                
                const submitBtn = document.createElement('button');
                submitBtn.innerText = "Konfirmasi Jawaban 🔑";
                submitBtn.className = "w-full bg-gradient-to-r from-pink-600 to-purple-600 text-center px-4 py-3 rounded-lg border border-pink-400 transition-all duration-200 text-sm font-bold transform active:scale-95 text-white cursor-pointer btn-shimmer shadow-lg hover:brightness-110";
                
                submitBtn.addEventListener('click', () => {
                    let jawabanUser = passwordInput.value.trim().toLowerCase();
                    if (jawabanUser === node.correctPassword) {
                        try { soundClick.play(); } catch(e){}
                        showStoryNode(node.passwordCorrectNode);
                    } else {
                        playerHP--; updateHPDisplay(); triggerScreenShake();
                        if (playerHP <= 0) { showStoryNode('gameOver'); } 
                        else { passwordError.classList.remove('hidden'); }
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
                showChoices(node, nodeKey);
            }
        }
    }
    typeWriter();

    // PERBAIKAN DI SINI: Membuka kado/modal foto disusul ledakan konfeti dengan jeda waktu aman
        if (nodeKey === 'endingSukses') {
        setTimeout(() => { 
            // 1. Munculkan modal utama
            photoModal.classList.add('modal-active'); 
            
            // 2. Cari elemen gambar di dalam modal tersebut
            const targetImg = photoModal.querySelector('img');
            if (targetImg) {
                // Pasang gaya dasar transisi
                targetImg.style.transition = "all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
                targetImg.style.opacity = "0";
                targetImg.style.transform = "scale(0.5) translateY(30px)"; // Mengecil dan agak ke bawah
                
                // Memicu animasi membal naik (Pop-Up Bounce) setelah jeda sesaat
                setTimeout(() => {
                    targetImg.style.opacity = "1";
                    targetImg.style.transform = "scale(1) translateY(0)";
                }, 50);
            }

            // 3. Ledakkan konfeti meriah di atasnya
            setTimeout(() => {
                launchConfettiCelebration(); 
            }, 350);
        }, 600);
    }

    if (nodeKey.startsWith('hadiahKotak')) {
        setTimeout(() => { launchConfettiCelebration(); }, 200);
    }
}
// ==========================================
// 6. LOGIKA TOMBOL & INTEGRASI WHATSAPP
// ==========================================
function showChoices(node, nodeKey) {
    node.choices.forEach(choice => {
        if (choice.requiredItem && currentItem !== choice.requiredItem) return;

        const button = document.createElement('button');
        button.innerText = choice.text;
        
        if (choice.type === 'primary') {
            button.className = "w-full bg-gradient-to-r from-pink-600 to-rose-600 text-center px-4 py-3 rounded-xl border border-pink-400/50 transition-all duration-200 text-sm font-bold transform hover:scale-[1.01] active:scale-95 text-white cursor-pointer shadow-md hover:brightness-110 btn-shimmer";
        } else if (choice.type === 'danger') {
            button.className = "w-full bg-gradient-to-r from-red-700 to-rose-900 text-center px-4 py-3 rounded-xl border border-red-500/40 transition-all duration-200 text-sm font-medium transform active:scale-95 text-red-100 cursor-pointer shadow-md hover:from-red-600 hover:to-rose-800";
        } else if (choice.type === 'cheat') {
            button.className = "w-full bg-gradient-to-r from-amber-500 to-orange-600 text-center px-4 py-3 rounded-xl border border-amber-400/40 transition-all duration-200 text-sm font-bold transform hover:scale-[1.01] active:scale-95 text-white cursor-pointer shadow-md hover:brightness-110 btn-shimmer";
        } else if (choice.type === 'whatsappSelesai') {
            button.className = "w-full bg-gradient-to-r from-emerald-500 to-green-600 text-center px-4 py-3 rounded-xl border border-emerald-400/40 transition-all duration-200 text-sm font-bold transform hover:scale-[1.01] active:scale-95 text-white cursor-pointer shadow-lg hover:brightness-110 btn-shimmer uppercase tracking-wider";
        } else {
            button.className = "w-full bg-slate-800/90 hover:bg-slate-700/90 text-center px-4 py-3 rounded-xl border border-slate-700 transition-all duration-200 text-sm font-medium transform hover:border-pink-500/50 active:scale-95 text-slate-200 cursor-pointer shadow-sm";
        }
        
        button.addEventListener('click', () => {
            const nomorWA = "6287783232328"; 

            if (nodeKey === 'gameOver' && choice.type === 'cheat') {
                const teksPesan = "Hayy, aku kalah menebak kode nih... Minta  code rahasia buat pulihkan nyawa dong! 🥺👉👈";
                window.open(`https://wa.me/${nomorWA}?text=${encodeURIComponent(teksPesan)}`, '_blank');
                return;
            }
            
            if (nodeKey === 'theEndNode' && choice.type === 'whatsappSelesai') {
                const teksSelesai = "Terima kasih telah menyelesaikan petualangan. Tulis sesuatu disini..📑✍️";
                window.open(`https://wa.me/${nomorWA}?text=${encodeURIComponent(teksSelesai)}`, '_blank');
                return;
            }
            
            if (choice.resetInventory) {
                currentItem = "Tangan Kosong"; playerItemElement.innerText = currentItem;
                photoModal.classList.remove('modal-active');
            }
            if (choice.fullHeal) { playerHP = maxHP; updateHPDisplay(); }
            showStoryNode(choice.nextNode);
        });
        choicesContainer.appendChild(button);
    });
}

// Menjalankan Game Pertama Kali
showStoryNode('welcome');
updateHPDisplay();