# Multilevel-Line-Encoding

### By: Dibyadarshan Hota (Batch-1 16CO154) and Omkar Srinivas Prabhu (Batch-2 16CO233)

## Implementation of the following line coding schemes:
* 2B1Q
* 8B6T 

### File Structure
* `index.html` : Contains the UI structure of the application
* `javascripts`
    * `encoding_2b1q.js` : Contains logic for implementation of 2B1Q
    * `encoding_8b6t.js` : Contains logic for implementation of 8B6T
    * `main.js` : Contains logic to handle interactions with UI elements in `index.html`
* `styles.css` : Contains code for styling the elements in `index.html`
* `C++ script`
    * `source.txt` : Contains the mapping table for 8B6T as a txt file
    * `script.cpp` : Contains logic for converting the mapping table in `source.txt` to JavaScript logic for the file `encoding_8b6t.js`             
* `images`
    * `table_2b1q.jpg` : Image of encoding table for 2B1Q
    * `table_8b6t.jpg` : Image of encoding table for 8B6T
          

### External Libraries
* [plotly.js](https://github.com/plotly/plotly.js/)