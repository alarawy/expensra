
export const generateFakeData = (range, t) => {
  const days = range === "30d" ? 30 : 90;
  const data = [];

  for (let i = 1; i <= days; i++) {
    data.push({
      day: `${t('ranges.day')} ${i}`,
      spending: Math.floor(Math.random() * 500),
    });
  }

  return data;
};