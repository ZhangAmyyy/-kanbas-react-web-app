import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import FilterFunction from "./FilterFunction";
import FindFunction from "./FindFunction";
import ForLoops from "./ForLoops";
import JsonStringify from "./JsonStringify";

function WorkingWithArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
        functionScoped, blockScoped,
        constant1, numberArray1, stringArray1
    ];
    return (
        <div>
            <h2>Working With Arrays</h2>
            <p>numberArray1={numberArray1}</p>
            <p>stringArray1 ={stringArray1}</p>
            <p>variableArray1={variableArray1}</p>
            <ArrayIndexAndLength/>
            <AddingAndRemovingDataToFromArrays/>
            <ForLoops/>
            <JsonStringify/>
            <FindFunction/>
            <FilterFunction/>
        </div>
    )
}
export default WorkingWithArrays