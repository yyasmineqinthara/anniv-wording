document.getElementById("message-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const impressions = document.getElementById("impressions").value;
    const secretMessage = document.getElementById("secret-message").value;
    const wish = document.getElementById("wish").value;

    if (impressions && secretMessage && wish) {
        // Simpan data ke Local Storage
        localStorage.setItem("impressions", impressions);
        localStorage.setItem("secretMessage", secretMessage);
        localStorage.setItem("wish", wish);

        alert("Pesan Anda telah disubmit! ❤️");

        // Reset form
        document.getElementById("impressions").value = '';
        document.getElementById("secret-message").value = '';
        document.getElementById("wish").value = '';

        // Tampilkan data yang telah disubmit
        displayMessages();
    } else {
        alert("Tolong lengkapi semua kolom sebelum submit!");
    }
});

// Fungsi untuk menampilkan data dari Local Storage
function displayMessages() {
    const displaySection = document.getElementById("display-section");
    
    // Ambil data dari Local Storage
    const impressions = localStorage.getItem("impressions");
    const secretMessage = localStorage.getItem("secretMessage");
    const wish = localStorage.getItem("wish");

    if (impressions || secretMessage || wish) {
        displaySection.innerHTML = `
            <h2>Submitted Messages 💌</h2>
            <p><strong>Kesan & Pesan:</strong> ${impressions} 📝</p>
            <p><strong>Pesan Rahasia:</strong> ${secretMessage} 🔐</p>
            <p><strong>Wish for the Future:</strong> ${wish} 🌠</p>
        `;
    } else {
        displaySection.innerHTML = "<p>Belum ada pesan yang disubmit.</p>";
    }
}

// Panggil fungsi saat halaman pertama kali dimuat untuk menampilkan data yang ada
document.addEventListener("DOMContentLoaded", displayMessages);
