function handleTicketChange (ticket, isIncrease) {
    const ticketInput = document.getElementById(ticket + '-ticket-count'); 
    const ticketCount = parseFloat(ticketInput.value); 
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketNewCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketNewCount - 1;
    }
    ticketInput.value = ticketNewCount;

    const firstTicketCount = document.getElementById('first-ticket-count').value; 
    const firstTicketCountNumber = parseInt(firstTicketCount); 
    const secondTicketCount = document.getElementById('second-ticket-count').value; 
    const secondTicketCountNumber = parseInt(secondTicketCount); 
    
    const subTotal = firstTicketCountNumber * 150 + secondTicketCountNumber * 100; 
    document.getElementById('sub-total').innerText = subTotal;
    

    const tax = Math.round(subTotal * 0.1); 
    document.getElementById('tax-amount').innerText = tax;
    

    const ticketTotalPrice = subTotal + tax; 
    document.getElementById('ticket-total-price').innerText = ticketTotalPrice;
    
    document.getElementById('first-class-ticket').innerText = firstTicketCountNumber;
    document.getElementById('economy-ticket').innerText = secondTicketCountNumber;
    document.getElementById('sub-total-price').innerHTML = subTotal;
    document.getElementById('tax').innerHTML = tax;
    document.getElementById('total-price').innerHTML = ticketTotalPrice;
    
}

document.getElementById('booking-btn').addEventListener('click', function() {
    document.getElementById('ticket-counter').style.display = 'none';
    document.getElementById('booking-area').style.display = 'block';
})




