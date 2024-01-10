/* eslint-disable */

import './App.css';
import { useState } from 'react'

function App() {

    let post = '||| 강남 우동 맛집 |||';
    let [글제목, 글제목변경] = useState(['남자 코트 추천', '외계인 코트 추천', '기안 코트 추천'])
    let [logo, setLogo] = useState('React Blog');
    let [따봉, 따봉변경] = useState([0, 0, 0]);
    let [modal, setModal] = useState(0);

    function 제목버튼바꾸기(val){
        b[val] = "여자 코트 추천";
    }

    let arrayText = [];
    function exfor(){
        for(let i =0; i < 글제목.length; i++){
            arrayText.push(
                <div className="list" key={i}>
                    <h3>
                        <a href="#">글제목[i]</a>
                        <span>👍</span>
                    </h3>
                    <p>2월 17일 발행</p>
                </div>
            );
        }
    }

    exfor();


    return (
        <div className="App">
            <div className="black-nav">
                <h1 style={ {color : 'red', fontSize : '24px' } }>블로그임 <span>{logo}</span></h1>
            </div>
            <h2>{ post }</h2>
            <p>
                <button onClick={() => {
                    let copy = [...글제목];
                    copy[0] = "여자코트추천";
                    글제목변경(copy);
                    }}>제목바꾸기</button>
            </p>
            <p>
                <button onClick={() => {
                    let 오더냐 = [...글제목];
                    오더냐 = 오더냐.sort();
                    글제목변경(오더냐);
                    }}>제목정렬하기</button>
            </p>
            {/*
            <div className="list">
                <h3>{글제목[0]} <span onClick={ () => { 따봉변경(따봉+1) } } style={{cursor:"pointer"}}>👍</span> {따봉}</h3>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h3>{글제목[1]}</h3>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h3><a href="#" onClick={() => {setModal(!modal)}}>{글제목[2]}</a></h3>
                <p>2월 17일 발행</p>
            </div>
            */}
            {
                글제목.map(function(aa, i){
                    return (
                        <div className="list" key={i}>
                            <h3>
                                <a href="#" onClick={() => {setModal(!modal)}}>{aa}</a>
                                <span onClick={ () => {
                                    let 따봉copy = [...따봉];
                                    따봉copy[i] = 따봉copy[i] + 1
                                    따봉변경(따봉copy) }
                                } style={{cursor:"pointer"}}>👍</span> {따봉[i]}
                            </h3>
                            <p>2월 17일 발행</p>
                        </div>
                    );
                })
            }
            <div>-----------------------------------------------</div>
            <div>
                {arrayText}
            </div>
            {
                modal == 1 ? <Modal /> : null
            }


        </div>
    );
}

/*
// 컴포넌트 만들때에는 함수명을 똑같이 대문자로 만들라해
 */
//모달 컴포넌트
function Modal(){
    return (
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    );
}


export default App;
