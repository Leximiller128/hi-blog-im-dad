const now = dayjs();
let date = now.format("dddd, MMMM D, YYYY");
$("#date").text(date);
console.log(date);
