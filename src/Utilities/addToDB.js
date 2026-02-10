const getStoredBooks = () => {

    const storedBookSTR = localStorage.getItem('readList');
    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else {
        return [];
    }

}



const addToStoredDB =(id)=>{
    const storedBookData = getStoredBooks();

    if (storedBookData.includes(id)) {
        alert('Already added to read list');
    }
    else{
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem('readList', data);
     
    }


}


export {addToStoredDB,getStoredBooks};

