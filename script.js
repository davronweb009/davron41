let box = prompt("Ismingizni kiriting:");
let user = prompt("Bironta harfni kiriting:");
if (box.toLowerCase().includes(user.toLowerCase())) {
  alert(`${box} ismida ${user} harfi bor.`);
} else {
  alert(`${box} ismida ${user} harfi yo'q.`);
}