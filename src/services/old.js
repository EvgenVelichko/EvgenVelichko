
const birthDate = new Date('2011-09-05'); 


function calculateAge(birthDate) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

 
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}


document.addEventListener('DOMContentLoaded', () => {
    const age = calculateAge(birthDate);
    document.getElementById('age-display').textContent = ` ${age} `;
});
