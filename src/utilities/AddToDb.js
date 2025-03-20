const getStoredItems = () => {
    const storedList = localStorage.getItem('red-list')

    if (storedList) {
        const parsedStoredList = JSON.parse(storedList)
        return parsedStoredList;
    }
    else {
        return []
    }
}

const saveToLs = (id) => {
    const previousCart = getStoredItems()
    const stringId = String(id)
    if (previousCart.includes(stringId)) {
        return
    }
    else {
        previousCart.push(stringId)
        const previousCartJson = JSON.stringify(previousCart)
        localStorage.setItem('red-list', previousCartJson)
    }
}



const getWishListItem = () => {
    const wishListCart = localStorage.getItem('wish-list') // at first get the the cart or something where to save
    if (wishListCart) {
        return JSON.parse(wishListCart) // if found,it will be a json string file,so converts the thins to normal js array because we have to push inside this
    }
    else {
        return [] // na pawa gele just normal akta array return korte hobe, jeno next function kichu na kichu atleast pay jar moddhe se new item push korbe
    }
}

const setWishToLs = (id) => {
    const stringId = String(id) // here, we are converting the id we got from the button into a string
    const previousWish = getWishListItem() // getting the previous or empty array from localstorage

    if (!previousWish.includes(stringId)) { //we are checking if the new id number exists or not, 
        previousWish.push(stringId) //if not then we adding the new id to the list
        const convertWishToJson = JSON.stringify(previousWish) //converting the array to json string file, so that we can save the full array to LS
        localStorage.setItem('wish-list', convertWishToJson) //setting the array to LS
    }
    else {
        alert('item already added')
    }
}




export { saveToLs, setWishToLs, getWishListItem }