// Crammer + Loader Mod
// Sandboxels

// ---------- BLUE LATTICE ----------
elements.blue_lattice = {
    color: "#3A7CFF",
    category: "special",
    state: "solid",
    density: 1500,

    behavior: [
        "CL|XX|CL",
        "XX|XX|XX",
        "CL|XX|CL"
    ]
};


// ---------- CRAMMER ----------
elements.crammer = {
    color: "#7CFC00",
    category: "special",
    state: "solid",
    density: 1000,

    behavior: [
        "CL|XX|CL",
        "XX|XX|XX",
        "CL|XX|CL"
    ],

    tick: function(pixel) {
        // 1.1x faster growth
        if (Math.random() < 0.11) {
            for (let i = 0; i < 8; i++) {
                let x = pixel.x + Math.floor(Math.random() * 3) - 1;
                let y = pixel.y + Math.floor(Math.random() * 3) - 1;

                if (isEmpty(x,y)) {
                    createPixel("crammer",x,y);
                    break;
                }
            }
        }
    }
};


// ---------- LOADER ----------
elements.loader = {
    color: "#00FFFF",
    category: "special",
    state: "solid",
    density: 1200,

    behavior: [
        "CL|XX|CL",
        "XX|XX|XX",
        "CL|XX|CL"
    ],

    reactions: {
        neutron: {
            elem1: "explosion",
            chance: 1
        },

        proton: {
            elem1: "explosion",
            chance: 1
        },

        uranium: {
            elem1: "explosion",
            chance: 1
        },

        bless: {
            elem1: "explosion",
            chance: 1
        },

        // Immune to strange matter
        strange_matter: {
            elem1: "loader",
            elem2: null
        }
    }
};
