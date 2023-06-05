import { default as dayjs } from 'dayjs';

export const formatData = (data:Date, format:string) => dayjs(data).format(format);
