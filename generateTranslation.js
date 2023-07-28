const fs = require('fs');
const config = require('../../../translationConfig.json');

function getFiles(dir, files = []) {
    const fileList = fs.readdirSync(dir);
    for (const file of fileList) {
        const name = `${dir}/${file}`;
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files);
        } else {
            if (config.extensions.some(a => name.includes('.' + a))) {
                files.push(name);
            }
        }
    }
    return files;
}

async function checkIfContainsAsync(filename) {
    try {
        const contents = await fs.promises.readFile(filename, 'utf-8');
        const result = contents.includes('useTranslation(');
        if (result) {
            const file = {
                keys: [],
                name: ''
            }
            const [a] = contents.matchAll(/useTranslation\(\'(.*)\'\)/gm);
            file.name = a[1];
            const b = [...contents.matchAll(/t\(\'(.*)\'\)/gm)]
            b.forEach(c => {
                if (c[1]) {
                    file.keys.push(c[1])
                }
            })
            return file;
        }

        return null
    } catch (err) {

    }
}

async function addTrans(filename, keys) {
    const contents = await fs.promises.readFile(filename, 'utf-8');
    const c = JSON.parse(contents);
    const cc = {};
    keys.forEach(a => {
        cc[a] = c[a] || ''
    })

    await fs.writeFileSync(filename, JSON.stringify(cc));
}

async function checkIfTranslationExist({keys, name}, l) {
    const langPath = `src/messages/${l}`;

    if (!fs.existsSync(langPath)){
        await fs.mkdirSync(langPath);
    }

    const files = getFiles(langPath);
    const path = `src/messages/${l}/${name}.json`;
    if (files.some(a => a === path)) {
        await addTrans(path, keys);
    } else {
        await fs.writeFileSync(path, JSON.stringify({}))
        await addTrans(path, keys)
    }
}

async function generateTranslation() {
    const jsFiles = getFiles('src')

    for (let f in jsFiles) {
        const b = await checkIfContainsAsync(jsFiles[f]);
        if (b) {
            for (let l in config.lang) {
                await checkIfTranslationExist(b, config.lang[l]);
            }
        }
    }
}

generateTranslation();
