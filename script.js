document.getElementById('ageForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const dobInput = document.getElementById('dob').value;
    if (!dobInput) return;
  
    const dob = new Date(dobInput);
    const today = new Date();
  
    let ageYears = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();
  
    // Adjust age if the current date is before the birth date
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      ageYears--;
    }
  
    document.getElementById('result').textContent = `You are ${ageYears} years old.`;
  });
  