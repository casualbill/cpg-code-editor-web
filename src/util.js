export const formattedDateTime = (date) => {
  const year = date.getFullYear().toString().slice(2);
  const month = date.getMonth() < 9 ? `0${(date.getMonth() + 1).toString()}` : (date.getMonth() + 1).toString();
  const day = date.getDate() < 10 ? `0${date.getDate().toString()}` : date.getDate().toString();
  const hour = date.getHours() < 10 ? `0${date.getHours().toString()}` : date.getHours().toString();
  const minute = date.getMinutes() < 10 ? `0${date.getMinutes().toString()}` : date.getMinutes().toString();
  const second = date.getSeconds() < 10 ? `0${date.getSeconds().toString()}` : date.getSeconds().toString();
  return `${year}${month}${day}-${hour}${minute}${second}`;
};

export const storage = {
  getUserInfo() {
    const output = [];
    if (localStorage.userName) {
      output.userName = localStorage.userName;
    }
    if (localStorage.userAvatar) {
      output.userAvatar = localStorage.userAvatar;
    }
    if (localStorage.userID) {
      output.userID = localStorage.userID;
    }
    return output;
  },
  setUserInfo(userName, userAvatar, userID) {
    localStorage.userName = userName;
    localStorage.userAvatar = userAvatar;
    localStorage.userID = userID;
  },
};
