function saturdayFun(activity) {
  let funStuff;
  if (activity === undefined) {
    funStuff = "roller-skate";
  } else {
    funStuff = activity;
  }
  return `This Saturday, I want to ${funStuff}!`;
}

function mondayWork(activity) {
  let mondayThing = "go to the office";
  if (activity !== undefined) {
    mondayThing = activity;
  }
  return `This Monday, I will ${mondayThing}.`;
}

function wrapAdjective(specialChar) {
  let emphasis = "*"
  if (specialChar !== undefined) {
    emphasis = specialChar;
  } return function statement(adjective) {
    let description = "special";
    if (adjective !== undefined) {
      description = adjective;
    }
    return `You are ${specialChar}${description}${specialChar}!`
  }

}

