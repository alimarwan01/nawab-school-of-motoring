import type { Metadata } from "next";
import { CTABanner } from "@/components/cta-banner";
import { QuestionCard } from "./question-card";

export const metadata: Metadata = {
  title: "Show Me / Tell Me Questions",
  description:
    "Current DVSA show me tell me questions for the UK practical driving test. 14 tell me questions and 7 show me questions.",
};

const tellMeGroups = [
  {
    category: "Brakes & Steering",
    questions: [
      { question: "Tell me how you'd check that the brakes are working before starting a journey.", answer: "Brakes should not feel spongy or slack. Test them as you set off — the vehicle should not pull to one side." },
      { question: "Tell me how you'd check the brake lights are working on this car.", answer: "Turn on the ignition, press the brake pedal and use the reflection in a window, garage door, or ask someone to check behind." },
      { question: "Tell me how you'd check the power-assisted steering is working before starting a journey.", answer: "Apply gentle pressure to the steering wheel when you start the engine. You should notice the steering become lighter — if it feels heavy, there may be a problem." },
      { question: "Tell me how you'd know if there was a problem with your anti-lock braking system.", answer: "A warning light on the dashboard will illuminate if there is a fault with the ABS." },
    ],
  },
  {
    category: "Lights & Indicators",
    questions: [
      { question: "Tell me how you'd check that the headlights and tail lights are working.", answer: "Turn on the ignition if necessary, switch on the lights, then walk around the vehicle to check all headlights and tail lights are functioning." },
      { question: "Tell me how you'd check the direction indicators are working.", answer: "Turn on the ignition, activate the indicators, and walk around the vehicle to check all are functioning correctly. Use the hazard warning switch to check them all at once." },
      { question: "Tell me how you switch your headlight from dipped to main beam and explain how you'd know the main beam is on.", answer: "Operate the stalk to switch between dipped and main beam. A blue warning light on the dashboard will illuminate when main beam is on." },
      { question: "Tell me how you'd switch on the rear fog light(s) and explain when you'd use it/them.", answer: "Operate the rear fog light switch. Use when visibility is seriously reduced, generally below 100 metres. Remember to switch them off when visibility improves." },
    ],
  },
  {
    category: "Tyres & Safety",
    questions: [
      { question: "Tell me where you'd find the information for the recommended tyre pressures for this car and how tyre pressures should be checked.", answer: "The manufacturer's guide, inside the fuel filler cap, or door pillar. Use a reliable pressure gauge and check when tyres are cold." },
      { question: "Tell me how you'd check the tyres to ensure that they have sufficient tread depth and that their general condition is safe to use on the road.", answer: "The legal minimum tread depth is 1.6mm across the central three-quarters of the breadth and around the entire circumference. Also check for cuts, bulges or any damage." },
      { question: "Tell me how you make sure your head restraint is correctly adjusted so it provides the best protection in the event of a crash.", answer: "The head restraint should be adjusted so the rigid part is at least as high as the eye or top of the ears, and as close to the back of the head as is comfortable." },
    ],
  },
  {
    category: "Under the Bonnet",
    questions: [
      { question: "Open the bonnet and tell me how you'd check that the engine has sufficient oil.", answer: "Pull out the dipstick, wipe it clean, reinsert and pull out again. The oil level should be between the minimum and maximum markers." },
      { question: "Open the bonnet and tell me how you'd check that the engine has sufficient engine coolant.", answer: "Locate the coolant reservoir and check the level is between the minimum and maximum markings. Top up with the correct coolant if needed. Do not open the cap when hot." },
      { question: "Open the bonnet and tell me how you'd check that you have a safe level of hydraulic brake fluid.", answer: "Locate the brake fluid reservoir and check the level is between the minimum and maximum markings." },
    ],
  },
];

const showMeQuestions = [
  { question: "When it's safe to do so, can you show me how you wash and clean the rear windscreen?", answer: "Operate the rear windscreen wash and wiper controls." },
  { question: "When it's safe to do so, can you show me how you wash and clean the front windscreen?", answer: "Operate the front windscreen wash and wiper controls." },
  { question: "When it's safe to do so, can you show me how you'd switch on your dipped headlights?", answer: "Operate the headlight switch to turn on dipped headlights." },
  { question: "When it's safe to do so, can you show me how you'd set the rear demister?", answer: "Operate the rear heated windscreen switch." },
  { question: "When it's safe to do so, can you show me how you'd operate the horn?", answer: "Press the horn control on the steering wheel." },
  { question: "When it's safe to do so, can you show me how you'd demist the front windscreen?", answer: "Set the fan, temperature and air direction controls appropriately. Use the windscreen demist button if available." },
  { question: "When it's safe to do so, can you show me how you'd open and close the side window?", answer: "Operate the electric window switch or manual handle to open, then close the window." },
];

export default function ShowTellPage() {
  let tellMeIndex = 0;

  return (
    <>
      <section className="bg-primary px-4 py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-6xl lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Show Me / Tell Me Questions
          </h1>
          <p className="mt-3 text-primary-foreground/70">
            These are the DVSA questions for the practical driving test, last
            updated by GOV.UK in December 2017. You&apos;ll be asked
            1 &ldquo;tell me&rdquo; question before you drive and
            1 &ldquo;show me&rdquo; question while driving. Tap each question
            to test yourself.
          </p>
          <p className="mt-4">
            <a
              href="https://www.gov.uk/government/publications/car-show-me-tell-me-vehicle-safety-questions/car-show-me-tell-me-vehicle-safety-questions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-foreground/50 underline underline-offset-4 hover:text-primary-foreground/70"
            >
              Always check GOV.UK for the latest version &rarr;
            </a>
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold">
            &ldquo;Tell me&rdquo; questions
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Asked before you start driving &middot; 14 possible questions
          </p>

          {tellMeGroups.map((group) => (
            <div key={group.category} className="mt-10">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                {group.category}
              </h3>
              <div className="mt-4 divide-y">
                {group.questions.map((q) => {
                  tellMeIndex++;
                  return (
                    <QuestionCard
                      key={tellMeIndex}
                      number={tellMeIndex}
                      question={q.question}
                      answer={q.answer}
                      variant="green"
                    />
                  );
                })}
              </div>
            </div>
          ))}

          <div className="mt-16 border-t pt-16">
            <h2 className="text-2xl font-bold">
              &ldquo;Show me&rdquo; questions
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Asked while you&apos;re driving &middot; {showMeQuestions.length} possible questions
            </p>
            <div className="mt-8 divide-y">
              {showMeQuestions.map((q, i) => (
                <QuestionCard
                  key={i}
                  number={i + 1}
                  question={q.question}
                  answer={q.answer}
                  variant="amber"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Feel Prepared for Your Test?"
        subtitle="Book a lesson and we'll go through these together in the car."
      />
    </>
  );
}
