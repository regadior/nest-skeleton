/* eslint-disable security/detect-object-injection */
export const getDaysPassed = (dayFrom: Date, dayTo: Date): number => {
  return (dayTo.getTime() - dayFrom.getTime()) / (1000 * 3600 * 24);
};

export const generateDaysArray = (
  dayFrom: Date,
  dayTo: Date,
): DateElement[] => {
  const daysPassed = getDaysPassed(dayFrom, dayTo);
  const daysArray: DateElement[] = [];
  for (let i = 0; i < daysPassed; i++) {
    const date = new Date(dayFrom.toISOString());
    date.setDate(date.getDate() + i);
    //remove weekends
    if (date.getDay() !== 0 && date.getDay() !== 6) {
      daysArray.push({ date: date.toLocaleDateString() });
    }
  }
  return daysArray;
};

export interface DateElement {
  date: string;
}

export const daysOfTheWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const getDayOfTheWeek = (day: number): string => {
  return daysOfTheWeek[day];
};

export const sumDaysToDate = (date: Date, days: number): Date => {
  const newDate = new Date(date.toISOString());
  newDate.setDate(date.getDate() + days);
  return newDate;
};
