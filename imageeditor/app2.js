const sharp = require('sharp')
const compress_images = require('compress-images')

let arg = process.argv.slice(2)

let opcao = arg[0] // r (resize) ou c (compress) // escolha para só alterar tamnho ou só comprimir
let path = arg[1]
let output = "widthChange/imagem.jpg"
let outputCompress = "compressed/"

if (opcao == 'r')
    wid = Number(arg[2])

function resize(path, output, wid) {

    sharp(path).resize({ width: wid })
        .toFile(output, (error) => {
            if (error) {
                console.log(error)
            } else {
                console.log("Sucesso!!")
            }
        })
}

function compress(path, outputCompress) {

    compress_images(path, outputCompress, { compress_force: false, statistic: true, autoupdate: true }, false,
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

opcao == 'r' ? resize(path, output, wid) : opcao == 'c' ? compress(path, outputCompress) : console.log("Opção inválida")
