# closure

블록 레벨 스코프를 지원하는 let은 var보다 직관적이다. 다음 코드를 살펴보자.

``` javascript
var funcs = [];

for (var i = 0; i < 3; i++){
	funcs.push(function () { console.log(i); });
} 

for (var j = 0; j < 3; j++){
    funcs[j]();
}
```

위 코드의 실행 결과로 0, 1, 2를 기대할 수도 있지만 결과는 3이 세 번 출력된다. 그 이유는 for 루프의 var i가 전역 변수이기 때문이다. 0, 1, 2를 출력하려면 아래와 같은 코드가 필요하다.

```javascript
var funcs = [];

for (var i = 0; i < 3; i++){
	(function(index){
		funcs.push(function () { console.log(index); });
	}(i));
}

for (var j = 0; j < 3; j++){
    funcs[j]();
}
```

자바스크립트의 함수 레벨 스코프로 인하여 for 루프의 초기화 식에 사용된 변수가 전역 스코프를 갖게 되어 발생하는 문제를 회피하기 위해 [클로저](https://poiemaweb.com/js-closure)를 활용한 방법이다.