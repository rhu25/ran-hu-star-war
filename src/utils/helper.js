
export const randomPick = (list) => list[Math.floor(Math.random() * list.length)];

export const fetchData = async (url) => {
    let result = await fetch(url);
   
    if (result.status == 200){
        return result.json();
    }

    throw new Error(result.status);
}

export const analysisAttributes = (data) => {
    return Object.keys(data).reduce((acc, attr) => {
        if(Array.isArray(data[attr])){
            acc.list.push(attr)
        } else {
            acc.single.push(attr)
        }
        return acc;
    }, {
        list: [],
        single: [],
        values: data
    })
}

