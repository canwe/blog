var fs = require('fs');
var path = require('path');
var prompt = require('prompt');
var NEW_LINE = '\n';
var TAB = '  ';
var schema = {
    properties: {
        name: {
            message: 'Name (used as Title and File Name, required)',
            required: true
        },
        category: {
            message: 'Category (only one, optional)',
            required: false
        },
        tags: {
            message: 'Tags (Comma separated, optional)',
            required: false
        }
    }
}

prompt.start();

prompt.get(schema, function (err, result) {
    var name, category, tags;
    if (!err) {
        name = result.name;
        category = result.category || 'Personal';
        tags = result.tags ? result.tags.split(',') : ['personal'];
        createNewPost(name, category, tags);
    }
});


// sample file name: 2016-5-29-post-name.md
function generateFileName(name) {
    var str = name.replace(/ /g, '-').replace(/[^0-9a-z-]/gi, '');
    var today = new Date();
    var postDate = today.getUTCFullYear() + '-' + (today.getUTCMonth() + 1) + '-' + today.getUTCDate();
    return postDate + '-' + str.toLowerCase() + '.md';

}

function createNewPost(name, category, tags) {

    var template = '',
        i,
        fileLocation = path.resolve(__dirname, '..', '_posts'),
        fileName = generateFileName(name),
        filePath = path.join(fileLocation, fileName);

    template += '---' + NEW_LINE;

    template += 'layout: post' + NEW_LINE;

    template += 'title: \'' + name + '\'' + NEW_LINE;

    template += 'categories: ' + NEW_LINE;

    template += TAB + '- ' + category + NEW_LINE;

    if (tags.length > 0) {
        template += 'tags: ' + NEW_LINE;

        for (i = 0; i < tags.length; i++) {
            template += TAB + '- ' + tags[i] + NEW_LINE;
        }

    }

    template += '---';

    fs.writeFile(filePath, template, function (err) {
        if (err) {
            console.log('Unable to create a new post');
        }
        console.log('Successfully create a new post at: ' + filePath);
        process.exit();
    });

}