var logged = 0;
var raccolta = [];

export const setLogged = (value) => { logged = value;}
export const getLogged = () => {return logged;}

export const addVideo = (value) => { raccolta.push(value); }
export const getRaccolta = () => {return raccolta;}


   
