/**
 * Created by liuguangxuan on 2016/3/12.
 */
function line(){
    var arr = new Array(100);
    console.log(arr.join("*"));
}
line();
/*
* 10.1.1 Node类型
*/
for(each in Node){
    console.log(each);
}
var title = document.getElementById("title");
if (title.nodeType == 1){
    console.log(title.nodeName + "是一个元素节点");
}
else{
    console.log(title.nodeName + "不是一个元素节点");
}
var bodyNode = document.body.childNodes;
console.log(document.body);
console.log(bodyNode);
console.log(bodyNode[0]);
console.log(bodyNode.item(1));
console.log(bodyNode.item(0));
console.log(bodyNode.length);
console.log(typeof bodyNode);
console.log(bodyNode instanceof NodeList);
console.log(bodyNode instanceof Array);
var arrayOfNodes = Array.prototype.slice.call(bodyNode,0);
console.log(arrayOfNodes);
console.log(arrayOfNodes instanceof Array);
function convertToArray(nodes){
    var array = new Array();
    try{
        array = Array.prototype.slice.call(nodes,0);
    }
    catch (ex){
        for(var i = 0,len = nodes.length;i < len;i++){
            array.push(nodes[i]);
        }
    }
    return array;
}
console.log(convertToArray(bodyNode));
console.log(bodyNode.item(0).parentNode);
console.log(title.parentNode);
console.log(title.previousSibling);
console.log(title.previousElementSibling);
console.log(title.nextSibling.nextSibling);
console.log(title.lastChild);
console.log(title.firstChild);
console.log(document.body.hasChildNodes());
console.log(document.body.childNodes);
console.log(title.ownerDocument);

/*
* 3.操作节点
* appendChild()、insertBefore()、replaceChild()、removeChild()
*/
console.log(title.childNodes);
var newNode = document.createTextNode("这是新增节点");
var returnedNode = title.appendChild(newNode);
console.log(returnedNode == newNode);
console.log(title.lastChild == returnedNode);
var returnedNode2 = title.appendChild(title.firstChild);
console.log(returnedNode2);
console.log(title.firstChild);
var newNode2 = document.createTextNode(" ××这是第三个节点×× ");
var returnedNode3 = title.insertBefore(newNode2,null);
console.log(returnedNode3 == title.lastChild);
var newNode3 = document.createTextNode(" ××这是第四个节点×× ");
var returnedNode4 = title.insertBefore(newNode3,returnedNode3);
console.log(returnedNode4 == returnedNode3.previousSibling);
var returnedNode5 = title.replaceChild(newNode3,title.firstChild);
var returnedNode6 = title.removeChild(title.lastChild);
console.log(returnedNode6);
console.log(returnedNode6.ownerDocument);

/*
* 4.其他方法
* cloneNode()、normalize()
*/
line();
var deepList = title.cloneNode(true);
console.log(deepList);
var shallowList = title.cloneNode();
console.log(shallowList);

/*
* 10.1.2 Document类型
*/
line();

/*
* 1.文档的子节点
*/
console.log(document.nodeType);
console.log(document.nodeValue);
console.log(document.nodeName);
console.log(document.parentNode);
console.log(document.childNodes);
console.log(document.documentElement);
console.log(document.lastChild);
console.log(document.childNodes[document.childNodes.length - 1]);
console.log(document.body);
console.log(document.doctype);

//2.文档信息
//title、URL、domain、referrer
var originalTitle = document.title;
console.log(originalTitle);
console.log(document.title);
document.title = "fuck you";
console.log(decodeURIComponent(document.URL));
console.log(decodeURIComponent(location.href));
console.log(document.domain);
console.log(document.referrer);

//3.查找元素
//getElementById()、getElementByTagName()
var para = document.getElementsByTagName("p");
console.log(para);
console.log(para.length);
var myPara = para.namedItem("myPara");
console.log(myPara);
console.log(para[1]);
console.log(para["myPara"]);
var allElements = document.getElementsByTagName("*");
console.log(allElements.length);
console.log(allElements);

//6.文档写入
//write()、writeln()、open()、close()
console.log(new Date());

/*
* 10.1.3 Element类型
*/
line();
console.info("Element类型");
console.log(title);
console.log(title.nodeType);
console.log(title.nodeName);
console.log(title.tagName);
console.log(title.nodeValue);
console.log(title.nodeName == title.tagName);

//1.HTML元素
console.log(title.id);
console.log(title.className);
console.log(title.lang);
console.log(document.documentElement.lang);
title.dir = "rtl";
title.title = "这里是title，只有在鼠标悬浮上的时候才能显示出来";

//2.取得特性
var div = document.getElementById("myDiv");
console.log(div.getAttribute("id"));
console.log(div.getAttribute("class"));
console.log(div.getAttribute("title"));
console.log(div.getAttribute("lang"));
console.log(div.getAttribute("dir"));
console.log(div.getAttribute("data-mySpecial"));
console.log(div.style);
console.log(div.getAttribute("style"));
console.log(div.onclick);
console.log(div.getAttribute("onclick"));

//2.设置特性
div.setAttribute("style","text-align:right");
div.style = "text-align:center";

//4.attributes
console.log(div.attributes);
console.log(div.attributes.getNamedItem("id").nodeValue);
console.log(div.attributes["id"].nodeValue);
function outputAttributes(element){
    var arr = new Array(),
        name,
        value;
    for(var i = 0, len = element.attributes.length;i < len;i++){
        name = element.attributes[i].nodeName;
        value = element.attributes[i].nodeValue;
        if(element.attributes[i].specified){
            arr.push(name + "=\"" + value + "\"");
        }
    }
    return arr.join(" ");
}
console.log(outputAttributes(div));

//5.创建元素
var div2 = document.createElement("div");
div2.id = "myNewDiv";
div2.className = "box";
div2.innerHTML = "这是动态创建的div";
div2.setAttribute("dir","rtl");
document.body.appendChild(div2);

//6.元素的子节点
var element = document.getElementById("myList").childNodes;
for(var i = 0,len= element.length;i < len;i++){
    if(element[i].nodeType == 1){
        console.log(element[i]);
    }
}

/*
* 10.1.4 Text类型
*/
line();
console.info("10.1.4 Text类型");
var textNode = document.getElementById("myDiv").firstChild;
console.log(textNode.nodeType);
console.log(textNode.nodeName);
console.log(textNode.nodeValue);
console.log(textNode.parentNode);
console.log(textNode.data);
textNode.appendData("这是后来添加的内容");
textNode.deleteData(10,3);
textNode.insertData(10,"嘻嘻嘿嘿");
textNode.replaceData(10,4,"fuck you!");
var text1 = textNode.splitText(10);
console.log(text1);
var text2 = textNode.substringData(7,5);
console.log(text2);
console.log(textNode.length);
document.getElementById("myDiv").firstChild.nodeValue = "这是新修改的内容";

var element = document.createElement("div");
element.className = "message";
var textNode = document.createTextNode("Hello World!");
element.appendChild(textNode);
document.body.appendChild(element);
var textNode2 = document.createTextNode("Hello JavaScript!");
element.appendChild(textNode2);
console.log(element.childNodes.length);
console.log(element.childNodes[1]);
element.normalize();
console.log(element.childNodes.length);

/*
* 10.1.5 Comment 类型
*/
line();
console.info("10.1.5 Comment 类型");
var myComment = document.getElementById("myComment");
console.log(myComment.childNodes);
console.log(myComment.firstChild.data);
console.log(myComment.firstChild.nodeValue);
console.log(myComment.firstChild.nodeType);
console.log(myComment.firstChild.nodeName);

/*
* 10.1.7 DocumentType类型
*/

console.log(document.doctype);
console.log(document.doctype.nodeType);
console.log(document.doctype.nodeName);
console.log(document.doctype.nodeValue);
console.log(document.doctype.name);

/*
* 10.1.8 DocumentFragment类型
*/

var fragment = document.createDocumentFragment();
console.log(fragment.nodeType);
console.log(fragment.nodeName);
console.log(fragment.nodeValue);
var ul = document.getElementById("myList");
var li = null;
for(var i = 0;i < 3;i++){
    li = document.createElement("li");
    li.appendChild(document.createTextNode("Item " + i));
    fragment.appendChild(li);
}
ul.appendChild(fragment);

/*
* 10.1.9 Attr类型
*/

var attr = document.createAttribute("text-align");
console.log(attr.nodeType);
console.log(attr.nodeName);
console.log(attr.nodeValue);
attr.value = "center";
console.log(attr.nodeValue);
console.log(attr.value);

/*
* 10.2 DOM操作技术
*/
line();
console.info("10.2 DOM操作技术")

//10.2.1
function loadScript(url){
    var script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);
}
loadScript("../Scripts/Class03.js");
function loadScriptString(code){
    var script = document.createElement("script");
    try{
        script.appendChild(document.createTextNode(code));
    }
    catch (ex){
        script.text = code;
    }
    document.body.appendChild(script);
}
loadScriptString("console.log('fuck!')");

//10.2.2 动态样式

function loadStyles(url){
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}
loadStyles("../Styles/Class10.css");
function loadStyleString(code){
    var style = document.createElement("style");
    try{
        style.appendChild(document.createTextNode(code));
    }
    catch (ex){
        style.styleSheet.cssText = code;
    }
    document.body.appendChild(style);
}
loadStyleString("body{background-color:#12b4a4}");

//10.2.3 操作表格

var table = document.createElement("table");
table.border = 1;
table.width = "100%";
var row1 = document.createElement("tr");
table.appendChild(row1);
var cell11 = document.createElement("td");
row1.appendChild(cell11);
cell11.appendChild(document.createTextNode("Cell 1.1"));
var cell12 = document.createElement("td");
row1.appendChild(cell12);
cell12.appendChild(document.createTextNode("Cell 1.2"));

var row2 = document.createElement("tr");
table.appendChild(row2);
var cell21 = document.createElement("td");
row2.appendChild(cell21);
cell21.appendChild(document.createTextNode("Cell 2.1"));
var cell22 = document.createElement("td");
row2.appendChild(cell22);
cell22.appendChild(document.createTextNode("Cell 2.2"));
document.body.appendChild(table);

var table2 = document.createElement("table");
table2.border = 1;
table2.width = "100%";
table2.insertRow(0);
table2.rows[0].insertCell(0);
table2.rows[0].cells[0].appendChild(document.createTextNode("Cell 1.1"));
table2.rows[0].insertCell(1);
table2.rows[0].cells[1].appendChild(document.createTextNode("Cell 1.2"));
table2.insertRow(1);
table2.rows[1].insertCell(0);
table2.rows[1].cells[0].appendChild(document.createTextNode("Cell 2.1"));
table2.rows[1].insertCell(1);
table2.rows[1].cells[1].appendChild(document.createTextNode("Cell 2.2"));
document.body.appendChild(table2);

//10.2.4 使用NodeList

var divs = document.getElementsByTagName("div"),
    i,
    len;
for(i = 0,len = divs.length;i < len;i++){
    div = document.createElement("div");
    document.body.appendChild(div);
    console.log(i);
}