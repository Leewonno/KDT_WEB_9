import {useForm} from 'react-hook-form'; 

export default function Form(){

    const {register, handleSubmit, formState:{errors}, watch } = useForm();

    // handleSubmit() : 두 개의 함수를 받는데 하나는 유효할 때 실행되는 함수(필수), 하나는 유효하지 않을때 실행되는 함수(선택)

    const onValid = (data)=>{
        console.log('onValid', data);
    }

    console.log('watch', watch());

    return <>
        <form onSubmit={handleSubmit(onValid)}>
            <input type='text' placeholder='name' {...register('username', {required:"이름은 필수 항목입니다."})}/>
            {/* username 이 있는지 확인해야하기 때문에 ? 를 붙여준다. (선택 의미) */}
            {errors.username?.message}
            <br />
            {/* validate : 오류를 만드는 것 */}
            <input type='number' placeholder='age' {...register('age', {required:"나이를 입력해주세요", validate:{usePN: (v)=>v > 0 || '0이상의 숫자만 입력가능합니다.'}})}/>
            {errors.age?.message}
            <br />
            <button>submit</button>
        </form>
    </>
}