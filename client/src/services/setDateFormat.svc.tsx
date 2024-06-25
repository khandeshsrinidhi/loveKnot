function formatDateString(date: any) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

function formatDate(dateString: any) {
  const date = new Date(dateString?.toString()?.replaceAll('/', '-'));
  if (!date) return '';

  return formatDateString(date);
}

export default formatDate;
