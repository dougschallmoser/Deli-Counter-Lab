var katzDeliLine = [];

// Part 1: Build a function called takeANumber
function takeANumber(katzDeliLine, name) {
  const place = katzDeliLine.push(name); // adding name to array and number line
  return (`Welcome, ${name}. You are number ${place} in line.`)
}

// Part 2: Build a function called nowServing
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return (`Currently serving ${katzDeliLine.shift()}.`);
  } else {
    return ("There is nobody waiting to be served!")
  }
}

// Part 3: Build a function called currentLine
function currentLine(katzDeliLine) {
  var newArray = [];
  var placement = []; {
  for (let i = 0; i < katzDeliLine.length; i++) {
    placement = ((i + 1) + '. ' + katzDeliLine[i]);
    newArray.push(placement); }
      if (katzDeliLine.length > 0) {
        return (`The line is currently: ${newArray.join(', ')}`) }
      else {
        return ("The line is currently empty.") }
} } 
