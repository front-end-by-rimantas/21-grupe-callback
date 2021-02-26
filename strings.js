const first = text => text[0];
const last = text => text[text.length - 1];

const letter = (text, position) => {
    const rez = position(text);
    console.log(rez);
}


letter('Krabas', first)
letter('Krabas', last)