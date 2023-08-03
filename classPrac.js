class Room{
    contructor(name, description, items, paths){
    this.name = name;
    this.description  = description;
    this.items =  items;
    this.paths = paths;
}
}

let kitchen = new  Room()
kitchen.name = "Kitchen"
kitchen.decription =  "eclectic"
kitchen.items = ["towels", "vegetables", "oven", "blender"]
kitchen.paths = ["stairs", "hallway", "guestbathroom"]

let bathroom = new Room ()
bathroom.name = "Bathroom"
bathroom.decription = "There os a toilet,  nice sink and shower."
bathroom.items  =["towel","toothbrush","toilet paper","soap"]
bathroom.path = ["hallway"]

let bedroom = new Room()
bedroom.name = "Bedroom"
bedroom.description = ["clean"," greenwalls"]
bedroom.items = ["bed", "posters","fairylights","carpet","tv",
"fridge"]
bedroom.path ="hallway with red carpet"