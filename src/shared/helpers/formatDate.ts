export const formatDate: (dateIso: string) => string = (dateIso) => {
  const date = new Date(dateIso);
  const year = date.getFullYear().toString();
  let month = (date.getMonth() + 1).toString();
  let dt = date.getDate().toString();

  if (Number(dt) < 10) {
    dt = '0' + dt;
  }
  if (Number(month) < 10) {
    month = '0' + month;
  }

  return `${dt}.${month}.${year}`;
};
