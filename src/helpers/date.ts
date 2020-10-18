export default (date: string): { __html: string } => {
  const nth = (d) => {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 0:
        return '';
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };
  const newDate = new Date(date);
  const d = newDate.getDate();
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ][newDate.getMonth()];

  return {
    __html: `${month}, ${d}<sup>${nth(d)}</sup> &nbsp ${newDate.getFullYear()}`,
  };
};
