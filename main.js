function nextSat(cur){
    while (cur.getDay() != 6){
        cur.setDate(cur.getDate() + 1);
    }
    cur.setHours(19);
    cur.setMinutes(30);
    return cur;
}

function formatDate(date){
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

function formatDateTime(date){
    var sign = (date.getTimezoneOffset() <= 0 ? '+' : '');
    return `${formatDate(date)} ${date.getHours()}:${date.getMinutes()}:00 UTC${sign}${-date.getTimezoneOffset() / 60}`;
}

var now = new Date();
now.setSeconds(0);
now.setMilliseconds(0);
var next = nextSat(now);
if (now > next)
    next.setDate(next.getDate() + 7);


document.getElementById('c1').innerHTML = `${formatDate(next)}<br>(Thứ Bảy)`
document.getElementById('c2').innerHTML = `${formatDateTime(next)}<br>(${Math.floor(next.getTime() / 1000)})`;
next.setHours(next.getHours() + 3);
document.getElementById('c3').innerHTML = `${formatDateTime(next)}<br>(${Math.floor(next.getTime() / 1000)})`;
next.setHours(next.getHours() - 3);

next.setDate(next.getDate() + 7);
document.getElementById('c4').innerHTML = `${formatDate(next)}<br>(Thứ Bảy)`
document.getElementById('c5').innerHTML = `${formatDateTime(next)}<br>(${Math.floor(next.getTime() / 1000)})`;
next.setHours(next.getHours() + 3);
document.getElementById('c6').innerHTML = `${formatDateTime(next)}<br>(${Math.floor(next.getTime() / 1000)})`;
