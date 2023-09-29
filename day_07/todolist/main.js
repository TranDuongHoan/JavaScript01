const API_URL = 'http://localhost:3000/todos'

const todoAPI = {
    async getAllTodos() {
        const res = await fetch(API_URL)
        return await res.json()
    },
    async createNewTodo(data) {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        return await res.json()
    },
    async updateTodo(id, data) {
        const res = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        return await res.json()
    },
    async deleteTodo(id) {
        const res = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        })
        return await res.json()
    }
}

let todos = [];

// Gọi API lấy dữ liệu và render ra giao diện
const getAllTodos = async () => {
    try{
        //Gọi API để lấy dữ liệu
        let data = await todoAPI.getAllTodos();
        
        //lưu dữ liệu vào biến toàn cục
        todos = data;

        // Hiển thị dữ liệu ra giao diện
        renderTodos(todos);
    } catch (error) {
        console.log(error);
    }
}

//Hiển thị dữ liệu ra giao diện
const todoListEl = document.getElementById('todo-list');
const renderTodos = todoList => {
    let html = ""
    todoList.forEach(todo => {
        html += `
        <li>
        <input type="checkbox" ${todo.completed ? `checked` : ''} onchange="toggleStatus(${todo.id})"/>
        <span class=${todo.completed ? 'active': ''}> ${todo.title} </span>
        <button onclick="editTodo(${todo.id})">EDIT</button>
        <button onclick="deleteTodo(${todo.id})">DELETE</button>
      </li>`
    });
    todoListEl.innerHTML = html;
}

// Thêm todo mới
const inputTodoEl = document.getElementById('input-todo');
const btnAdd = document.getElementById('btn-add');

btnAdd.addEventListener('click', async()=>{
    try{
        // lấy dữ liệu từ ô input
        const title = inputTodoEl.value.trim();
        // kiểm tra dữ liệu
        if(title.length === 0) {
            alert('VUI LÒNG NHẬP DỮ LIỆU');
            return
        }

        //Tạo object mới
        const newTodo = {
            title: title,
            completed: false,
        }

        // Gọi API để tạo mới todo
        let data = await todoAPI.createNewTodo(newTodo);

        //Thêm todo mới vào mảng todos(ban đầu tạo)
        todos.push(data);

        //Hiển thị lại dữ liệu để xem dữ liệu đã thêm(reload lại)
        renderTodos(todos)

        //Reset input
        inputTodoEl.value = '';

    }catch(error){
        console.log(error);
    }
});

//Xóa todo
const deleteTodo = async (id) => {
    try{
        //Gọi API để xóa todo
        let data = await todoAPI.deleteTodo(id);

        //Xóa todo khỏi mảng todos
        todos.forEach((todo, index)=>{
            if(todo.id === id){
                todos.splice(index, 1);
            }
        });

        //Hiển thị dữ liệu ra giao diện
        renderTodos(todos);
    }catch(error){
        console.log(error);
    }
}

//Thay đổi trạng thái todo
const toggleStatus = async (id) =>{
    try{
        //Lấy todo trong mảng todos theo id
        let todo = todos.find(todo => todo.id === id);

        //Tạo object mới
        const data = {
            title: todo.title,
            completed: !todo.completed,
        }

        //Gọi API để cập nhật trạng thái todo
        let res = await todoAPI.updateTodo(id, data);

        //Cập nhật trạng thái todo trong mảng todos
        todo.completed = res.completed;

        //Hiển thị dữ liệu ra giao diện
        renderTodos(todos);

    }catch(error){
        console.log(error);
    }
}

//Thay đổi tiêu đề
const editTodo = async (id) =>{
    //Hiển thị promt để nhập dữ liệu mới
}

window.prompt("Nhập tiêu đề mới")

//Vừa load trang --> gọi hàm getAllTodos để lấy dữ liệu và hiển thị ra giao diện
getAllTodos();