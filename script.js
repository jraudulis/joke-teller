const button = document.getElementById('button');
const audioPlayer = document.getElementById('audio');


function speech(joke){
    VoiceRSS.speech({
        // Normally key would be stored in .env variable or hidden using other method but since the API is for free and solely for project demonstration purposes it's left here
        key: 'b1de389e93364a4bb652d71435d886f6', 
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

// Function to fetch random jokes
async function fetchJokes() {
    let joke = '';
    const jokesApi = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit';
    try {
        const response = await fetch(jokesApi);
        const data = await response.json();
        if (data.setup){
            joke = `${data.setup} ... ${data.delivery}`;
        } else {
            joke = data.joke;
        }
        speech(joke);
    } catch(error) {
        console.log('Whoopsers', error);
    }
}

button.addEventListener('click', fetchJokes);

