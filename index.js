const path = require("path")
const fs = require("fs")
const imageDirectory = path.join(__dirname, "../static/images")
const pageGenerator = img => `<image src="/static/images/${img}" />`

module.exports = (req, res) => {
    fs.readdir(imageDirectory,(e,files)=>{
        const imageName = files[Math.floor(Math.random()*files.length)]
        res.send (pageGenerator(imageName))
    })    
}