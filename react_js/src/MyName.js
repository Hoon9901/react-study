import React from 'react'

class MyName extends React.Component {
    // 특정 상황에 props를 유동적으로 사용하기 위함.
    static defaultProps = {
        name : '기본이름'
    }
    render() {
        return (
            <div>
                안녕! <b>{this.props.name}</b>
            </div>
        );
    }
}

export default MyName;