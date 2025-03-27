document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("fileInput");
    const fileButton = document.getElementById("fileButton");

    fileButton.addEventListener("click", function () {
        fileInput.click();
    });

    if (fileInput) {
        fileInput.addEventListener("change", async (event) => {
            const file = event.target.files[0];

            if (file) {
                const reader = new FileReader();

                reader.onload = function (event) {
                    try {
                        const fileContent = event.target.result;
                        const jsonData = JSON.parse(fileContent);

                        const jsonString = JSON.stringify(jsonData);
                        console.log("🔹 JSON content:", jsonString, " | number of char:", jsonString.length);

                        WebCC.Events.fire("fileSelected", { fileContent: jsonString });

                    } catch (error) {
                        console.error("❌ Error reading JSON:", error);

                        jsonData = {
                            "status": {
                                "Data": "ERROR"
                            }
                        };
                        WebCC.Events.fire("fileSelected", { fileContent: JSON.stringify(jsonData) });
                        fileInput.value = "";
                    }
                };

                reader.readAsText(file);
                fileInput.value = "";
            }
        });
    } else {
        console.error("❌ Element #fileInput not found!");
        fileInput.value = "";
    }
});
