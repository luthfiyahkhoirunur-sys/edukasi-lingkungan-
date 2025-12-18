
const PASSWORD = "sehat123"; // ganti password sesukamu

function login() {
    const input = document.getElementById("password").value;

    if (input === PASSWORD) {
        localStorage.setItem("akses", "true");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("pesan").innerText = "❌ Password salah!";
    }
}

function logout() {
    localStorage.removeItem("akses");
    window.location.href = "index.html";
}

// Proteksi halaman dashboard
if (window.location.pathname.includes("dashboard.html")) {
    if (localStorage.getItem("akses") !== "true") {
        window.location.href = "index.html";
    }
}
