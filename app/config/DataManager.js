// Data manager for user, memories and categories of memories. 
// All data can be accessed via methods from this class.

export default class DataManager {
    static myInstance = null;
    userID = "";
    userJoinedDate="";
    userImagePath="";

    memories = [
        {
            id: 0,
            image: require('../assets/blue-mars.jpeg'),
            title: "Blue Mars",
            desc: "Greetings from Gale Crater! This was on Mars and I was very excited at the time!",
            date: new Date("2020-03-25"),
        },
        {
            id: 1,
            image: require('../assets/red-spot.jpeg'),
            title: "Red Spot",
            desc: "The Red Spot of Jupiter is stunning. I wish we could learn more about this object. Did you know 10 Earths can fit inside of it?",
            date: new Date("2021-04-15"),
        },
        {
            id: 2,
            image: require('../assets/orion-stars.jpg'),
            title: "Orion Nebula Stars",
            desc: "The stars of Orion Nebula are young and bright. This is a stellar nursery! A star much like our own could be there. Maybe there is life, too?",
            date: new Date("202-01-03"),
        }
    ]

    categories = [
        {
            id: 0,
            title: "Planets",
            memoryIDs: [0, 1],
            image: 0,
        },
        {
            id: 1,
            title: "Nebulae",
            memoryIDs: [2],
            image: 0,
        }
    ]

    static getInstance() {
        if (DataManager.myInstance == null) {
            DataManager.myInstance = new DataManager();
        }
        return this.myInstance;
    }

    // get list of categories with random thumbnail from list
    // TODO make edge case for when 
    getMemory(id) {
        for (var key in this.memories) {
            if (this.memories.hasOwnProperty(key)) {
                if (id === this.memories[key]['id']) {
                    return this.memories[key];
                }
            }
        }

        return this.categories
    }

    // TODO add edge case for when categories empty!
    // return list of categories with random thumbnail from list
    getCategoryList() {
        this.getMemory()
        for (var key in this.categories) { // loop to add random image source from list of 
            if (this.categories.hasOwnProperty(key)) {
                let categoryMemories = this.categories[key]['memoryIDs'];
                let randomMemoryID = categoryMemories[Math.floor(Math.random() * categoryMemories.length)]
                this.categories[key]['image'] = this.getMemory(randomMemoryID)['image'];
            }
        }
        return this.categories
    }

    // TODO add edge case for when categories empty!
    // return list of categories with random thumbnail from list
    getRandomMemoryList() {
        console.log("---------\n")
        let buffer = 8;
        let memoryClone = JSON.parse(JSON.stringify(this.memories));
        let keyList = [];
        let randomList = [];

        // create list of keys for accessing later
        for (var key in memoryClone) { // loop to add random image source from list of 
            if (memoryClone.hasOwnProperty(key)) {
                keyList.push(memoryClone[key]);
            }
        }
        console.log("keyList: " + keyList)

        // TODO this isn't working right now, maybe make a seperate js file and just test
        // working with objects to make it all work correctly

        while (buffer > 0 && keyList.length > 0) {
            let target = Math.floor(Math.random() * keyList.length)
            let randomKey = keyList[target]
            keyList.splice(target,1)
            console.log("Taken out: " + randomKey + ", remaining length " + keyList.length)
            if (this.memories.hasOwnProperty(key)) {
                console.log("Target memory: " + this.memories[randomKey])
            }
            buffer --;
        }
        return randomList
    }

}