import { initJsPsych } from 'jsPsych';
import { jsPsychHtmlKeyboardResponse } from 'plugin-html-keyboard-response';

function runExperiment(){
  const jsPsych = initJsPsych();
  const timeline = [];

  const instructions = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
      <p>In this experiment, you will be shown an image of a movement.</p>
      <p>
        After the image leaves the screen, you will be shown a black screen
        with a white cross at its center. Focus your eyes on this cross and 
        attempt to perform the movement shown in the picture when the cross
        turns red.
      </p>
      <p>Press any key to begin.</p>
    `,
    post_trial_gap: 2000,
  };
  timeline.push(instructions);

  jsPsych.run(timeline);
}

runExperiment();

console.log('test')