const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"]
let insertY = ["the soup kitchen", "Disneyland", "the White House"]
let insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  if(customName.value !== '') {
    newStory = newStory.replace("Bob", customName.value);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.453592).toString() + " kg";
    const temperature =  Math.round((94 - 32)*5/9);
    newStory = newStory.replace("94", temperature);
    newStory = newStory.replace("300 pounds", weight);
  }

  newStory = newStory.replaceAll(":insertx:", randomValueFromArray(insertX))
  newStory = newStory.replaceAll(":inserty:", randomValueFromArray(insertY))
  newStory = newStory.replaceAll(":insertz:", randomValueFromArray(insertZ))

  story.textContent = newStory;
  story.style.visibility = 'visible';
}