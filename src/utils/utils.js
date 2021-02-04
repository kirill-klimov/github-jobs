export const howManyDaysAgo = (created_at) => {
  const diff = new Date() - new Date(created_at);
  const daysAgo = Math.floor(diff / 1000 / 60 / 60 / 24);
  let daysAgoString = '';
  if (daysAgo === 0) daysAgoString = 'Today';
  if (daysAgo === 1) daysAgoString = '1 day ago';
  if (daysAgo > 1) daysAgoString = daysAgo + ' days ago';

  return daysAgoString;
}