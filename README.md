## khi nào cần sử dụng redux
1. dữ liệu được sử dụng nhiều nơi
2. có hỗ trợ chức năng undo/redo
3 cần cache dữ liệu để tái sử dụng cho những lần sau

`note: nếu app đang chạy tốt mà hông có redux, vậy có thể app đó không cần tới redux`
1. redux sử dụng kiến trúc 1 chiều: uni-directional data flow
2. redux chỉ dùng 1 store duy nhất làm single source of truth
3. redux state là READ-ONLY. muốn update phải dispatch 1 action (js object)
4. những thay đổi của redux state được thực hiện bởi Pure functions (reducer)
5. redux có thể dùng cho các js apps, không chỉ riêng gì ReactJS
## redux có thể dùng cho
1. reactjs
2. angular
3. vuejs
4. pure javascript app
5. orhter javascript app