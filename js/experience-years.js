function getFullYearsSince(startDate, today) {
  let years = today.getFullYear() - startDate.getFullYear();
  const monthDiff = today.getMonth() - startDate.getMonth();
  const dayDiff = today.getDate() - startDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    years -= 1;
  }

  return Math.max(years, 0);
}

function updateExperienceYears() {
  const yearCells = document.querySelectorAll('.experience-years[data-start-date]');
  const today = new Date();

  yearCells.forEach((cell) => {
    const startDateValue = cell.getAttribute('data-start-date');
    if (!startDateValue) {
      return;
    }

    const startDate = new Date(startDateValue);
    if (Number.isNaN(startDate.getTime())) {
      return;
    }

    cell.textContent = String(getFullYearsSince(startDate, today));
  });
}

updateExperienceYears();