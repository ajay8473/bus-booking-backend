function generateSeats(totalSeats = 40) {
  const seats = [];

  let row = 1;
  let column = 1;

  for (let i = 1; i <= totalSeats; i++) {
    seats.push({
      seatNumber: i,
      isAvailable: true,
      row: row,
      column: column,
      seatType: "sleeper"
    });

    column++;

    if (column > 2) {
      column = 1;
      row++;
    }
  }

  return seats;
}

module.exports = generateSeats;