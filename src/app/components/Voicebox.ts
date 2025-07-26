import Say from "jaxcore-say";

Say.setWorkers({
    'espeak': 'webworkers/espeak-en-worker.js',
    'sam': 'webworkers/sam-worker.js'
});

const VoiceBox = new Say({
    profile: "Sam",
    language: "en"
});

export default function VoiceBoxSays(text: string) {
    VoiceBox.say(text).then(function () {
        console.log("done");
    });
}
