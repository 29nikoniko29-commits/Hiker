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
    color: "#7CFC00", // Lime
    category: "special",
    state: "solid",
    density: 1000,

    tick: function(pixel) {
        // Grow 1.1x faster than lattice/filler
        for (let i = 0; i < 11; i++) {
            var x = pixel.x + Math.floor(Math.random() * 3) - 1;
            var y = pixel.y + Math.floor(Math.random() * 3) - 1;

            if (isEmpty(x, y)) {
                createPixel("crammer", x, y);
                break;
            }
        }
    }
};

// ---------- LOADER ----------
elements.loader = {
    color: "#00FFFF", // Cyan
    category: "special",
    state: "solid",
    density: 1000,

    tick: function(pixel) {
        // Same growth as crammer
        for (let i = 0; i < 11; i++) {
            var x = pixel.x + Math.floor(Math.random() * 3) - 1;
            var y = pixel.y + Math.floor(Math.random() * 3) - 1;

            if (isEmpty(x, y)) {
                createPixel("loader", x, y);
                break;
            }
        }
    },

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

        // Loader ignores strange matter infection
        strange_matter: {
            elem1: "loader",
            elem2: "strange_matter"
        }
    }
};
