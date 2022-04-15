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
        },
        {
            id: 1,
            title: "Nebulae",
            memoryIDs: [2],
        }
    ]

    static getInstance() {
        if (DataManager.myInstance == null) {
            DataManager.myInstance = new DataManager();
        }
        return this.myInstance;
    }

    // return memory whose ID matches param, if any
    getMemory(id) {
        if (DataMemories.myInstance != null) {
            for (memory in this.memories) {
                if (memory.id == id) {
                    return memory
                }
            }
        }
    }
}