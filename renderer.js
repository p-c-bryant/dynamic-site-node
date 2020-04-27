var fs = require('fs');

function mergeValues(values, content) {
  //cycle over keys
  for (let key in values) {
    //replace all {{key}} with value from values object
    content = content.replace(`{{${key}}}`, values[key]);
  }
  return content;  
}

function view(templateName, values, response) {
  //Read from template file
  var fileContents = fs.readFileSync(`./views/${templateName}.html`, {encoding: 'utf8'});
  
  //insert values into content
  fileContents = mergeValues(values, fileContents);
  
  //write out content to the response
  response.write(fileContents);
}


module.exports.view = view;
