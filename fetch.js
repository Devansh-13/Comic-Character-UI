
export async function fetchApi(){
    const pr=await fetch("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=72da67d62f45f9ac54afe918dbea3531&hash=d6e4c30b438da847381aea1539e005dd");
    const data=await pr.json();
    return data; 
}

export async function fetchChar(charName){
    const pr=await fetch(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${charName}&ts=1&apikey=72da67d62f45f9ac54afe918dbea3531&hash=d6e4c30b438da847381aea1539e005dd`);
    const data=await pr.json();
    return data; 
}