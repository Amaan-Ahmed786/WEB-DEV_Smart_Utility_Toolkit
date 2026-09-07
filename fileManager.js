const fs = require("fs");

const fileName = "test.txt";

// CREATE FILE
console.log("Creating file...");

fs.writeFile(fileName, "Hello Node.js", function (err) {

    if (err) {
        console.log("Error creating file:", err.message);
        return;
    }

    console.log("File Created");

    // READ FILE
    console.log("Reading File...");

    fs.readFile(fileName, "utf8", function (err, data) {

        if (err) {
            console.log("Error reading file:", err.message);
            return;
        }

        console.log("File Content:", data);

        // UPDATE FILE
        console.log("Updating File...");

        fs.appendFile(
            fileName,
            "\nLearning FS Module",
            function (err) {

                if (err) {
                    console.log("Error updating file:", err.message);
                    return;
                }

                console.log("File Updated");

                // READ UPDATED FILE
                fs.readFile(fileName, "utf8", function (err, data) {

                    if (err) {
                        console.log("Error reading updated file:", err.message);
                        return;
                    }

                    console.log("Updated Content:");
                    console.log(data);

                    // DELETE FILE
                    console.log("Deleting File...");

                    fs.unlink(fileName, function (err) {

                        if (err) {
                            console.log("Error deleting file:", err.message);
                            return;
                        }

                        console.log("File Deleted");
                    });
                });
            }
        );
    });
});