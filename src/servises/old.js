/** @format */

function updateAge() {
    const birthDate = new Date('2011-09-05'); 
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    document.getElementById('age').textContent = age;
}

updateAge();
setInterval(updateAge, 1000 * 60 * 60 * 24); 
