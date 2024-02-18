const selectedSeat = []

const seats = document.querySelectorAll('.seat')

for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];
    console.log(seat);
    seat.addEventListener('click', function () {
        console.log('valo seat hobe dada');

        //? Get seat number
        const seatNumber = seat.innerHTML


        if (seat.classList.contains('bg-[#1DD100]')){
            seat.classList.remove('bg-[#1DD100]')
        } else {
            seat.classList.add('bg-[#1DD100]')
            selectedSeat.push(seatNumber)
        }

        console.log(selectedSeat);
    })
}
