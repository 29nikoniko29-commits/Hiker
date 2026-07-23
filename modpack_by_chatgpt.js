// Blue Lattice, Crammer, and Loader Mod

// ---------- BLUE LATTICE ----------
elements.blue_lattice = {
    color: "#3a7cff",
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    density: 1800,
    hardness: 1,
};

// ---------- CRAMMER ----------
elements.crammer = {
    color: "#7CFC00",
    behavior: [
		    "CL|XX|CL",
		    "XX|XX|XX",
		    "CL|XX|CL"
    category: "special",
    state: "solid",
    density: 1000,
    // Makes it grow faster than normal spreading elements
    tick: function(pixel) {
        if (Math.random() < 0.1) {
            var coords = [
                [pixel.x + 1, pixel.y],
                [pixel.x - 1, pixel.y],
                [pixel.x, pixel.y + 1],
                [pixel.x, pixel.y - 1]
            ];

            var pos = coords[Math.floor(Math.random() * coords.length)];

            if (isEmpty(pos[0], pos[1])) {
                createPixel("crammer", pos[0], pos[1]);
            }
        }
    }
};

// ---------- LOADER ----------
elements.loader = {
    color: "#00FFFF",
    category: "special",
    state: "solid",
    density: 1000,
    behavior: [
        "CL|XX|CL",
        "XX|XX|XX",
        "CL|XX|CL"
    ],

    reactions: {
        strange_matter: {
            elem1: "loader",
            elem2: "strange_matter"
        },
        neutron: {
            elem1: "explosion"
        },
        proton: {
            elem1: "explosion"
        },
        uranium: {
            elem1: "explosion"
        },
        bless: {
            elem1: "explosion"
        }
    }
};
