function setOption(key, value) {
    var desc = new ActionDescriptor();
    desc.putString(0, value);
    app.putCustomOptions(key, desc, true);
}

function getOption(key, defaultvalue) {
    var option;
    try {  
        var desc = app.getCustomOptions(key);  
    }
    catch(e){}

    if(undefined != desc) {
        option = desc.getString(0);  
    }
    else {
        option = defaultvalue;
    }
    
    return option;
}