// import Book from "./Book";

import LifeCycleFunc from "./08Lifecycle/LifeCycleFunc";
import RefPractice1 from "./09Ref/RefPractice1";
import RefPractice2 from "./09Ref/RefPractice2";
import RefSampleClass1 from "./09Ref/RefSampleClass1";
import RefSampleClass2 from "./09Ref/RefSampleClass2";
import RefSampleFunc1 from "./09Ref/RefSampleFunc1";
import RefSampleFunc2 from "./09Ref/RefSampleFunc2";
import HookPractice1 from "./10Hook/HookPractice1";
import UseCallback from "./10Hook/UseCallback";
import UseMemo from "./10Hook/UseMemo";
import UseReducer from "./10Hook/UseReducer";
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
        
        {/* 230925_실습1 */}
        {/* <RefPractice1></RefPractice1> */}

        {/* <RefSampleFunc1></RefSampleFunc1> */}
        {/* <RefSampleFunc1></RefSampleFunc1> */}

        {/* <RefSampleFunc2></RefSampleFunc2> */}

        {/* <RefPractice2></RefPractice2> */}

        {/* <UseMemo></UseMemo> */}

        {/* <UseCallback></UseCallback> */}

        {/* <UseReducer></UseReducer> */}

        <HookPractice1></HookPractice1>
    </>;
}

export default App;
