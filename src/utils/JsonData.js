export const jsonData = async () => {
   const response =  await fetch('/db/db.json')
    .then(r => r.json())
    .then(json => json)
    .catch(e => console.log(e.message));
    return response.items;
}