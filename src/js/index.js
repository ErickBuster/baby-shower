const gifs = [
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3p6Ym5tbHUzMTJ5Z2VvMHQ4aG5xOHQ4cmx3MzdhODUzdnF1b2x6cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bNcTXg4UgeydYWoBC9/giphy.gif",
    "https://media.giphy.com/media/1vxFHIzYxXpD4UMYT8/giphy.gif",
    "https://media.giphy.com/media/Lmx6cv48T7i2gOdMar/giphy.gif",
    "https://media.giphy.com/media/g5J6pilmOCoSL1nRRk/giphy.gif",
]
const endgifs = [
    "https://media.giphy.com/media/g5J6pilmOCoSL1nRRk/giphy.gif",
    "https://media.giphy.com/media/yq31Vhu1uwnsdKLVxM/giphy.gif"
]

document.getElementById("elefantito").src = gifs[Math.floor(Math.random() * gifs.length)]

const DATE_TARGET = new Date('04/13/2024 14:00:00')
var MILISECONDS = 1000
const MINUTE = MILISECONDS * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24
var check = true

function change_date_target(day, hour, minute, second) {
    document.getElementById("day").innerText = day
    document.getElementById("hour").innerText = hour
    document.getElementById("minute").innerText = minute
    document.getElementById("second").innerText = second
}

function msg_date_target() {
    if (check) {
        const gif = endgifs[Math.floor(Math.random() * endgifs.length)]
        Swal.fire({
            title: "¡Ya estamos celebrando el baby shower, corre pronto!",
            width: 550,
            padding: "3em",
            color: "#000",
            background: `#fff  url(${gif}) no-repeat fixed center`,
            showConfirmButton: false,
            html: "<br><br><br><br><br><br><br><br>",
            timer: 20000,
            timerProgressBar: true,
            backdrop: "rgba(198, 219, 233, 0.5)"
        });
        document.getElementById("elefantito").src = gif
    }
}
function regresive_date_target() {

    const NOW = new Date
    const REGRESIVE = DATE_TARGET - NOW
    const regresive_days = Math.floor(REGRESIVE / DAY)

    if (regresive_days < 0) {
        msg_date_target()
        check = false
        return
    }

    const regresive_hours = Math.floor((REGRESIVE % DAY) / HOUR)
    const regresive_minutes = Math.floor((REGRESIVE % HOUR) / MINUTE)
    const regresive_seconds = Math.floor((REGRESIVE % MINUTE) / MILISECONDS)
    change_date_target(regresive_days, regresive_hours, regresive_minutes, regresive_seconds)
}

setInterval(regresive_date_target, MILISECONDS)