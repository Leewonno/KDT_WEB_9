// import Book from "./Book";

import LifeCycleFunc from "./08Lifecycle/LifeCycleFunc";
import RefPractice1 from "./09Ref/RefPractice1";
import RefSampleClass1 from "./09Ref/RefSampleClass1";
import RefSampleClass2 from "./09Ref/RefSampleClass2";
import Practice2 from "./Practice2";

function App() {
    return <>
        {/* <LifeCycleFunc></LifeCycleFunc> */}
        {/* <Practice2></Practice2> */}

        {/* 컴포넌트 내부에서 사용하기 때문에 자기 해당하는 컴포넌트만 focus가 된다. */}
        {/* <RefSampleClass1></RefSampleClass1>
        <RefSampleClass1></RefSampleClass1>
        <RefSampleClass2></RefSampleClass2>
        <RefSampleClass2></RefSampleClass2> */}
        <RefPractice1></RefPractice1>
    </>;
}

export default App;
