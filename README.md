# WinCC Unified JSON File Selector Data Import

![Loading Icon](./assets/Import_JSON.ico)

This repository provides a custom WebControl for importing and processing JSON files within Siemens WinCC Unified. The control allows users to select a JSON file, parse its content, and process it inside the WinCC Unified runtime environment.

## Features
- **File Selection**: Users can select a JSON file using a file dialog.
- **JSON Parsing**: The selected file's content is parsed into a JavaScript object.
- **Error Handling**: If the file is invalid, the system returns a predefined error response.
- **Integration with WinCC Unified**: The parsed JSON data is transferred and processed in the WinCC Unified runtime.

## Installation & Usage
1. Clone or download this repository.
2. Add the custom WebControl to your WinCC Unified project.
3. Implement event handling in WinCC Unified to process the imported JSON data.

## Example: WinCC Unified Implementation

```javascript
try {
    // allData.fileContent is JSON string, we need to parse it into an object
    let jsonObject = JSON.parse(allData.fileContent);
    let status = "OK";
    
    // We check if "status" exists in jsonObject
    if (jsonObject.status) {
        // We check if "status" contains "Data"
        if (jsonObject.status.Data) {
            status = jsonObject.status.Data;
        }
    }

    // JSON - structure output
    HMIRuntime.Trace("JSON file data = " + JSON.stringify(jsonObject, null, 2));

    // Check status
    if (status === "ERROR") {
        HMIRuntime.Trace("Error: JSON NOT EXIST!");
    } else {
        HMIRuntime.Trace("Data Value = " + jsonObject.GearPair.Data);
    }
} catch (e) {
    HMIRuntime.Trace("Error JSON FORMAT = " + e);
}
```

## Error Handling
If an error occurs during file reading or parsing, a predefined JSON structure is returned:

```json
{
    "status": {
        "Data": "ERROR"
    }
}
```

This ensures that the system does not crash due to an invalid JSON file and can handle errors gracefully.

## License
This project is open-source and available under the MIT License.

## Contributions
Feel free to contribute to this project by submitting pull requests or reporting issues.

## Contact
For any questions or support, please create an issue in this repository.

