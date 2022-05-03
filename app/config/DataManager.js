// Data manager for user, memories and categories of memories. 
// All data can be accessed via methods from this class.

export default class DataManager {
    static myInstance = null;

    memories = [ // initial sample data
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
            date: new Date("2021-01-03"),
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

    // constructor containing class fields
    constructor() {
        this.userName = "";
        this.userEmail
        this.userPassWord = "";
        this.userJoinedDate="";
        this.userImagePath="";
        this.new_id = this.categories.length;
      }

    // get singleton instance of object for all classes
    static getInstance() {
        if (DataManager.myInstance == null) {
            DataManager.myInstance = new DataManager();
        }
        return this.myInstance;
    }

    // rreturn memory if id matches
    getMemory(id) {
        for (var key in this.memories) {
            if (this.memories.hasOwnProperty(key)) {
                if (id === this.memories[key]['id']) {
                    return this.memories[key];
                }
            }
        }
        return null;
    }

    // rreturn list of categories that this memory exists within
    getMemoryCategories(id) {
        let cat = [] // list of matching categories to return
        for (var key in this.categories) { // loop to add category if it exists
            if (this.categories.hasOwnProperty(key)) {
                for (let member in this.categories[key]['memoryIDs']) { // search memory IDs
                    if (member == id) { // if match found, add category to list, end search loop
                        cat.push(this.categories[member])
                        break;
                    }
                }
            }
        }
        return cat;
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

    // return list of memories in random order, up to a maximum number defined within as
    // the buffer_limit
    getRandomMemoryList() {
        let buffer_limit = 8; // maximum number of memories to return from memories 
                                // in random order
        let randomList = []; // list of randoms to return

        if (this.memories.length != 0) {
            // loop to add new memories to list
            let buffer = 0; // buffer idx
            while (buffer <= buffer_limit && buffer < this.memories.length) {
                // loop until buffer reached or added all memories
                let idx = Math.floor(Math.random() * this.memories.length) 
                                    // random idx to pull from
                let memory = this.memories[idx]; // random memory
                let alreadyRandomised = false;
                // loop to check if randomised object already added...
                if (randomList.length != 0) { 
                    // if first iteration, skip checking if it already contains something...
                    randomList.forEach(function (arrayItem) {
                        if (arrayItem.id === memory.id) { // TODO check if equality is correct?
                            alreadyRandomised = true;
                        }
                    });
                }
                // if not in list already, add to random list and increase buffer...
                if (!alreadyRandomised) {
                    randomList.push(memory);
                    buffer ++;
                }
            }
        }
        return randomList
    }

    // return an ordered list of memories by date (later to earlier)
    getMemoryByDate() {
        let history = JSON.parse(JSON.stringify(this.memories)); // deep copy memories to order
        history.sort(function(a, b){ // sorting algorithm
            if (b.date > a.date) {
                return 1;
            } else {
                return -1;
            }
        });
        return history; // return ordered list
    }

    // return date object as a string of dd/mm/yy format.
    getDateString(id) {
        let memory = this.getMemory(id)
        return memory.date.getDate()+"/"+memory.date.getMonth()+1+"/"+memory.date.getFullYear()
    }

    // get date that user joined
    getJoinedDate() {
        let date = this.userJoinedDate
        return date.getDate()+"/"+date.getMonth()+1+"/"+date.getFullYear()
    }

    // TODO make this more complicated!
    createUser(_userName, _userEmail, _userImagePath) {
        this.userName = _userName;
        this.userEmail = _userEmail;
        this.userJoinedDate=new Date(); // get current date
        this.userImagePath=_userImagePath; // TODO add custom image
    }

    // create new memory and return id
    createMemory(_image, _title, _description) {
        this.new_id ++;
        // TODO will need to make this more complicated, what if someone removes an object?
        this.memories.push({
            id: this.new_id,
            image: _image,
            title: _title,
            desc: _description,
            date: new Date(),
        })
        return this.new_id;
    }

}