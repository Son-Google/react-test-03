/* eslint-disable */

import './App.css';
import { useState } from 'react'

function App() {

    let post = '||| 강남 우동 맛집 |||';
    let [글제목, 글제목변경] = useState(['남자 코트 추천', '외계인 코트 추천', '기안 코트 추천'])
    let [작성일, 작성일변경] = useState(['2023-01-01', '2023-01-03', '2023-01-08'])
    let [logo, setLogo] = useState('React Blog');
    let [따봉, 따봉변경] = useState([0, 0, 0]);
    let [modal, setModal] = useState(0);
    let [title, setTitle] = useState(0);
    let [addTitle, setAddTitle] = useState('');

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
                                <a href="#" onClick={() => {setModal(1);setTitle(i)}}>{aa}</a>
                                <span onClick={ (e) => {
                                    let 따봉copy = [...따봉];
                                    따봉copy[i] = 따봉copy[i] + 1;
                                    따봉변경(따봉copy);
                                    e.stopPropagation();
                                }} style={{cursor:"pointer"}}>👍</span> {따봉[i]}
                            </h3>
                            <p>{작성일[i]}</p>
                            <p><button onClick={() => {
                                let deltitle = [...글제목];
                                deltitle.splice(i, 1);
                                글제목변경(deltitle);
                            }}>삭제</button></p>
                        </div>
                    );
                })
            }
            <div>-----------------------------------------------</div>
            <p>
                <input type="text" id="in" onChange={(e)=>{setAddTitle(e.target.value);}} />
                <button onClick={()=>{
                    if(addTitle != '' && addTitle != null) {
                        let copy = [...글제목];
                        copy.unshift(addTitle)
                        글제목변경(copy);

                        let 따봉copy = [...따봉];
                        따봉copy.unshift(0);
                        따봉변경(따봉copy);

                        const today = new Date();
                        let 작성일copy = [...작성일];
                        작성일copy.unshift(today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDay());
                        작성일변경(작성일copy);

                        document.getElementById("in").value = '';
                    } else {
                        alert("Asdf")
                    }
                }}>추가</button>
            </p>
            <div>-----------------------------------------------</div>
            {
                modal == 1 ? <Modal color={"orange"} title={title} 글제목={글제목} 글제목변경={글제목변경}/> : null
            }
            <div>-----------------------------------------------</div>
        </div>
    );
}

/*
// 컴포넌트 만들때에는 함수명을 똑같이 대문자로 만들라해
 */
//모달 컴포넌트
function Modal(props){
    return (
        <div className="modal" style={{background : props.color}}>
            <h4>{props.글제목[props.title]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <p><button onClick={ () => {
                props.글제목변경(['여자 코트 추천', '외계인 코트 추천!!!', '기안 코트 추천!!!!!!!!']);
                }}>글 제목 수정</button></p>
            <p><button onClick={ () => {setModal(0)}}>닫기</button></p>
        </div>
    );
}

//class 컴포넌트 예제
/*
class Modal2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '캄',
            age : 12
        }
    }
    render() {
        return (
            <div>{this.props.***}</div> //=> props 받아오는 거에 따라 원하는 대로 출력
            <div>안녕 {this.state.name}</div>
            <p>
                <button onClick={()=>{
                    this.setState({age : 21})
                        }}>변경</button>
            </p>
        )
    }
}
*/

export default App;
