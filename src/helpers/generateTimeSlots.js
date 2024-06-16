export const generateTimeSlots = (startTime, duration) => {
  const slots = [];
  const [startHour, startMinute] = startTime.split(':').map(Number);
  const durationMinutes = duration.includes('Hr')
    ? parseInt(duration) * 60
    : parseInt(duration);

  let currentHour = startHour;
  let currentMinute = startMinute;
  let slotCount = 0; // Counter to limit slots to a maximum of 10

  while (currentHour < 18 && slotCount < 10) { // assuming the end time is 6:00 PM
    const period = currentHour >= 12 ? 'PM' : 'AM';
    const displayHour = currentHour % 12 === 0 ? 12 : currentHour % 12;
    const timeLabel = `${displayHour}:${currentMinute.toString().padStart(2, '0')} ${period}`;
    slots.push(timeLabel);

    currentMinute += durationMinutes;
    if (currentMinute >= 60) {
      currentHour += Math.floor(currentMinute / 60);
      currentMinute %= 60;
    }

    slotCount += 1; // Increment the counter
  }

  return slots;
};
