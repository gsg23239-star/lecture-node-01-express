const arr=["apple", "banana", "melon"];
arr.find();
arr.find(()=> {});
arr.find((첫, 둘, 셋)=> {});
첫 자리에 들어가는 값: 지금 순회하는 요소값		=> value
둘째 자리에 들어가는 값: 지금 순회하는 요소 값	=> index
셋짜 자리에 들어가는 값 : 전체 arrat값		=> array

// arr.find(() => {});
const result = arr.find((value, index, array) => {
    return value === 'apple"; //지금 순회하는 요소가 "apple"과 같으면 true반환
})

const result = arr.find((value, index, array) => value==="apple");

const result = arr.find((value, index) => index === 2);

arr.forEach((value, index, array) => {
    // 첫번째 순회 때 : value = "apple", index = 0, array = ['apple", "banana", "melon"]
    // 두 번째 순회 때 : value = "banana", index = 1. array = ['apple", "banana", "melon"]
    // 세 번째 순회 때 : value = "banana", index = 2. array = ['apple", "banana", "melon"]
})

arr.find((value, index, array) => {
    // 첫번째 순회 때 : value = "apple", index = 0, array = ['apple", "banana", "melon"]
    // 두 번째 순회 때 : value = "banana", index = 1. array = ['apple", "banana", "melon"]
    // 세 번째 순회 때 : value = "banana", index = 2. array = ['apple", "banana", "melon"]
})

}

// result = "apple"

function add(x, y) {
    return x + y;
}

add(3);