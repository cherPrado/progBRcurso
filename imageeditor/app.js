const sharp = require('sharp')
const compress_images = require('compress-images')

let arg = process.argv.slice(2)

let path = arg[0]
let output = "widthChange/imagem.jpg"
let wid = Number(arg[1])


function resize(path, output, wid) {

    sharp(path).resize({ width: wid })
        .toFile(output, (error) => {
            if (error) {
                console.log(error)
            } else {
                console.log("Sucesso!!")
                compress(output, "./compressed/")
            }
        })
}

function compress(path, output) {

    compress_images(path, output, { compress_force: false, statistic: true, autoupdate: true }, false,
        { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
        { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
        { svg: { engine: "svgo", command: "--multipass" } },
        { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },

        function (error, completed, statistic) {
            console.log("-------------");
            console.log(error);
            console.log(completed);
            console.log(statistic);
            console.log("-------------");

        }
    )
}

resize(path, output, wid)