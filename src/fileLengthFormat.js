//获取fileSize的单位部分，只获取到第一个字符
function getFileUnit(str)
{
    var index2 = str.length;
    var fileSizeUnit = str.substring(index2 - 1, index2);
    return fileSizeUnit;
}
//获取fileSize的数字部分
function getFileNum(str, fileSizeUnit)
{
    var index1 = str.lastIndexOf(fileSizeUnit);
    var fileSizeNum = str.substring(0, index1);
    return fileSizeNum;
}
//获取之后往数据库存
function formatFileSize(fileSizeNum, fileSizeUnit) {
    var fileSize = 0;
    if(fileSizeUnit == "k" || fileSizeUnit == "K"){
        fileSize = parseFloat(fileSizeNum) * 1024;
        return fileSize;
    }
    if(fileSizeUnit == "m" || fileSizeUnit == "M"){
        fileSize = parseFloat(fileSizeNum) * 1024  * 1024;
        return fileSize;
    }
    if(fileSizeUnit == "g" || fileSizeUnit == "G"){
        fileSize = parseFloat(fileSizeNum) * 1024  * 1024 *1024;
        return fileSize;
    }
}

//回显
function formatFileSizeBack(fileSize) {
    var fileSizeBack = "";
    if (fileSize < 1024) {
        fileSizeBack = fileSize + 'B';
        return fileSizeBack;
    } else if (fileSize < (1024 * 1024)) {
        var temp = fileSize / 1024;
        temp = temp.toFixed(0);
        fileSizeBack = temp + 'K';
        return fileSizeBack;
    } else if (fileSize < (1024 * 1024 * 1024)) {
        var temp = fileSize / (1024 * 1024);
        temp = temp.toFixed(0);
        fileSizeBack = temp + 'M';
        return fileSizeBack;
    } else {
        var temp = fileSize / (1024 * 1024 * 1024);
        temp = temp.toFixed(0);
        fileSizeBack = temp + 'G';
        return fileSizeBack;
    }
}
