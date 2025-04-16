const handlePromise =  async () => {
    fetchAPiCall().then((result)=> {
        console.log(result);
    })
    console.log("Hello");
}

const fetchAPiCall = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(1)
        },5000)
    }) 
}

handlePromise(); 