alert(`Selamat datang di game tebak angka
kamu diminta untuk menebak angka 1-3
dan kamu akan bermain dalam 5 ronde.
player yang berhasil mengumpulkan tebakan terbanyak akan menang
SELAMAT BERMAIN!!!`)

let game = () => {
    let score_p1 = 0
    let score_p2 = 0

    const ronde = 7;

    for(let i = 2; i < ronde; i++) {
        let nilai = Math.floor(Math.random() * 3) + 1
        let start_ronde = () => {
            let player1 = prompt("Player 1: masukan angka")
            let player2 = prompt("Player 2: masukan angka")
        
            if ((player1 >= 1 && player2 >= 1) && (player1 <= 3 && player2 <= 3)) {
                if (player1 == player2) {
                    alert("tebakan tidak boleh sama")
                    confirm("Ulangi?")
                    start_ronde()
                }else if (player1 != nilai && player2 != nilai) {
                    alert("Tidak ada yang benar, hasil SERI")
                    alert(`Nilai yang dicari ${nilai}
                    --------------------------
                    -Player 1:${score_p1}
                    -player 2:${score_p2}`)
                }else if (player1 == nilai) {
                    alert("Player 1 Win")
                    alert(`Nilai yang dicari ${nilai}
                    --------------------------
                    -Player 1:${++score_p1}
                    -player 2:${score_p2}`)
                }else if (player2 == nilai) {
                    alert("Player 2 Win")
                    alert(`Nilai yang dicari ${nilai}
                    --------------------------
                    -Player 1:${score_p1}
                    -player 2:${++score_p2}`)
                }
            }else {
                alert("tebakan harus berupa angka 1 sampai 3")
                confirm("Ulangi?")
                start_ronde()
            }
        }
        start_ronde()
        if (i == 6) {
            if (score_p1 > score_p2) {
                alert("Good Jobs Player 1")
            }else if (score_p2 > score_p1) {
                alert("Good Jobs Player 2")
            }else {
                alert("Good Jobs Both of You")
            }
        }else {
            alert(`Ronde ${i}?`)
        }
    }
}

game()