export interface ShowTellQuestion {
  code: string;
  type: "Show" | "Tell";
  question: string;
  answer: string;
}

export interface ShowTellCombination {
  number: number;
  questions: ShowTellQuestion[];
}

export const showTellCombinations: ShowTellCombination[] = [
  {
    number: 1,
    questions: [
      { code: "B08", type: "Show", question: "Show me how you would check that the direction indicators are working.", answer: "Activate the indicators and walk around the vehicle to check all are functioning correctly." },
      { code: "B10", type: "Tell", question: "Tell me how you would check that the brakes are working before starting a journey.", answer: "Brakes should not feel spongy or slack. Test them as you set off \u2014 the vehicle should not pull to one side." },
    ],
  },
  {
    number: 2,
    questions: [
      { code: "B05", type: "Show", question: "Show me where the windscreen washer reservoir is and tell me how you would check the level.", answer: "Locate the reservoir under the bonnet. Check the fluid level against the minimum/maximum markers." },
      { code: "B09", type: "Show", question: "Show me how you would check that the brake lights are working.", answer: "Use a reflection in a window or wall, or ask someone to stand behind and confirm they illuminate when you press the pedal." },
    ],
  },
  {
    number: 3,
    questions: [
      { code: "B02", type: "Show", question: "Show me how you would check the power steering is working.", answer: "Apply gentle pressure to the steering wheel as you start the engine. You should feel the assistance kick in, or turn the wheel shortly after moving off." },
      { code: "B12", type: "Tell", question: "Tell me where you would find the information for the recommended tyre pressures and how you would check them.", answer: "The manufacturer\u2019s guide, inside the fuel filler cap, or door pillar. Use a reliable pressure gauge and check when tyres are cold." },
    ],
  },
  {
    number: 4,
    questions: [
      { code: "B04", type: "Show", question: "Show me how you would check the parking brake (handbrake) for excessive wear.", answer: "Apply the parking brake. It should secure the vehicle and not travel to the end of its working travel." },
      { code: "B05", type: "Show", question: "Show me where the windscreen washer reservoir is and tell me how you would check the level.", answer: "Locate the reservoir under the bonnet. Check the fluid level against the minimum/maximum markers." },
    ],
  },
  {
    number: 5,
    questions: [
      { code: "B01", type: "Show", question: "Show me how you would check the engine oil level.", answer: "Open the bonnet, locate the dipstick, pull it out and wipe it clean, reinsert and pull out again. The level should be between the minimum and maximum markers." },
      { code: "B12", type: "Tell", question: "Tell me where you would find the information for the recommended tyre pressures and how you would check them.", answer: "The manufacturer\u2019s guide, inside the fuel filler cap, or door pillar. Use a reliable pressure gauge and check when tyres are cold." },
    ],
  },
  {
    number: 6,
    questions: [
      { code: "B03", type: "Show", question: "Show me how you would check the engine coolant level.", answer: "Open the bonnet, locate the coolant reservoir and check the level is between the minimum and maximum markings. Top up with the correct coolant if needed." },
      { code: "B18", type: "Tell", question: "Tell me how you would know if there was a problem with your anti-lock braking system.", answer: "A warning light on the dashboard will illuminate if there is a fault with the ABS." },
    ],
  },
  {
    number: 7,
    questions: [
      { code: "B07", type: "Show", question: "Show me where you would check the brake fluid level.", answer: "Open the bonnet, locate the brake fluid reservoir and check the level is between the minimum and maximum markings." },
      { code: "B13", type: "Tell", question: "Tell me how you would check the tyres to ensure they have sufficient tread depth and that their condition is safe.", answer: "The legal minimum tread depth is 1.6mm across the central three-quarters of the breadth and around the entire circumference. Also check for cuts, bulges or any damage." },
    ],
  },
  {
    number: 8,
    questions: [
      { code: "B06", type: "Show", question: "Show me how you would check that the horn is working.", answer: "Press the horn control. This should only be done off-road or when stationary." },
      { code: "B13", type: "Tell", question: "Tell me how you would check the tyres to ensure they have sufficient tread depth and that their condition is safe.", answer: "The legal minimum tread depth is 1.6mm across the central three-quarters of the breadth and around the entire circumference. Also check for cuts, bulges or any damage." },
    ],
  },
  {
    number: 9,
    questions: [
      { code: "B10", type: "Tell", question: "Tell me how you would check that the brakes are working before starting a journey.", answer: "Brakes should not feel spongy or slack. Test them as you set off \u2014 the vehicle should not pull to one side." },
      { code: "B14", type: "Show", question: "Show me how you would wash and clean the windscreen.", answer: "Operate the windscreen washer and wiper controls to clean the windscreen." },
    ],
  },
  {
    number: 10,
    questions: [
      { code: "B11", type: "Tell", question: "Tell me how you would check that the headlights and tail lights are working.", answer: "Turn on the ignition if necessary, switch on the lights, then walk around the vehicle to check all headlights and tail lights are functioning." },
      { code: "B15", type: "Show", question: "Show me how you would set the demister controls to clear the front and rear windscreens.", answer: "Set the fan, temperature and air direction controls appropriately, and use the rear heated windscreen switch for the back." },
    ],
  },
  {
    number: 11,
    questions: [
      { code: "B16", type: "Show", question: "Show me how you would switch on the rear fog light and explain when you would use it.", answer: "Activate the rear fog light switch. Use it when visibility is seriously reduced, generally below 100 metres." },
      { code: "B19", type: "Tell", question: "Tell me how you would know if there was a problem with your anti-lock braking system.", answer: "A warning light on the dashboard will illuminate if there is a fault with the ABS." },
    ],
  },
  {
    number: 12,
    questions: [
      { code: "B09", type: "Show", question: "Show me how you would check that the brake lights are working.", answer: "Use a reflection in a window or wall, or ask someone to stand behind and confirm they illuminate when you press the pedal." },
      { code: "B11", type: "Tell", question: "Tell me how you would check that the headlights and tail lights are working.", answer: "Turn on the ignition if necessary, switch on the lights, then walk around the vehicle to check all headlights and tail lights are functioning." },
    ],
  },
  {
    number: 13,
    questions: [
      { code: "B17", type: "Show", question: "Show me how you would switch your headlights from dipped to main beam.", answer: "Switch on the headlights, then push the stalk forward to activate main beam. A blue warning light on the dashboard confirms main beam is on." },
      { code: "B19", type: "Tell", question: "Tell me how you would know if there was a problem with your anti-lock braking system.", answer: "A warning light on the dashboard will illuminate if there is a fault with the ABS." },
    ],
  },
];
