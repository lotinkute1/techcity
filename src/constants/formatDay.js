export const formatDay = date => {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    let hour = '' + d.getHours();
    let minute = '' + d.getMinutes();
    let second = '' + d.getSeconds();
  
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    if(hour.length < 2) hour = '0' + hour;
    if(minute.length < 2) minute = '0' + minute;
    if(second.length < 2) second = '0' + second;
  
    // const yyyymmdd = `${year}${month}${day}`;
    // const hhmmss = `${hour}${minute}${second}`;
    const ddmmyyyy  =`${day}/${month}/${year}`;
  
    return ddmmyyyy;
  };