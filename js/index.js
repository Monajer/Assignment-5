const selectedSeat = []
const validCoupon = {
    'NEW15': 15,
    'Couple 20': 20
}

const seats = document.querySelectorAll('.seat')

for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];
    console.log(seat);
    seat.addEventListener('click', function () {


        console.log('valo seat hobe dada');

        //? Get seat number
        const seatNumber = seat.innerHTML

        if (seat.classList.contains('bg-[#1DD100]')) {
            seat.classList.remove('bg-[#1DD100]')
            selectedSeat.splice(selectedSeat.indexOf(seatNumber), 1)
        } else {
            if (selectedSeat.length >= 4) {
                alert("You can't buy more than 4 tickets")    
                return
            }
            seat.classList.add('bg-[#1DD100]')
            selectedSeat.push(seatNumber)
        }

        // ? ==============
        document.getElementById('availableSeat').innerHTML = seats.length - selectedSeat.length

        // ? =============
        document.getElementById('selectedSeats').innerHTML = selectedSeat.map(getSeat).join('')

        // ? =============
        document.getElementById('totalPrice').innerHTML = selectedSeat.length * 550

        // ? =============
        document.getElementById('grandTotal').innerHTML = selectedSeat.length * 550

        // ? =============
        document.getElementById('seatCount').innerHTML = selectedSeat.length

        // ? =============
        if (selectedSeat.length == 4) {
            document.getElementById('apply').classList.remove('btn-disabled')
        } else {
            document.getElementById('apply').classList.add('btn-disabled')
        }

        console.log(selectedSeat);
    })
}

// ? listen phone number change 
document.getElementById('phone').addEventListener('keyup', function () {
    const phone = document.getElementById('phone').value

    if (phone.length != 0 && selectedSeat.length != 0) {
        document.getElementById('nextBtn').classList.remove('btn-disabled')
    } else {
        document.getElementById('nextBtn').classList.add('btn-disabled')
    }
});


// ? apply coupon click
document.getElementById('apply').addEventListener('click', function () {
    const coupon = document.getElementById('couponField').value
    document.getElementById('couponField').value = ''

    if (validCoupon[coupon]) {
        document.getElementById('grandTotal').innerHTML = (selectedSeat.length * 550) - (selectedSeat.length * 550 * (validCoupon[coupon] / 100))
        document.getElementById('couponArea').classList.add('hidden')
        document.getElementById('discountPriceRow').classList.remove('hidden')
        document.getElementById('discountPrice').innerHTML = (selectedSeat.length * 550 * (validCoupon[coupon] / 100))
    } else {
        alert('Vai tumi beshi paknami koiro na, akhane kintu ai coupon code ta asole valid na.')
    }

})

// ? scroll button click
document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.getElementById('buyTickets');
    const content = document.querySelector('.scrollDownHere');

    scrollButton.addEventListener('click', function () {
        content.scrollIntoView({ behavior: 'smooth' });
    });
});

// ? next button click
document.getElementById('nextBtn').addEventListener('click', function () {
    document.getElementById('myAlert').classList.remove('hidden')
});

function getSeat(seatNumber) {
    return `
<div id=sitNumber${seatNumber} class="font-medium text-[rgba(3,7,18,0.50)] flex justify-between">
    <h3>${seatNumber}</h3>
    <h3>Economy</h3>
    <h3>550</h3>
</div>`
}
