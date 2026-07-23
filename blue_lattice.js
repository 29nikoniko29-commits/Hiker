elements.blue_lattice = {
    behavior: [
        "XX|CL|XX",
        "CL|DL|CL",
        "XX|CL|XX",
    ],
    category: "special",
    state: "solid",
    density: 1834,
    color: "#000080",
    reactions: {
        "lightning": {elem1: "destructive_blue_lattice", elem2: null}
        }
};

elements.destructive_blue_lattice = {
    behavior: [
        "DL|CL|DL",
        "CL|DL|CL",
        "DL|CL|DL",
    ],
    category: "special",
    state: "solid",
    density: 1834,
    color: "#0018f9",
    hidden: true,
};

elements.lattice.reactions.laser = { "elem1":"blue_lattice", "elem2": "blue_lattice"
