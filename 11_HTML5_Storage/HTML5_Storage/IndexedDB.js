

var openRequest = indexedDB.open("demoDB", 2);
openRequest.onsuccess = function () {
    console.log("Open onsuccess");
    var db = openRequest.result;

    var trx = db.transaction(["books"], "readwrite");

    var books = trx.objectStore("books");

    //var putRequest = books.put({ title: "A book", addedAt: new Date() });

    //putRequest.onsuccess = function() {
    //    console.log("putRequest success");
    //}

    //var getRequest = books.get(1);
    //getRequest.onsuccess = function() {
    //    console.log("Get ", getRequest.result);
    //}

    var docs = [];
    var cursorRequest = books.openCursor();
    cursorRequest.onsuccess = function() {
        var cursor = cursorRequest.result;

        if (cursor) {
            docs.push(cursor.value)
            //console.log(cursor.value);
            cursor.continue();
        } else {
            console.log(docs);
        }

    }
}

openRequest.onerror = function () {
    console.log("onerror");
}

openRequest.onupgradeneeded = function () {
    console.log("onupgradeneeded");
    var db = openRequest.result;

    db.createObjectStore("books", { autoIncrement: true });

}