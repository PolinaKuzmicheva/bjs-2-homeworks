class AlarmClock {
  constructor(timerId) {
    this.alarmCollection = [];
    this.timerId = timerId;
  }

  addClock(timeAlarm, action, alarmId) {
    if (alarmId === undefined) {
      throw new Error('timerId is not defined')
    }

    if (this.alarmCollection.find(alarm => alarm.alarmId === alarmId)) {
      console.error(`Будильник с TimerId ${alarmId} уже существует`);
    } else {
      this.alarmCollection.push({ timeAlarm, action, alarmId });
    }
  }

  removeClock(alarmId) {
    let index = this.alarmCollection.filter(alarm => alarm.alarmId === alarmId);
    if (index <= 0) {
      return false;
    }
    this.alarmCollection.splice(index, 1)
    return true;
  }

  getCurrentFormattedTime() {
    let now = new Date().toLocaleTimeString().slice(0, -3);
    return now;
  }

  start() {
    const bindedCheckClock = checkClock.bind(this);
    function checkClock(clock) {
      if (this.getCurrentFormattedTime() === clock.timeAlarm) {
        clock.action();
      }
    }
    if (this.timerId === null) {
      this.timerId = setInterval((() => {
        this.alarmCollection.forEach(clock => bindedCheckClock(clock))
      }), 1)
    }
  }

  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId)
      this.timerId = null;
    }
  }

  printAlarms() {
    this.alarmCollection.forEach((alarm) => console.log(`Будильник #${alarm.alarmId} установлен на ${alarm.timeAlarm}`))
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
