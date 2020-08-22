import moment from 'moment';

const parseFormat = 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]';

export const dateFormat = (date, format) => (
  moment(date, parseFormat).format(format)
);
