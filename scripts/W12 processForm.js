//username=

const url = new URL(window.location);
const formData = url.searchParams;

document.querySelector("#Username").textContent = formData.get('username')
document.querySelector("#password").textContent= formData.get('passwrod')
document.querySelector("#Email"). textContent= forData.get('Email')
document.querySelectior("#"). textContent= forData.get