export function getTimeFromCurrnt(timeStamp) {
  //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  const now = new Date(),
        ctime = new Date(timeStamp),
        now_Y = now.getFullYear(),
        now_M = now.getMonth() + 1,
        now_D = now.getDate(),
        now_h = now.getHours(),
        now_m = now.getMinutes(),
        now_s = now.getSeconds(),
        ctime_Y = ctime.getFullYear(),
        ctime_M = ctime.getMonth() + 1,
        ctime_D = ctime.getDate(),
        ctime_h = ctime.getHours(),
        ctime_m = ctime.getMinutes(),
        ctime_s = ctime.getSeconds();

  const Y = now_Y - ctime_Y,
        M = now_M - ctime_M,
        D = now_D - ctime_D,
        h = now_h - ctime_h,
        m = now_m - ctime_m,
        s = now_s - ctime_s;

  if (Y > 0) {
    return `${Y}年前`;
  } else if (M > 0) {
    return `${M}月前`;
  } else if (D > 0) {
    return `${D}天前`;
  } else if (h > 0) {
    return `${h}小时前`;
  } else if (m > 0) {
    return `${m}天前`;
  } else if (s > 0) {
    return `${s}秒前`;
  } 
}

export function getDate(timeStamp) {
  const ctime = new Date(timeStamp),
        ctime_Y = ctime.getFullYear(),
        ctime_M = ctime.getMonth() + 1,
        ctime_D = ctime.getDate();
        
  return `${ctime_Y}年${ctime_M}月${ctime_D}日`;
}
