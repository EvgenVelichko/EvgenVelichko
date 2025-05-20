// To set your birth date:
// 1. Go to src/components/About.jsx
// 2. Find the line with: const birthDate = '1995-01-01'
// 3. Replace '1995-01-01' with your birth date in YYYY-MM-DD format
// Example: '1990-12-31' for December 31, 1990

export const calculateAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
};