export const PAGE_SIZE_DEFAULT = 10;
export const PAGE_NUMBER_DEFAULT = 1;

export const ATTACHMENTS_BASE_PATH = './data';
export const CANDIDATE_RATING_ATTACHMENTS_BASE_PATH = 'candidateRating/';
export const CANDIDATE_ATTACHMENTS_BASE_PATH = 'candidate/';

export const DEFAULT_DAYS_PASSED = 6;

export const getDefaultDayTo = (): Date => {
  return new Date();
};

export const getDefaultDayFrom = (): Date => {
  const date = new Date();
  date.setDate(date.getDate() - DEFAULT_DAYS_PASSED);
  return date;
};
