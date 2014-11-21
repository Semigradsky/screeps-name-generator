name.human = function() {
  return name.human.firstnames[random(name.human.firstnames.length)] + " " +
    name.human.lastnames[random(name.human.lastnames.length)];
};
