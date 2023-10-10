import {useForm} from 'react-hook-form'; 

export default function Form(){

    const {register, handleSubmit, formState:{errors}, watch } = useForm();

    // handleSubmit() : 두 개의 함수를 받는데 하나는 유효할 때 실행되는 함수(필수), 하나는 유효하지 않을때 실행되는 함수(선택)

    const onValid = (data)=>{
        console.log('onValid', data);
    }
    // const onInvalid = (err)=>{
    //     console.log('onInvalid', err);
    // }

    // onInvalid 보다 errors를 쓰는게 편함
    // console.log('error', errors)

    // 실시간으로 입력하는 값이 체크됨
    // 특정 값만 체크하고 싶으면 함수 안에 넣어주기
    console.log('watch', watch('username'));

    return <>
        <form onSubmit={handleSubmit(onValid)}>
            <input type='text' placeholder='name' {...register('username', {required:"이름을 입력하세요", minLength:{message:"최소 두 글자 이상 입력하세요", value:2}})}/>
            {/* username 이 있는지 확인해야하기 때문에 ? 를 붙여준다. (선택 의미) */}
            {errors.username?.message}
            <br />
            {/* validate : 오류를 만드는 것 */}
            <input type='text' placeholder='email' {...register('email', {required:"이메일을 입력해주세요", validate:{useGmail: (v)=>v.includes('gmail.com') || 'gmail로만 가입가능합니다.'}})}/>
            {errors.email?.message}
            <br />
            <input type='password' placeholder='pw' {...register('pw')}/>
            <br />
            <button>submit</button>
        </form>
    </>
}