export const getFormattedDateAndTime = (): string => {
  const now: Date = new Date();
  const hours: string = String(now.getHours()).padStart(2, '0');
  const minutes: string = String(now.getMinutes()).padStart(2, '0');
  const day: string = String(now.getDate()).padStart(2, '0');
  const month: string = String(now.getMonth() + 1).padStart(2, '0');
  const year: number = now.getFullYear();
  const formattedDateAndTime: string = `${hours}:${minutes} - ${day}/${month}/${year}`;
  return formattedDateAndTime;
};

// const formattedDateTime: string = getFormattedDateAndTime();
// console.log(formattedDateTime);
