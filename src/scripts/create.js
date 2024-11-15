const fs = require('fs'); // file system (node Module)
const component = process.argv[2]; // index (2)
const exec = require("child_process").exec;

fs.readFile("./src/components/template.html", "utf-8", (err, source) => {
    if (err) return console.error(err);
    const content = source.replace(/COMPONENT_NAME/g, component);

    if (fs.existsSync(`./src/components/${component}.html`)) {
        return console.error(`${component}.html already exist, use another name`);
    }

    fs.writeFile(`./src/components/${component}.html`, content, (err) => {
        if (err) return console.error(`there is a problem in creating ${component}.html`);
        else {
            fs.writeFile(`./src/assets/sass/components/${component}.scss`, '', (err) => {
                if (err) return console.error(`there is a problem in creating ${component}.sass`);
                console.log(`${component} created successfuly`);
                fs.appendFile("./src/assets/sass/components/_component.scss", `@import "${component}";\n`, (err) => {
                    if (err) return console.error(`there is a problem in creating ${component}.sass`);
                    console.log(`${component} created successfuly`);
                });
                exec(`code -r ./src/components/${component}.html`, (err) => {
                    if (err) return console.error(err);
                });
                exec(`code -r ./src/assets/sass/components/${component}.scss`, (err) => {
                    if (err) return console.error(err);
                });
            });

        }
    })
})
