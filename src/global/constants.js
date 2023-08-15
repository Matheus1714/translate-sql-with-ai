const colors = {
    base:{
        blueberry: "#07061D",
        cottonCandy: "#66D9EF",
        lemon: "#2DFF0B",
        gum: "#FD78C4"
    },
    soft:{
        backgroud: "#030712",
        pistachio: "#D3FFCC",
        cream: "#E2DFCD",
        foam: "#D7DAE2",
        snow: "#FFFFFF",
        guava: "#DCFFD6"
    },
    transparency:{
        lemon: 0.08,
        guava: 0.20,
        snow: 0.8
    }
}

const typograph = {
    inter:{
        300:{
            size:'18px',
            lineHeight: '28px',
            weight:300
        },
        200:{
            size:'16px',
            lineHeight: '24px',
            weight:300
        },
        100:{
            size:'16px',
            lineHeight: '24px',
            weight:600
        },
    },
    ubuntuMono:{
        100:{
            size:'16px',
            lineHeight: '20px',
            weight:400
        }
    }
}

const theme = {
    colors,
    typograph
}

export default theme